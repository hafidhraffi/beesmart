import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CornerWaImage from "./assets/corner_wa_logo.png"
import { useMutation } from "@tanstack/react-query";
import api from "./services/api";

function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const visitWa = useMutation({
        mutationFn: async () => {
            return await api.post('/visit?layanan=whatsapp')
        },
    })

    function onVisitWa() {
        visitWa.mutate()
        window.open("https://wa.me/6281282008082?text=Halo%20Beesmart%2C%20saya%20menghubungi%20melalui%20website", "_blank");
    }

    return (
        <>
            <div className="fixed z-50 flex justify-center w-screen max-md:bottom-10 max-sm:bottom-5 bottom-14 pointer-events-none">
                <div className="w-full max-w-[1520px] flex justify-end max-md:mr-10 max-sm:mr-5 mr-14">
                    <div onClick={onVisitWa} className="bg-green-500 rounded-full z-50 cursor-pointer p-2 hover:scale-110 w-fit pointer-events-auto">
                        <img src={CornerWaImage} className="h-12" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Outlet />
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
