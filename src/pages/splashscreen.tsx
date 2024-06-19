import React, { useEffect, useState } from "react";
import anime from "animejs";


interface SplashScreenProps {
    finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }: SplashScreenProps) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const animate = (): void => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });
        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 2000,
            easing: "easeInOutExpo"
        })
             
    };


    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])
    return (
        <div className="bg-[#f6fbfc] flex h-screen overflow-hidden w-full items-center justify-center">
            <div>
                <center><div className="lds-dual-ring"></div></center>
                <img id="logo" src="/images/logos/logoHeader.png" height={200} width={200} alt="" />
            </div>
        </div >
    );
};

export default SplashScreen;