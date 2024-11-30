'use client'
import React from "react";
import style from '@/pages/home/home.module.scss'
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter()

    const handleDownload = () => {
        const pdfPath = "resume/Shrilatha.pdf"; // Path to the PDF in the public folder
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = "Shrilatha.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`bg-[#121212] mx-auto px-4 overflow-y-auto body-height mt-16 custom-scrollbar py-4 w-full flex items-center gap-5 justify-center`}>
                <div>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello,
                        <br /> I'm a devleloper</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet nisi efficitur, malesuada lectus ac, venenatis lacus.
                        Nam sodales finibus nulla id iaculis. Aliquam fermentum dapibus congue.
                        Aenean tellus tortor, lacinia ac lobortis eget, mollis vel erat.
                        Mauris molestie metus enim, interdum accumsan ligula euismod vitae.
                        In congue mauris lobortis odio sagittis aliquet. Vivamus gravida eros erat.
                        Suspendisse potenti.</p>
                <div className="mt-5 flex align-middle justify-start gap-5">
                    <button type="button" className={` ${style.rainbow_btn}`} onClick={() => router.push('/contact')}><span>Hire me</span></button>
                    <button type="button"
                        className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 w-40 rounded-full font-bold text-xl"
                        onClick={handleDownload}
                    >Resume</button>
                </div>
                </div>
            <div className="min-w-80">
                <img src="images/coder-women.png" alt="code-women" className="rounded-xl" />
            </div>
        </div>
    )
}

export default Home;