"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ManageProductsPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const [products, setProducts] = useState([]);

    if (!session) {
        router.push("/auth/login");
        return null;
    }

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
        if (res.ok) setProducts(products.filter(p => p._id !== id));
    };

    return (
        <div className="px-4 md:px-20 py-12">
            <h1 className="text-3xl font-bold mb-6 text-black">Manage Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(p => (
                    <div key={p._id} className="bg-white p-4 rounded shadow flex flex-col justify-between">
                        <h3 className="font-semibold mb-2">{p.title}</h3>
                        <p className="text-green-700 mb-2 line-clamp-2">{p.shortDescription}</p>
                        <p className="text-green-900 font-semibold mb-4">${p.price}</p>
                        <div className="flex gap-2">
                            <button
                                className="flex-1 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                                onClick={() => router.push(`/items/${p._id}`)}
                            >
                                View
                            </button>
                            <button
                                className="flex-1 py-1 bg-red-600 text-white rounded hover:bg-red-700"
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
