import { Heart } from "lucide-react";
import Image from "next/image";
import style from "./style.module.scss";
import { ButtonLike } from "../ButtonLike";

interface CommentProps {
    comment: {
        userId: number,
        text: string,
        likes: number,
        usersLiked: number[],
    }
}

export function Comment({ comment }: CommentProps) {
    return (
        <div className={style.container}>
            <div>
                <Image src="" width={80} height={80} alt="" />
            </div>

            <div className={style.content}>
                <p>
                    {comment.text}
                </p>
                <ButtonLike likes={comment.likes} usersLiked={comment.usersLiked} />
            </div>
        </div>
    )
}