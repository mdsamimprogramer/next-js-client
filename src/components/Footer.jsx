"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-8 pb-2">
            <div className="px-4 md:px-20 mx-auto md:flex md:justify-between md:items-start space-y-8 md:space-y-0">

                {/* ===== Links Section ===== */}
                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Quick Links</h4>
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/items" className="hover:underline">Items</Link>
                        <Link href="/dashboard/add-product" className="hover:underline">Add Product</Link>
                        <Link href="/dashboard/manage-products" className="hover:underline">Manage Products</Link>
                    </div>
                </div>

                {/* ===== Social Icons Section ===== */}
                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Follow Us</h4>
                    <div className="flex space-x-4 text-white">
                        <a href="#" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
                        <a href="#" className="hover:text-gray-300"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
                    </div>
                </div>

                {/* ===== Optional Info Section ===== */}
                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Contact</h4>
                    <p>Email: info@naturesplatter.com</p>
                    <p>Phone: +880 1234 567890</p>
                </div>
            </div>

            {/* ===== Copyright ===== */}
            <div className="mt-5 border-t border-green-500 pt-6 text-center text-sm text-green-200">
                &copy; {new Date().getFullYear()} Natures Platter. All rights reserved.
            </div>
        </footer>
    );
}
