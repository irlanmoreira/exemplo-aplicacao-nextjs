'use client'

import { Heart } from "lucide-react";
import style from "./style.module.scss";
import { useState } from "react";


export function ButtonLike() {
    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <button
            onClick={handleLike}
            className={`
                ${style.like} ${like && style.likeActive}
                `}

        >
            <Heart size={20} color={"#4B4B4B"} fill={"#4B4B4B"} />
            <span>gostei (12)</span>
        </button>
    )
}