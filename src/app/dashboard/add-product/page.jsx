"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        date: new Date().toISOString().slice(0, 10),
        priority: "",
        image: "",
    });

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [status, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title || !form.price) {
            toast.error("Title and Price are required!");
            return;
        }

        try {
            const res = await fetch("https://server-sage-gamma.vercel.app/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                toast.success("Product added successfully!");
                setForm({
                    title: "",
                    shortDescription: "",
                    fullDescription: "",
                    price: "",
                    date: new Date().toISOString().slice(0, 10),
                    priority: "",
                    image: "",
                });
                setTimeout(() => {
                    router.push("/items");
                }, 1500);
            } else {
                toast.error("Failed to add product");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center py-12 px-4 md:px-0">
            <Toaster position="top-right" />
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-green-800">
                    Add New Product
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 text-gray-500 rounded-lg shadow-md space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title *"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <input
                            type="text"
                            name="shortDescription"
                            placeholder="Short Description"
                            value={form.shortDescription}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price *"
                            value={form.price}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <input
                            type="number"
                            name="priority"
                            placeholder="Priority"
                            value={form.priority}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL (optional)"
                            value={form.image}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <textarea
                        name="fullDescription"
                        placeholder="Full Description"
                        value={form.fullDescription}
                        onChange={handleChange}
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        rows={5}
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
