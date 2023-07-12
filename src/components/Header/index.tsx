
import Image from "next/image";
import Logo from 'public/assets/logo.png'
import { SearchBar } from "../SearchBar";
import style from './style.module.scss'
import { Signin } from "../Signin";
import Link from "next/link";

import { cookies } from 'next/headers'
import { Profile } from "../Profile";

export default async function Home() {

    const isLogged = cookies().has('accessToken')
    return (
        <header className={style.header}>
            <Link href="/">
                <Image src={Logo} width={95} height={92} alt="logo" />
            </Link>
            <SearchBar />

            {isLogged ? <Profile /> : <Signin />}



        </header>)
}