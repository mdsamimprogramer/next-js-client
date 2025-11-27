"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status]);

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {session.user.name} ({session.user.email})</p>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
}
