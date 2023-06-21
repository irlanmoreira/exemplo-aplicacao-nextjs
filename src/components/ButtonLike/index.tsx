'use client'

import { Heart } from "lucide-react";
import style from "./style.module.scss";
import { useState } from "react";

interface ButtonLikeProps {
    likes: number,
    usersLiked: number[],

}

export function ButtonLike({ likes, usersLiked }: ButtonLikeProps) {

    let isUsersLiked = usersLiked.includes(1)

    const [like, setLike] = useState(isUsersLiked)

    const handleLike = () => {


            setLike(!isUsersLiked)
            isUsersLiked = !isUsersLiked 
    }

    return (
        <button
            onClick={handleLike}
            className={`
                ${style.like} ${like && style.likeActive}
                `}

        >
            <Heart size={20} color={"#4B4B4B"} fill={"#4B4B4B"} />
            <span>gostei ({likes})</span>
        </button>
    )
}