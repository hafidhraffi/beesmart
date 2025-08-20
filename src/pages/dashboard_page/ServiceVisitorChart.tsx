/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import api from '../../services/api';

interface DataPoint {
    buku: number;
    buku_tahunan: number;
    kalender: number;
    majalah: number;
    tanggal: string;
}

// Function untuk fetch data dari API
const fetchAnalyticData = async (): Promise<DataPoint[]> => {
    const { data } = await api.get("/get-analytic")

    return data;
};

const ServiceVisitorChart: React.FC = () => {
    const [selectedRange, setSelectedRange] = useState<'all' | '7d' | '30d' | '90d'>('all');

    // Menggunakan useQuery untuk fetch data
    const {
        data: apiData = [],
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['analytic-data'],
        queryFn: fetchAnalyticData,
    });

    // Format tanggal untuk sumbu X
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleDateString('id-ID', { month: 'short' });
        return `${day} ${month}`;
    };

    // Filter data berdasarkan range yang dipilih
    const getFilteredData = useMemo(() => {
        if (!apiData.length) return [];

        // Urutkan data berdasarkan tanggal (ascending)
        const sortedData = [...apiData].sort((a, b) =>
            new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime()
        );

        if (selectedRange === 'all') return sortedData;

        const days = selectedRange === '7d' ? 7 : selectedRange === '30d' ? 30 : 90;
        return sortedData.slice(-days);
    }, [apiData, selectedRange]);

    // Custom tick formatter untuk mengurangi jumlah label yang ditampilkan
    const customTickFormatter = (value: string, index: number) => {
        // Untuk data banyak, tampilkan label setiap 7 hari (mingguan)
        if (getFilteredData.length > 30) {
            return index % 7 === 0 ? value : '';
        }
        // Untuk data sedang, tampilkan setiap 3 hari
        if (getFilteredData.length > 15) {
            return index % 3 === 0 ? value : '';
        }
        // Untuk data sedikit, tampilkan semua
        return value;
    };

    // Transform data untuk chart
    const chartData = useMemo(() => {
        return getFilteredData.map(item => ({
            ...item,
            date: formatDate(item.tanggal),
            Buku: item.buku,
            "Buku Tahunan": item.buku_tahunan,
            Kalender: item.kalender,
            Majalah: item.majalah
        }));
    }, [getFilteredData]);

    // Loading state
    if (isLoading) {
        return (
            <div className="w-full p-6">
                <div className="flex justify-center items-center h-96">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Memuat data analitik...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (isError) {
        return (
            <div className="w-full p-6">
                <div className="flex justify-center items-center h-96">
                    <div className="text-center">
                        <div className="text-red-500 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Gagal memuat data: {error instanceof Error ? error.message : 'Unknown error'}
                        </p>
                        <button
                            onClick={() => refetch()}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Coba Lagi
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Empty data state
    if (!apiData.length) {
        return (
            <div className="w-full p-6">
                <div className="flex justify-center items-center h-96">
                    <div className="text-center">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <p className="text-gray-600">Tidak ada data analitik tersedia</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-6 px-5">
            <div className="flex max-lg:flex-col justify-between items-center mb-6 gap-5">
                <h2 className="text-xl font-medium text-gray-700">Grafik Pengunjung Layanan</h2>

                {/* Range Selector */}
                <div className="flex gap-2">
                    {[
                        { key: '7d', label: '7 Hari' },
                        { key: '30d', label: '30 Hari' },
                        { key: '90d', label: '90 Hari' },
                        { key: 'all', label: 'Semua' }
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setSelectedRange(key as any)}
                            className={`px-3 py-1 text-sm rounded-md transition-colors ${selectedRange === key
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#9ca3af' }}
                            tickFormatter={customTickFormatter}
                            interval={0}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#9ca3af' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '20px' }}
                            iconType="line"
                        />

                        <Line
                            type="monotone"
                            dataKey="Buku"
                            stroke="#065f46"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 4, fill: '#065f46' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Buku Tahunan"
                            stroke="#ea580c"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 4, fill: '#ea580c' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Kalender"
                            stroke="#0891b2"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 4, fill: '#0891b2' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Majalah"
                            stroke="#7c3aed"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 4, fill: '#7c3aed' }}
                        />

                        {/* Brush component untuk zoom functionality */}
                        {selectedRange === 'all' && chartData.length > 30 && (
                            <Brush
                                dataKey="date"
                                height={30}
                                stroke="#8884d8"
                                fill="#f0f4ff"
                                tickFormatter={(value) => {
                                    const index = chartData.findIndex(item => item.date === value);
                                    return index % 10 === 0 ? value : '';
                                }}
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Info panel */}
            <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                <p>Menampilkan data {chartData.length} hari terakhir</p>
                {selectedRange === 'all' && chartData.length > 30 && (
                    <p>Gunakan slider di bawah chart untuk zoom ke periode tertentu</p>
                )}
            </div>
        </div>
    );
};

export default ServiceVisitorChart;