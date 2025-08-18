/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "../../services/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import TestimonialCard from "../home_page/TestimonialCard"
import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { FileUpload } from "primereact/fileupload"
import { Calendar } from "primereact/calendar"
import { Rating } from "primereact/rating"

interface ReviewFormData {
    nama: string
    waktu: Date | null
    bintang: number
    isi: string
    foto: File | null
    link: string
}

interface ReviewFormErrors {
    nama?: string
    waktu?: string
    bintang?: string
    isi?: string
    foto?: string
    link?: string
}

function Review() {
    const [editVisible, setEditVisible] = useState(false)
    const [selectedReview, setSelectedReview] = useState<any>(null)
    const [editError, setEditError] = useState<string | null>(null)
    const [currentPhoto, setCurrentPhoto] = useState<string>("")

    // Form state
    const [formData, setFormData] = useState<ReviewFormData>({
        nama: "",
        waktu: null,
        bintang: 0,
        isi: "",
        foto: null,
        link: ""
    })
    const [formErrors, setFormErrors] = useState<ReviewFormErrors>({})

    const queryClient = useQueryClient()

    const fetchReviewData = async () => {
        const { data } = await api.get("/get-ratings")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['review_data'],
        queryFn: fetchReviewData,
    })

    const editMutation = useMutation({
        mutationFn: async ({ id, formData }: { id: string, formData: ReviewFormData }) => {
            const data = new FormData()
            data.append('nama', formData.nama)
            data.append('bintang', formData.bintang.toString())
            data.append('isi', formData.isi)
            data.append('link', formData.link)
            if (formData.waktu) {
                const date = formData.waktu
                const day = String(date.getDate()).padStart(2, '0')
                const month = String(date.getMonth() + 1).padStart(2, '0') // month is 0-based
                const year = date.getFullYear()

                data.append('waktu', `${day}-${month}-${year}`) // Format: DD-MM-YYYY
            }
            if (formData.foto) {
                data.append('foto', formData.foto)
            }
            return await api.post(`/edit-ratings/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['review_data'] })
            setEditVisible(false)
            setEditError(null)
            resetForm()
        },
        onError: (err) => {
            console.log(err)
            setEditError("Terjadi kesalahan saat mengedit review. Coba lagi setelah beberapa saat!")
        },
    })

    const validateForm = (): boolean => {
        const errors: ReviewFormErrors = {}

        if (!formData.nama.trim()) {
            errors.nama = "Nama tidak boleh kosong"
        }

        if (!formData.waktu) {
            errors.waktu = "Tanggal/waktu tidak boleh kosong"
        }

        if (formData.bintang === 0) {
            errors.bintang = "Rating bintang tidak boleh kosong"
        }

        if (!formData.isi.trim()) {
            errors.isi = "Isi review tidak boleh kosong"
        }

        // Foto is required only if there's no current photo
        if (!currentPhoto && !formData.foto) {
            errors.foto = "Foto tidak boleh kosong"
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const resetForm = () => {
        setFormData({
            nama: "",
            waktu: null,
            bintang: 0,
            isi: "",
            foto: null,
            link: ""
        })
        setFormErrors({})
        setEditError(null)
        setCurrentPhoto("")
        setSelectedReview(null)
    }

    const parseTanggal = (tanggalStr: string) => {
        const [day, month, year] = tanggalStr.split("-").map(Number)
        return new Date(year, month - 1, day) // month is 0-based in JS Date
    }

    const populateFormForEdit = (reviewData: any) => {
        setFormData({
            nama: reviewData.nama || "",
            waktu: reviewData.waktu ? parseTanggal(reviewData.waktu) : null,
            bintang: reviewData.bintang || 0,
            isi: reviewData.isi || "",
            foto: null, // Always null for edit, existing photo shown separately
            link: reviewData.link || ""
        })
        setCurrentPhoto(reviewData.foto_url || "")
        setSelectedReview(reviewData)
        setFormErrors({})
        setEditError(null)
    }

    const handleInputChange = (field: keyof ReviewFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error for this field when user starts typing/selecting
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

    const handleEditSubmit = () => {
        setEditError(null)
        if (validateForm() && selectedReview?._id) {
            editMutation.mutate({ id: selectedReview._id, formData })
        }
    }

    return (
        <>
            {/* Edit Review Dialog */}
            <Dialog
                header="Edit Review"
                visible={editVisible}
                style={{ width: "60vw", maxWidth: "800px" }}
                onHide={() => {
                    setEditVisible(false)
                    resetForm()
                }}
            >
                <div className="flex flex-col gap-4">
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
                            placeholder="Masukkan nama reviewer"
                        />
                        {formErrors.nama && (
                            <small className="text-red-500">{formErrors.nama}</small>
                        )}
                    </div>

                    {/* Tanggal/Waktu */}
                    <div className="field">
                        <label htmlFor="edit-waktu" className="block mb-2 font-medium">
                            Tanggal/Waktu <span className="text-red-500">*</span>
                        </label>
                        <Calendar
                            id="edit-waktu"
                            value={formData.waktu}
                            onChange={(e) => e.value ? handleInputChange('waktu', e.value) : handleInputChange('waktu', null)}
                            className={`w-full ${formErrors.waktu ? 'p-invalid' : ''}`}
                            placeholder="Pilih tanggal/waktu"
                            dateFormat="dd/mm/yy"
                        />
                        {formErrors.waktu && (
                            <small className="text-red-500">{formErrors.waktu}</small>
                        )}
                    </div>

                    {/* Rating Bintang */}
                    <div className="field">
                        <label htmlFor="edit-bintang" className="block mb-2 font-medium">
                            Rating Bintang <span className="text-red-500">*</span>
                        </label>
                        <Rating
                            cancel={false}
                            value={formData.bintang}
                            onChange={(e) => handleInputChange('bintang', e.value)}
                            stars={5}
                            className={formErrors.bintang ? 'p-invalid' : ''}
                        />
                        {formData.bintang > 0 && (
                            <small className="text-gray-600 block mt-1">
                                {formData.bintang} dari 5 bintang
                            </small>
                        )}
                        {formErrors.bintang && (
                            <small className="text-red-500">{formErrors.bintang}</small>
                        )}
                    </div>

                    {/* Foto */}
                    <div className="field">
                        <label htmlFor="edit-foto" className="block mb-2 font-medium">
                            Foto <span className="text-red-500">*</span>
                        </label>

                        {/* Current Photo */}
                        {currentPhoto && (
                            <div className="mb-3">
                                <p className="text-sm text-gray-600 mb-2">Foto saat ini:</p>
                                <img
                                    src={currentPhoto}
                                    alt="Current review photo"
                                    className="w-16 h-16 object-cover border border-gray-300 rounded-full"
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
                            chooseLabel={currentPhoto ? "Pilih Foto Baru (Opsional)" : "Pilih Foto"}
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
                        {currentPhoto && (
                            <small className="text-gray-500 block mt-1">
                                Biarkan kosong jika tidak ingin mengubah foto
                            </small>
                        )}
                    </div>

                    {/* Isi Review */}
                    <div className="field">
                        <label htmlFor="edit-isi" className="block mb-2 font-medium">
                            Isi Review <span className="text-red-500">*</span>
                        </label>
                        <InputTextarea
                            id="edit-isi"
                            value={formData.isi}
                            onChange={(e) => handleInputChange('isi', e.target.value)}
                            rows={6}
                            className={`w-full ${formErrors.isi ? 'p-invalid' : ''}`}
                            placeholder="Masukkan isi review. Gunakan Enter untuk baris baru."
                            autoResize
                        />
                        {formErrors.isi && (
                            <small className="text-red-500">{formErrors.isi}</small>
                        )}
                    </div>

                    {/* Link */}
                    <div className="field">
                        <label htmlFor="edit-link" className="block mb-2 font-medium">
                            Link (Opsional)
                        </label>
                        <InputText
                            id="edit-link"
                            value={formData.link}
                            onChange={(e) => handleInputChange('link', e.target.value)}
                            className={`w-full ${formErrors.link ? 'p-invalid' : ''}`}
                            placeholder="https://example.com (opsional)"
                        />
                        {formErrors.link && (
                            <small className="text-red-500">{formErrors.link}</small>
                        )}
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

            {
                data ?
                    <>
                        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10'>
                            {
                                data.map((element: any, index: number) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-5">
                                            <TestimonialCard
                                                profilePic={element.foto_url}
                                                rating={element.bintang}
                                                username={element.nama}
                                                timeDesc={element.waktu}
                                                testimonialDesc={element.isi}
                                                link={element.link}
                                            />
                                            <div
                                                className="bg-[#017d9e] flex justify-center text-white px-3 py-2 rounded-lg my-3 cursor-pointer active:scale-95 hover:bg-[#015a75] transition-colors"
                                                onClick={() => {
                                                    populateFormForEdit(element)
                                                    setEditVisible(true)
                                                }}
                                            >
                                                Edit Review
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    : isLoading ? (
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

export default Review