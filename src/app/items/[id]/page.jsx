"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

export default function ItemDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p className="p-10 text-green-800">Loading...</p>;

    return (
        <div className="px-4 md:px-20 py-12 bg-green-50 min-h-screen">
            {/* Back Button */}
            <button
                className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                onClick={() => router.back()}
            >
                ← Back
            </button>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Large Image / Banner */}
                <div className="relative w-full h-96">
                    <Image
                        src={product.image || "/items/default.jpg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-green-700 mb-4">{product.fullDescription}</p>

                    {/* Meta Info */}
                    <div className="text-green-900 font-semibold space-y-1 mb-2">
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Priority: {product.priority}</p>
                        <p>Date Added: {product.dateAdded}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
