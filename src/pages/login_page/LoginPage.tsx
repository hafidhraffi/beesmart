import HomepageBanner from '../../assets/homepage_banner.png'
import beesmartLogo from '../../assets/beesmart.png'
import { ArrowLeftIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

type LoginForm = {
    email: string
    password: string
}

function LoginPage() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<LoginForm>();

    const onSubmit = async (data: LoginForm) => {
        setServerError(null);
        try {
            const res = await axios.post("https://beesmart-sm.vercel.app/login", data);

            if (res.data.message === "Login successful")
                navigate("/dashboard");

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Login error:", error);
            setServerError(error.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-screen max-w-[1919px] flex relative">
                <div className='bg-white px-10 py-5 rounded-sm shadow-xl top-1/4 absolute right-2/6 max-lg:hidden'>
                    <img src={beesmartLogo} className='h-14' />
                </div>
                <div className='bg-white px-10 py-5 rounded-sm shadow-xl top-3/4 absolute right-1/6 w-[300px] max-lg:hidden'>
                    <p className='text-[#017d9e] font-bold text-xl'>Partner Desain & Cetak Instansi, Perusahaan, dan Bisnis Anda</p>
                </div>
                <div className='flex min-w-[600px] flex-col h-screen'>
                    <div className='flex justify-between py-5 px-10'>
                        <img src={beesmartLogo} className='h-8' />
                        <div onClick={() => navigate("/")} className='flex items-center gap-1 text-[#017d9e] cursor-pointer'>
                            <ArrowLeftIcon className='h-5' />
                            <p>Kembali</p>
                        </div>
                    </div>
                    <form
                        id="form"
                        onSubmit={handleSubmit(onSubmit)}
                        className='my-auto'
                    >
                        <div className='rounded-sm shadow-xl shadow-gray-400 mx-20 flex flex-col gap-5 px-14 py-10'>
                            <p className='font-bold text-xl'>Login</p>
                            <p>Masukkan email dan password untuk masuk</p>
                            {serverError && <p className="text-red-500">{serverError}</p>}
                            <div>
                                <input
                                    className='w-full rounded-sm border border-gray-300 px-5 py-2 focus:outline focus:outline-[#017d9e]'
                                    placeholder='Email'
                                    {...register("email", { required: "Email wajib diisi" })}
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            <div>
                                <div className='flex items-center relative'>
                                    <input
                                        className='w-full rounded-sm border border-gray-300 px-5 py-2 focus:outline focus:outline-[#017d9e]'
                                        placeholder='Password'
                                        type={showPassword ? 'text' : 'password'}
                                        {...register("password", { required: "Password wajib diisi" })}
                                    />
                                    {showPassword
                                        ? <EyeSlashIcon className='h-5 absolute right-5 cursor-pointer' onClick={() => setShowPassword(false)} />
                                        : <EyeIcon className='h-5 absolute right-5 cursor-pointer' onClick={() => setShowPassword(true)} />}
                                </div>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <button
                                disabled={isSubmitting}
                                type='submit'
                                className='text-white bg-[#017d9e] flex justify-center py-2 rounded-sm cursor-pointer active:scale-95 transition-all disabled:opacity-50'
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
                <img src={HomepageBanner} className='overflow-hidden object-cover h-screen' />
            </div>
        </div>
    )
}

export default LoginPage
