'use client'

import Image from "next/image";
import Logo from 'public/assets/logo.png'
import { SearchBar } from "../SearchBar";
import style from './style.module.scss'
import { Signin } from "../Signin";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function Home() {

    const { user } = useContext(UserContext)
    console.log(user)
    return (
        <header className={style.header}>
            <Link href="/">
                <Image src={Logo} width={95} height={92} alt="logo" />
            </Link>
            <SearchBar />

            {user ? user.name : <Signin />}

        </header>)
}