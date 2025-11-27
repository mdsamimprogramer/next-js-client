"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ItemsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    // Filter products
    const filteredProducts = products.filter((p) => {
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category ? p.category === category : true;
        return matchesSearch && matchesCategory;
    });

    // Unique categories
    const categories = Array.from(new Set(products.map((p) => p.category)));

    return (
        <div className="px-4 mx-auto justify-center text-center md:px-20 py-12 min-h-screen">
            <h1 className="text-4xl font-bold text-green-800 mb-2">Our Items</h1>
            <p className="mb-6 text-green-700">Browse our selection of fresh products</p>

            {/* Search & Category Filter */}
            <div className="flex mx-auto justify-center text-center flex-col md:flex-row gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search items..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 w-full md:w-1/3 border rounded"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 w-full md:w-1/3 border rounded"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat, idx) => (
                        <option key={`${cat}-${idx}`} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Loading / Empty State */}
            {loading && <p className="text-green-800">Loading products...</p>}
            {!loading && filteredProducts.length === 0 && (
                <p className="text-green-800">No products found.</p>
            )}

            {/* Grid of Products */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {!loading &&
                    filteredProducts.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer overflow-hidden"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={
                                        item.image && (item.image.startsWith("http") || item.image.startsWith("/"))
                                            ? item.image
                                            : "/items/default.jpg"
                                    }
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                <p className="text-green-700 text-sm mb-2 line-clamp-2">
                                    {item.shortDescription}
                                </p>
                                <p className="text-green-900 font-semibold mb-3">${item.price}</p>
                                <button
                                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                    onClick={() => router.push(`/items/${item._id}`)}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
