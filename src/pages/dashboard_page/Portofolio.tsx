/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import api from "../../services/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { FileUpload } from "primereact/fileupload"
import { Calendar } from "primereact/calendar"

interface FormData {
    nama: string
    jenis: string
    instansi: string
    tanggal: Date | null
    foto: File | null
}

interface FormErrors {
    nama?: string
    jenis?: string
    instansi?: string
    tanggal?: string
    foto?: string
}

function Portofolio() {
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [selectedTitle, setSelectedTitle] = useState<string>("")
    const [selectedPortofolio, setSelectedPortofolio] = useState<any>(null)
    const [deleteError, setDeleteError] = useState<string | null>(null)
    const [addError, setAddError] = useState<string | null>(null)
    const [editError, setEditError] = useState<string | null>(null)

    // Form state
    const [formData, setFormData] = useState<FormData>({
        nama: "",
        jenis: "",
        instansi: "",
        tanggal: null,
        foto: null
    })
    const [formErrors, setFormErrors] = useState<FormErrors>({})
    const [currentImage, setCurrentImage] = useState<string>("")

    const queryClient = useQueryClient()

    const fetchPortofolioData = async () => {
        const { data } = await api.get("/get-portofolio")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['portofolio_data'],
        queryFn: fetchPortofolioData,
    })

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            return await api.post(`/del-portofolio/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portofolio_data'] })
            setDeleteVisible(false)
            setDeleteError(null)
            setSelectedId(null)
        },
        onError: () => {
            setDeleteError("Terjadi kesalahan saat menghapus portofolio. Coba lagi setelah beberapa saat!")
        },
    })

    const addMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const data = new FormData()
            data.append('nama', formData.nama)
            data.append('jenis', formData.jenis)
            data.append('instansi', formData.instansi)
            if (formData.tanggal) {
                const date = formData.tanggal
                const day = String(date.getDate()).padStart(2, '0')
                const month = String(date.getMonth() + 1).padStart(2, '0') // month is 0-based
                const year = date.getFullYear()

                data.append('tanggal', `${day}-${month}-${year}`) // Format: DD-MM-YYYY
            }
            if (formData.foto) {
                data.append('foto', formData.foto)
            }
            return await api.post('/add-portofolio', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portofolio_data'] })
            setAddVisible(false)
            setAddError(null)
            resetForm()
        },
        onError: () => {
            setAddError("Terjadi kesalahan saat menambahkan portofolio. Coba lagi setelah beberapa saat!")
        },
    })

    const editMutation = useMutation({
        mutationFn: async ({ id, formData }: { id: string, formData: FormData }) => {
            const data = new FormData()
            data.append('nama', formData.nama)
            data.append('jenis', formData.jenis)
            data.append('instansi', formData.instansi)
            if (formData.tanggal) {
                const date = formData.tanggal
                const day = String(date.getDate()).padStart(2, '0')
                const month = String(date.getMonth() + 1).padStart(2, '0') // month is 0-based
                const year = date.getFullYear()

                data.append('tanggal', `${day}-${month}-${year}`) // Format: DD-MM-YYYY
            }
            if (formData.foto) {
                data.append('foto', formData.foto)
            }
            return await api.post(`/edit-portofolio/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portofolio_data'] })
            setEditVisible(false)
            setEditError(null)
            resetForm()
        },
        onError: () => {
            setEditError("Terjadi kesalahan saat mengedit portofolio. Coba lagi setelah beberapa saat!")
        },
    })

    const validateForm = (isEdit: boolean = false): boolean => {
        const errors: FormErrors = {}

        if (!formData.nama.trim()) {
            errors.nama = "Nama tidak boleh kosong"
        }

        if (!formData.jenis.trim()) {
            errors.jenis = "Jenis tidak boleh kosong"
        }

        if (!formData.instansi.trim()) {
            errors.instansi = "Instansi tidak boleh kosong"
        }

        if (!formData.tanggal) {
            errors.tanggal = "Tanggal tidak boleh kosong"
        }

        // For add mode, foto is required. For edit mode, foto is optional
        if (!isEdit && !formData.foto) {
            errors.foto = "Foto tidak boleh kosong"
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const resetForm = () => {
        setFormData({
            nama: "",
            jenis: "",
            instansi: "",
            tanggal: null,
            foto: null
        })
        setFormErrors({})
        setAddError(null)
        setEditError(null)
        setCurrentImage("")
        setSelectedPortofolio(null)
    }

    const parseTanggal = (tanggalStr: string) => {
        const [day, month, year] = tanggalStr.split("-").map(Number)
        return new Date(year, month - 1, day) // month is 0-based in JS Date
    }

    const populateFormForEdit = (portofolioData: any) => {
        setFormData({
            nama: portofolioData.nama || "",
            jenis: portofolioData.jenis || "",
            instansi: portofolioData.instansi || "",
            tanggal: portofolioData.tanggal ? parseTanggal(portofolioData.tanggal) : null,
            foto: null // Always null for edit, existing image shown separately
        })
        setCurrentImage(portofolioData.foto || "")
        setSelectedPortofolio(portofolioData)
        setFormErrors({})
        setEditError(null)
    }

    const handleInputChange = (field: keyof FormData, value: string | Date | null) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error for this field when user starts typing
        if (formErrors[field]) {
            setFormErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleFileSelect = (event: any) => {
        const file = event.files[0]
        setFormData(prev => ({ ...prev, foto: file }))
        // Clear error for foto when file is selected
        if (formErrors.foto) {
            setFormErrors(prev => ({ ...prev, foto: undefined }))
        }
    }

    const handleSubmit = () => {
        setAddError(null)
        if (validateForm()) {
            addMutation.mutate(formData)
        }
    }

    const handleEditSubmit = () => {
        setEditError(null)
        if (validateForm(true) && selectedPortofolio?._id) {
            editMutation.mutate({ id: selectedPortofolio._id, formData })
        }
    }

    const fotoBody = (rowData: any) => {
        return (
            <img src={rowData.foto} className="max-h-20" alt="Portofolio" />
        )
    }

    const aksiBody = (rowData: any) => {
        return (
            <div className="flex gap-5">
                <PencilSquareIcon
                    className="h-5 text-[#017d9e] hover:scale-105 active:scale-95 cursor-pointer"
                    onClick={() => {
                        populateFormForEdit(rowData)
                        setEditVisible(true)
                    }}
                />
                <TrashIcon
                    className="h-5 text-red-700 hover:scale-105 active:scale-95 cursor-pointer"
                    onClick={() => {
                        setSelectedId(rowData._id)
                        setSelectedTitle(rowData.nama)
                        setDeleteVisible(true)
                    }}
                />
            </div>
        )
    }

    return (
        <>
            {/* Delete Dialog */}
            <Dialog
                header="Konfirmasi Hapus"
                visible={deleteVisible}
                style={{ width: "100vw", maxWidth: "500px" }}
                onHide={() => {
                    setDeleteVisible(false)
                    setDeleteError(null)
                }}
            >
                <p>Apakah Anda yakin ingin menghapus portofolio <b>{selectedTitle}</b>?</p>
                <div className="flex justify-end gap-3 mt-5">
                    <Button
                        label="Batal"
                        severity="secondary"
                        onClick={() => {
                            setDeleteVisible(false)
                            setDeleteError(null)
                        }}
                    />
                    <Button
                        label={deleteMutation.isPending ? "Menghapus..." : "Hapus"}
                        severity="danger"
                        onClick={() => {
                            setDeleteError(null)
                            if (selectedId) {
                                deleteMutation.mutate(selectedId)
                            }
                        }}
                        disabled={deleteMutation.isPending}
                    />
                </div>
                {deleteError && (
                    <div className="p-3 bg-red-50 border mt-5 border-red-200 rounded">
                        <p className="text-red-700">{deleteError}</p>
                    </div>
                )}
            </Dialog>

            {/* Edit Portofolio Dialog */}
            <Dialog
                header="Edit Portofolio"
                visible={editVisible}
                style={{ width: "100vw", maxWidth: "900px" }}
                onHide={() => {
                    setEditVisible(false)
                    resetForm()
                }}
            >
                <div className="flex flex-col gap-4">
                    {/* Tanggal */}
                    <div className="field">
                        <label htmlFor="edit-tanggal" className="block mb-2 font-medium">
                            Tanggal <span className="text-red-500">*</span>
                        </label>
                        <Calendar
                            id="edit-tanggal"
                            value={formData.tanggal}
                            onChange={(e) => e.value ? handleInputChange('tanggal', e.value) : handleInputChange('tanggal', null)}
                            className={`w-full ${formErrors.tanggal ? 'p-invalid' : ''}`}
                            placeholder="Pilih tanggal"
                            dateFormat="dd/mm/yy"
                            showIcon
                        />
                        {formErrors.tanggal && (
                            <small className="text-red-500">{formErrors.tanggal}</small>
                        )}
                    </div>

                    {/* Nama */}
                    <div className="field">
                        <label htmlFor="edit-nama" className="block mb-2 font-medium">
                            Nama <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="edit-nama"
                            value={formData.nama}
                            onChange={(e) => handleInputChange('nama', e.target.value)}
                            className={`w-full ${formErrors.nama ? 'p-invalid' : ''}`}
                            placeholder="Masukkan nama portofolio"
                        />
                        {formErrors.nama && (
                            <small className="text-red-500">{formErrors.nama}</small>
                        )}
                    </div>

                    {/* Jenis */}
                    <div className="field">
                        <label htmlFor="edit-jenis" className="block mb-2 font-medium">
                            Jenis <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="edit-jenis"
                            value={formData.jenis}
                            onChange={(e) => handleInputChange('jenis', e.target.value)}
                            className={`w-full ${formErrors.jenis ? 'p-invalid' : ''}`}
                            placeholder="Masukkan jenis portofolio"
                        />
                        {formErrors.jenis && (
                            <small className="text-red-500">{formErrors.jenis}</small>
                        )}
                    </div>

                    {/* Instansi */}
                    <div className="field">
                        <label htmlFor="edit-instansi" className="block mb-2 font-medium">
                            Instansi <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="edit-instansi"
                            value={formData.instansi}
                            onChange={(e) => handleInputChange('instansi', e.target.value)}
                            className={`w-full ${formErrors.instansi ? 'p-invalid' : ''}`}
                            placeholder="Masukkan nama instansi"
                        />
                        {formErrors.instansi && (
                            <small className="text-red-500">{formErrors.instansi}</small>
                        )}
                    </div>

                    {/* Foto */}
                    <div className="field">
                        <label htmlFor="edit-foto" className="block mb-2 font-medium">
                            Foto
                        </label>

                        {/* Current Image */}
                        {currentImage && (
                            <div className="mb-3">
                                <p className="text-sm text-gray-600 mb-2">Foto saat ini:</p>
                                <img
                                    src={currentImage}
                                    alt="Current portofolio image"
                                    className="max-h-32 border border-gray-300 rounded"
                                />
                            </div>
                        )}

                        <FileUpload
                            mode="basic"
                            name="edit-foto"
                            accept="image/*"
                            maxFileSize={5000000} // 5MB
                            onSelect={handleFileSelect}
                            auto={false}
                            chooseLabel="Pilih Foto Baru (Opsional, maksimal 5 MB)"
                            className={`${formErrors.foto ? 'p-invalid' : ''}`}
                        />
                        {formErrors.foto && (
                            <small className="text-red-500">{formErrors.foto}</small>
                        )}
                        {formData.foto && (
                            <div className="mt-2">
                                <small className="text-green-600">
                                    File baru terpilih: {formData.foto.name}
                                </small>
                            </div>
                        )}
                        <small className="text-gray-500 block mt-1">
                            Biarkan kosong jika tidak ingin mengubah foto
                        </small>
                    </div>

                    {/* Error Message */}
                    {editError && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded">
                            <p className="text-red-700">{editError}</p>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <Button
                            label="Batal"
                            severity="secondary"
                            onClick={() => {
                                setEditVisible(false)
                                resetForm()
                            }}
                            disabled={editMutation.isPending}
                        />
                        <Button
                            label={editMutation.isPending ? "Menyimpan..." : "Update"}
                            onClick={handleEditSubmit}
                            disabled={editMutation.isPending}
                        />
                    </div>
                </div>
            </Dialog>

            {/* Add Portofolio Dialog */}
            <Dialog
                header="Tambah Portofolio Baru"
                visible={addVisible}
                style={{ width: "100vw", maxWidth: "900px" }}
                onHide={() => {
                    setAddVisible(false)
                    resetForm()
                }}
            >
                <div className="flex flex-col gap-4">
                    {/* Tanggal */}
                    <div className="field">
                        <label htmlFor="tanggal" className="block mb-2 font-medium">
                            Tanggal <span className="text-red-500">*</span>
                        </label>
                        <Calendar
                            id="tanggal"
                            value={formData.tanggal}
                            onChange={(e) => e.value ? handleInputChange('tanggal', e.value) : handleInputChange('tanggal', null)}
                            className={`w-full ${formErrors.tanggal ? 'p-invalid' : ''}`}
                            placeholder="Pilih tanggal"
                            dateFormat="dd/mm/yy"
                            showIcon
                        />
                        {formErrors.tanggal && (
                            <small className="text-red-500">{formErrors.tanggal}</small>
                        )}
                    </div>

                    {/* Nama */}
                    <div className="field">
                        <label htmlFor="nama" className="block mb-2 font-medium">
                            Nama <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="nama"
                            value={formData.nama}
                            onChange={(e) => handleInputChange('nama', e.target.value)}
                            className={`w-full ${formErrors.nama ? 'p-invalid' : ''}`}
                            placeholder="Masukkan nama portofolio"
                        />
                        {formErrors.nama && (
                            <small className="text-red-500">{formErrors.nama}</small>
                        )}
                    </div>

                    {/* Jenis */}
                    <div className="field">
                        <label htmlFor="jenis" className="block mb-2 font-medium">
                            Jenis <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="jenis"
                            value={formData.jenis}
                            onChange={(e) => handleInputChange('jenis', e.target.value)}
                            className={`w-full ${formErrors.jenis ? 'p-invalid' : ''}`}
                            placeholder="Masukkan jenis portofolio"
                        />
                        {formErrors.jenis && (
                            <small className="text-red-500">{formErrors.jenis}</small>
                        )}
                    </div>

                    {/* Instansi */}
                    <div className="field">
                        <label htmlFor="instansi" className="block mb-2 font-medium">
                            Instansi <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="instansi"
                            value={formData.instansi}
                            onChange={(e) => handleInputChange('instansi', e.target.value)}
                            className={`w-full ${formErrors.instansi ? 'p-invalid' : ''}`}
                            placeholder="Masukkan nama instansi"
                        />
                        {formErrors.instansi && (
                            <small className="text-red-500">{formErrors.instansi}</small>
                        )}
                    </div>

                    {/* Foto */}
                    <div className="field">
                        <label htmlFor="foto" className="block mb-2 font-medium">
                            Foto <span className="text-red-500">*</span>
                        </label>
                        <FileUpload
                            mode="basic"
                            name="foto"
                            accept="image/*"
                            maxFileSize={5000000} // 5MB
                            onSelect={handleFileSelect}
                            auto={false}
                            chooseLabel="Pilih Foto (Maksimal 5 MB)"
                            className={`${formErrors.foto ? 'p-invalid' : ''}`}
                        />
                        {formErrors.foto && (
                            <small className="text-red-500">{formErrors.foto}</small>
                        )}
                        {formData.foto && (
                            <div className="mt-2">
                                <small className="text-green-600">
                                    File terpilih: {formData.foto.name}
                                </small>
                            </div>
                        )}
                    </div>

                    {/* Error Message */}
                    {addError && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded">
                            <p className="text-red-700">{addError}</p>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <Button
                            label="Batal"
                            severity="secondary"
                            onClick={() => {
                                setAddVisible(false)
                                resetForm()
                            }}
                            disabled={addMutation.isPending}
                        />
                        <Button
                            label={addMutation.isPending ? "Menyimpan..." : "Simpan"}
                            onClick={handleSubmit}
                            disabled={addMutation.isPending}
                        />
                    </div>
                </div>
            </Dialog>

            {data ? (
                <>
                    <div
                        className="bg-[#017d9e] w-fit text-white px-3 py-1 rounded-sm my-3 cursor-pointer active:scale-95"
                        onClick={() => setAddVisible(true)}
                    >
                        Tambah
                    </div>
                    <DataTable
                        value={data}
                        stripedRows
                        tableStyle={{ minWidth: '50rem' }}
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                    >
                        <Column field="tanggal" header="Tanggal"></Column>
                        <Column field="foto" header="Foto" body={fotoBody}></Column>
                        <Column field="nama" header="Nama"></Column>
                        <Column field="jenis" header="Jenis"></Column>
                        <Column field="instansi" header="Instansi"></Column>
                        <Column header="Aksi" body={aksiBody}></Column>
                    </DataTable>
                </>
            ) : isLoading ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <p>Loading...</p>
                </div>
            ) : isError ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <p>{error.message}</p>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default Portofolio