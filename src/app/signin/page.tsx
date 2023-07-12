'use client'

import Image from "next/image";
import styles from "./style.module.scss";

import Logo from "public/assets/logo.png";
import { Input } from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

import { redirect } from "next/navigation";
import { httpClient } from "@/services/api";

import { setCookie, hasCookie } from 'cookies-next'
export default function Signin() {

    if(hasCookie('accessToken')){
        redirect('/')
    }

        

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





    async function login(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const { data } = await httpClient.post('/login', { email, password })

        if (data.accessToken) {
            setCookie('accessToken', data.accessToken, { maxAge: 60 * 60 * 24 * 30 })
            redirect('/',);
        }



    }

    return (
        <main className={styles.container}>
            <section className={styles.titleSection}>
                <h1>Compartilhe suas dicas de leitura com os seus amigos</h1>
                <Image src={Logo} width={298} height={289} alt="Bookbrand" />
            </section>
            <section className={styles.signinSection}>
                <form onSubmit={login}>
                    <Input type="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <Input type="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                    <Button typeButton="primary">Entrar</Button>
                    <Link href="">Esqueceu a senha?</Link>
                    <Button type="submit" typeButton="secondary">Criar nova conta</Button>
                </form>
                <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}>Entrar com o github</a>
            </section>
        </main>
    )
}