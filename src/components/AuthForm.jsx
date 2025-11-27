"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }) {
    const router = useRouter();
    const [data, setData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (type === "register") {
            await fetch("/api/users/register", {
                method: "POST",
                body: JSON.stringify(data),
            });

            alert("Registration successful!");
            router.push("/login");
        }

        if (type === "login") {
            const res = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            if (!res.error) router.push("/dashboard");
            else alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {type === "register" && (
                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
            )}

            <input
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChange}
                className="border p-2 w-full"
            />

            <button className="px-4 py-2 bg-green-600 text-white rounded">
                {type === "login" ? "Login" : "Register"}
            </button>
        </form>
    );
}
