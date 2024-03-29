import { useEffect, useState } from "react";

export default function useAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(() => null)
    }, [])

    return { user }
}