import Image from "next/image";
import Logo from 'public/assets/logo.png'
import { SearchBar } from "../SearchBar";
import style from './style.module.scss'
import { Signin } from "../Signin";

export default function Home() {
    return (
    <header className={style.header}>
        <Image  src={Logo} width={95} height={92} alt="logo"/>
        <SearchBar/>
        <Signin/>
    </header>)
}