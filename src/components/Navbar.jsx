"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { IoLogoSlack } from "react-icons/io5";

export default function Navbar() {
    const { data: session } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-600 text-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold flex gap-2 items-center">
                <IoLogoSlack className="text-3xl" />
                <span className="hidden md:inline"><span className="text-red-400">Natures</span> <span className="font-mono">Platter</span></span>
            </div>


            {/* Desktop Links */}
            <div className="space-x-6 hidden md:flex">
                <Link className="hover:font-semibold" href="/">Home</Link>
                <Link className="hover:font-semibold" href="/items">Items</Link>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-3">
                {!session ? (
                    <Link href="/auth/login" className="px-4 py-1 bg-white text-green-600 rounded hover:bg-gray-200">
                        Login
                    </Link>
                ) : (
                    <div className="relative group">
                        <button className="px-3 py-1 bg-white rounded text-black hover:bg-gray-200">
                            {session.user.name} <span className="font-semibold text-red-400">Dashboard</span>
                        </button>
                        <div className="absolute right-0 hidden group-hover:block bg-white shadow rounded mt-1 w-48 text-green-600">
                            <Link href="/dashboard/add-product" className="block px-4 py-2 hover:bg-gray-100">Add Product</Link>
                            <Link href="/dashboard/manage-products" className="block px-4 py-2 hover:bg-gray-100">Manage Products</Link>
                            <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                        </div>
                    </div>
                )}

                {/* Mobile Hamburger */}
                <button className="md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-green-600 text-white flex flex-col items-center md:hidden">
                    <Link href="/" className="w-full text-center px-4 py-2 hover:bg-green-500">Home</Link>
                    <Link href="/items" className="w-full text-center px-4 py-2 hover:bg-green-500">Items</Link>
                    {!session ? (
                        <Link href="/auth/login" className="w-full text-center px-4 py-2 bg-white text-green-600 rounded my-2 hover:bg-gray-200">
                            Login
                        </Link>
                    ) : (
                        <>
                            <Link href="/dashboard/add-product" className="w-full text-center px-4 py-2 hover:bg-green-500">Add Product</Link>
                            <Link href="/dashboard/manage-products" className="w-full text-center px-4 py-2 hover:bg-green-500">Manage Products</Link>
                            <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full text-center px-4 py-2 hover:bg-green-500">Logout</button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
