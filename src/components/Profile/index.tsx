'use client'
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import style from './style.module.scss'
import { setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export function Profile() {
    const router = useRouter()
    return (
        <div className={style.profile}>
            <span>Irlan Moreira</span>
            <ul className={style.menu}>
                <li>
                    <ChevronDown width={15} height={15} />
                    <ul className={style.subMenu}>
                        <li onClick={(e) => {
                            deleteCookie('accessToken')
                            router.refresh()
                        }
                        }>
                            <div >Logout</div>
                        </li>
                    </ul>
                </li>
            </ul >


        </div >)
}