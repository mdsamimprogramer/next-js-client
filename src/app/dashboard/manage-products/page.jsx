"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { Riple } from "react-loading-indicators";

export default function ManageProductsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [products, setProducts] = useState([]);

    // Safe client-side session check
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [status, router]);

    // Fetch products
    useEffect(() => {
        fetch("https://server-sage-gamma.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => toast.error("Failed to fetch products"));
    }, []);

    // Delete product with toast
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product?");
        if (!confirm) return;

        try {
            const res = await fetch(`https://server-sage-gamma.vercel.app/products/${id}`, { method: "DELETE" });
            if (res.ok) {
                setProducts(products.filter(p => p._id !== id));
                toast.success("Product deleted successfully!");
            } else {
                toast.error("Failed to delete product!");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    // Show loading session
    if (status === "loading") return <div className="flex justify-center items-center min-h-screen animate-fadeIn">
        <div className="animate-pulse">
            <Riple color="#ff006e" size="medium" text="" textColor="" />
        </div>
    </div>
;

    return (
        <div className="px-4 md:px-20 py-12">
            <Toaster position="top-right" />

            <h1 className="text-3xl font-bold mb-6 text-black">Manage Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(p => (
                    <div key={p._id} className="bg-white p-4 rounded shadow flex flex-col justify-between">
                        <h3 className="font-semibold mb-2 text-gray-500">{p.title}</h3>
                        <p className="text-green-700 mb-2 line-clamp-2">{p.shortDescription}</p>
                        <p className="text-green-900 font-semibold mb-4">${p.price}</p>
                        <div className="flex gap-2">
                            <button
                                className="flex-1 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                onClick={() => router.push(`/items/${p._id}`)}
                            >
                                View
                            </button>
                            <button
                                className="flex-1 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                onClick={() => handleDelete(p._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
