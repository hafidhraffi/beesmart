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
import { InputTextarea } from "primereact/inputtextarea"
import { FileUpload } from "primereact/fileupload"

interface FormData {
    judul: string
    isi: string
    gambar: File | null
}

interface FormErrors {
    judul?: string
    isi?: string
    gambar?: string
}

function Blog() {
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [selectedTitle, setSelectedTitle] = useState<string>("")
    const [selectedBlog, setSelectedBlog] = useState<any>(null)
    const [deleteError, setDeleteError] = useState<string | null>(null)
    const [addError, setAddError] = useState<string | null>(null)
    const [editError, setEditError] = useState<string | null>(null)

    // Form state
    const [formData, setFormData] = useState<FormData>({
        judul: "",
        isi: "",
        gambar: null
    })
    const [formErrors, setFormErrors] = useState<FormErrors>({})
    const [currentImage, setCurrentImage] = useState<string>("")

    const queryClient = useQueryClient()

    const fetchBlogData = async () => {
        const { data } = await api.get("/get-blog")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['blog_data'],
        queryFn: fetchBlogData,
    })

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            return await api.post(`/del-blog/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog_data'] })
            setDeleteVisible(false)
            setDeleteError(null)
            setSelectedId(null)
        },
        onError: () => {
            setDeleteError("Terjadi kesalahan. Coba lagi setelah beberapa saat!")
        },
    })

    const addMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const data = new FormData()
            data.append('judul', formData.judul)
            data.append('isi', formData.isi)
            if (formData.gambar) {
                data.append('gambar', formData.gambar)
            }
            return await api.post('/add-blog', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog_data'] })
            setAddVisible(false)
            setAddError(null)
            resetForm()
        },
        onError: () => {
            setAddError("Terjadi kesalahan saat menambahkan blog. Coba lagi setelah beberapa saat!")
        },
    })

    const editMutation = useMutation({
        mutationFn: async ({ id, formData }: { id: string, formData: FormData }) => {
            const data = new FormData()
            data.append('judul', formData.judul)
            data.append('isi', formData.isi)
            if (formData.gambar) {
                data.append('gambar', formData.gambar)
            }
            return await api.post(`/edit-blog/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog_data'] })
            setEditVisible(false)
            setEditError(null)
            resetForm()
        },
        onError: () => {
            setEditError("Terjadi kesalahan saat mengedit blog. Coba lagi setelah beberapa saat!")
        },
    })

    const validateForm = (isEdit: boolean = false): boolean => {
        const errors: FormErrors = {}

        if (!formData.judul.trim()) {
            errors.judul = "Judul tidak boleh kosong"
        }

        if (!formData.isi.trim()) {
            errors.isi = "Isi tidak boleh kosong"
        }

        // For add mode, gambar is required. For edit mode, gambar is optional
        if (!isEdit && !formData.gambar) {
            errors.gambar = "Gambar tidak boleh kosong"
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const resetForm = () => {
        setFormData({
            judul: "",
            isi: "",
            gambar: null
        })
        setFormErrors({})
        setAddError(null)
        setEditError(null)
        setCurrentImage("")
        setSelectedBlog(null)
    }

    const populateFormForEdit = (blogData: any) => {
        setFormData({
            judul: blogData.judul || "",
            isi: blogData.isi || "",
            gambar: null // Always null for edit, existing image shown separately
        })
        setCurrentImage(blogData.gambar || "")
        setSelectedBlog(blogData)
        setFormErrors({})
        setEditError(null)
    }

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error for this field when user starts typing
        if (formErrors[field]) {
            setFormErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleFileSelect = (event: any) => {
        const file = event.files[0]
        setFormData(prev => ({ ...prev, gambar: file }))
        // Clear error for gambar when file is selected
        if (formErrors.gambar) {
            setFormErrors(prev => ({ ...prev, gambar: undefined }))
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
        if (validateForm(true) && selectedBlog?._id) {
            editMutation.mutate({ id: selectedBlog._id, formData })
        }
    }

    const isiBody = (rowData: any) => {
        return (
            <p className="line-clamp-2">{rowData.isi}</p>
        )
    }

    const gambarBody = (rowData: any) => {
        return (
            <img src={rowData.gambar} className="max-h-20" />
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
                        setSelectedTitle(rowData.judul)
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
                style={{ width: "30vw" }}
                onHide={() => {
                    setDeleteVisible(false)
                    setDeleteError(null)
                }}
            >
                <p>Apakah Anda yakin ingin menghapus blog <b>{selectedTitle}</b>?</p>
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
                {deleteError && <p className="text-red-500 mt-3">{deleteError}</p>}
            </Dialog>

            {/* Edit Blog Dialog */}
            <Dialog
                header="Edit Blog"
                visible={editVisible}
                style={{ width: "50vw" }}
                onHide={() => {
                    setEditVisible(false)
                    resetForm()
                }}
            >
                <div className="flex flex-col gap-4">
                    {/* Judul */}
                    <div className="field">
                        <label htmlFor="edit-judul" className="block mb-2 font-medium">
                            Judul <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="edit-judul"
                            value={formData.judul}
                            onChange={(e) => handleInputChange('judul', e.target.value)}
                            className={`w-full ${formErrors.judul ? 'p-invalid' : ''}`}
                            placeholder="Masukkan judul blog"
                        />
                        {formErrors.judul && (
                            <small className="text-red-500">{formErrors.judul}</small>
                        )}
                    </div>

                    {/* Gambar */}
                    <div className="field">
                        <label htmlFor="edit-gambar" className="block mb-2 font-medium">
                            Gambar
                        </label>

                        {/* Current Image */}
                        {currentImage && (
                            <div className="mb-3">
                                <p className="text-sm text-gray-600 mb-2">Gambar saat ini:</p>
                                <img
                                    src={currentImage}
                                    alt="Current blog image"
                                    className="max-h-32 border border-gray-300 rounded"
                                />
                            </div>
                        )}

                        <FileUpload
                            mode="basic"
                            name="edit-gambar"
                            accept="image/*"
                            maxFileSize={5000000} // 5MB
                            onSelect={handleFileSelect}
                            auto={false}
                            chooseLabel="Pilih Gambar Baru (Opsional)"
                            className={`${formErrors.gambar ? 'p-invalid' : ''}`}
                        />
                        {formErrors.gambar && (
                            <small className="text-red-500">{formErrors.gambar}</small>
                        )}
                        {formData.gambar && (
                            <div className="mt-2">
                                <small className="text-green-600">
                                    File baru terpilih: {formData.gambar.name}
                                </small>
                            </div>
                        )}
                        <small className="text-gray-500 block mt-1">
                            Biarkan kosong jika tidak ingin mengubah gambar
                        </small>
                    </div>

                    {/* Isi */}
                    <div className="field">
                        <label htmlFor="edit-isi" className="block mb-2 font-medium">
                            Isi <span className="text-red-500">*</span>
                        </label>
                        <InputTextarea
                            id="edit-isi"
                            value={formData.isi}
                            onChange={(e) => handleInputChange('isi', e.target.value)}
                            rows={5}
                            className={`w-full ${formErrors.isi ? 'p-invalid' : ''}`}
                            placeholder="Masukkan isi blog"
                        />
                        {formErrors.isi && (
                            <small className="text-red-500">{formErrors.isi}</small>
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

            {/* Add Blog Dialog */}
            <Dialog
                header="Tambah Blog Baru"
                visible={addVisible}
                style={{ width: "50vw" }}
                onHide={() => {
                    setAddVisible(false)
                    resetForm()
                }}
            >
                <div className="flex flex-col gap-4">
                    {/* Judul */}
                    <div className="field">
                        <label htmlFor="judul" className="block mb-2 font-medium">
                            Judul <span className="text-red-500">*</span>
                        </label>
                        <InputText
                            id="judul"
                            value={formData.judul}
                            onChange={(e) => handleInputChange('judul', e.target.value)}
                            className={`w-full ${formErrors.judul ? 'p-invalid' : ''}`}
                            placeholder="Masukkan judul blog"
                        />
                        {formErrors.judul && (
                            <small className="text-red-500">{formErrors.judul}</small>
                        )}
                    </div>

                    {/* Gambar */}
                    <div className="field">
                        <label htmlFor="gambar" className="block mb-2 font-medium">
                            Gambar <span className="text-red-500">*</span>
                        </label>
                        <FileUpload
                            mode="basic"
                            name="gambar"
                            accept="image/*"
                            maxFileSize={5000000} // 5MB
                            onSelect={handleFileSelect}
                            auto={false}
                            chooseLabel="Pilih Gambar"
                            className={`${formErrors.gambar ? 'p-invalid' : ''}`}
                        />
                        {formErrors.gambar && (
                            <small className="text-red-500">{formErrors.gambar}</small>
                        )}
                        {formData.gambar && (
                            <div className="mt-2">
                                <small className="text-green-600">
                                    File terpilih: {formData.gambar.name}
                                </small>
                            </div>
                        )}
                    </div>

                    {/* Isi */}
                    <div className="field">
                        <label htmlFor="isi" className="block mb-2 font-medium">
                            Isi <span className="text-red-500">*</span>
                        </label>
                        <InputTextarea
                            id="isi"
                            value={formData.isi}
                            onChange={(e) => handleInputChange('isi', e.target.value)}
                            rows={5}
                            className={`w-full ${formErrors.isi ? 'p-invalid' : ''}`}
                            placeholder="Masukkan isi blog"
                        />
                        {formErrors.isi && (
                            <small className="text-red-500">{formErrors.isi}</small>
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
                        <Column field="tanggal_format" header="Tanggal" className="min-w-[150px]"></Column>
                        <Column field="gambar" header="Gambar" body={gambarBody}></Column>
                        <Column field="judul" header="Judul" className="min-w-[300px]"></Column>
                        <Column field="isi" header="Isi" body={isiBody}></Column>
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

export default Blog