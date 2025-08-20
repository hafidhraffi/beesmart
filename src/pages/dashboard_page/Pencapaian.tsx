import api from "../../services/api"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import AchievementPoint from "../home_page/AchievementPoint"
import { Dialog } from "primereact/dialog"
import { InputNumber } from "primereact/inputnumber"
import { Button } from "primereact/button"
import { useState, useEffect } from "react"

function Pencapaian() {
    const [visible, setVisible] = useState(false)
    const [optionKey, setOptionKey] = useState("")
    const [inputValue, setInputValue] = useState<number | null>(null)
    const [errorMsg, setErrorMsg] = useState("")

    const queryClient = useQueryClient()

    const fetchPencapaianData = async () => {
        const { data } = await api.get("/get-beranda")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["pencapaian_data"],
        queryFn: fetchPencapaianData,
    })

    const mutation = useMutation({
        mutationFn: async ({ key, value }: { key: string; value: number }) => {
            const payload = { [key]: value.toString() } // payload dinamis
            return await api.post("/edit-pencapaian", payload)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["pencapaian_data"] })
            setVisible(false)
            setErrorMsg("")
        },
    })

    useEffect(() => {
        if (optionKey && data) {
            setInputValue(data.pencapaian[optionKey])
            setErrorMsg("")
        }
    }, [optionKey, data])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputValue === null || inputValue === undefined || inputValue < 0) {
            setErrorMsg("Input harus berupa angka positif dan tidak boleh kosong")
            return
        }
        mutation.mutate({ key: optionKey, value: inputValue })
    }

    return (
        <>
            <Dialog
                header={"Edit " + optionKey}
                visible={visible}
                style={{ width: "100vw", maxWidth: "500px" }}
                onHide={() => setVisible(false)}
            >
                <form
                    id="edit_pencapaian_form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <InputNumber
                        value={inputValue ?? 0}
                        onValueChange={(e) => e.value ? setInputValue(e.value) : setInputValue(null)}
                        useGrouping={false}
                        placeholder="Masukkan angka"
                        className="w-full"
                        min={0}
                    />
                    {errorMsg && (
                        <p className="text-red-500 text-sm">{errorMsg}</p>
                    )}
                    <Button
                        type="submit"
                        label={mutation.isPending ? "Menyimpan..." : "Simpan"}
                        disabled={mutation.isPending}
                    />
                </form>
            </Dialog>

            {data ? (
                <div className="grid grid-cols-3 max-sm:grid-cols-2 w-full gap-y-5 text-[#017d9e] gap-x-10">
                    <div className="flex flex-col justify-between h-full">
                        <AchievementPoint
                            count={data.pencapaian.pengalaman}
                            desc={"Tahun Pengalaman"}
                        />
                        <div
                            onClick={() => {
                                setOptionKey("pengalaman")
                                setVisible(true)
                            }}
                            className="bg-[#017d9e] flex justify-center text-white px-3 py-2 rounded-lg my-3 cursor-pointer active:scale-95"
                        >
                            Edit Pencapaian
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <AchievementPoint
                            count={data.pencapaian.projek}
                            desc={"Proyek Selesai"}
                        />
                        <div
                            onClick={() => {
                                setOptionKey("projek")
                                setVisible(true)
                            }}
                            className="bg-[#017d9e] flex justify-center text-white px-3 py-2 rounded-lg my-3 cursor-pointer active:scale-95"
                        >
                            Edit Pencapaian
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <AchievementPoint
                            count={data.pencapaian.klien}
                            desc={"Klien Puas"}
                        />
                        <div
                            onClick={() => {
                                setOptionKey("klien")
                                setVisible(true)
                            }}
                            className="bg-[#017d9e] flex justify-center text-white px-3 py-2 rounded-lg my-3 cursor-pointer active:scale-95"
                        >
                            Edit Pencapaian
                        </div>
                    </div>
                </div>
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

export default Pencapaian
