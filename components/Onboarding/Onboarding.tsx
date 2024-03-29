import { useState } from "react";
import Welcome from "./screens/Welcome";
import Name from "./screens/Name";

export default function Onboarding() {

    const [index, setIndex] = useState(0)

    const nextStep = (payload?: any) => {
        setIndex((prev) => prev + 1)
    }

    //return <Welcome onStart={nextStep} />
    return <Name />
}