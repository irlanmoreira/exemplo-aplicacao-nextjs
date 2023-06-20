import { Heart } from "lucide-react";
import Image from "next/image";
import style from "./style.module.scss";
import { ButtonLike } from "../ButtonLike";

export function Comment() {
    return (
        <div className={style.container}>
            <div>
                <Image src="" width={80} height={80} alt="" />
            </div>

            <div className={style.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis a augue sit amet auctor. Integer eget gravida nibh, vel feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius sapien. Phasellus in tristique felis. Phasellus blandit augue.
                </p>
                <ButtonLike/>
            </div>
        </div>
    )
}