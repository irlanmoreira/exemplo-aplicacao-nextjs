import Image from "next/image";
import Logo from 'public/assets/logo.png'
import { SearchBar } from "../SearchBar";
import style from './style.module.scss'
import { Signin } from "../Signin";
import Link from "next/link";

export default function Home() {
    return (
        <header className={style.header}>
            <Link href="/">
                <Image src={Logo} width={95} height={92} alt="logo" />
            </Link>
            <SearchBar />
            <Signin />
        </header>)
}