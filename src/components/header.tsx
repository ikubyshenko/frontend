"use client"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row w-full items-center bg-red-800">

            <div className="basis-1/4 flex items-center justify-start px-4 my-2">
                <image
                    src="images/logo.png"
                    alt="Logo"
                    width={64}
                    height={64}
                    className="h-16 w-16"
                    priority
                />
            </div>

            <div className="basis-1/4" />

                <nav className="basis-1/4 flex flex-row items-center justify-end gap-4 px-4" >
                    <Link href="/" className="my-auto p-2 hover:bg-black rounded text-white hover:text-yellow-200">Home</Link>
                    <Link href="#" className="my-auto p-2 hover:bg-black rounded text-white hover:text-yellow-200">lab3</Link>
                    <Link href="#" className="my-auto p-2 hover:bg-black rounded text-white hover:text-yellow-200">LogIn</Link>
                    <Link href="#" className="my-auto p-2 hover:bg-black rounded text-white hover:text-yellow-200">LogOut</Link>
                </nav>
        </header>
    );
}



