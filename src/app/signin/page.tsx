'use client'

import Image from "next/image";
import styles from "./style.module.scss";

import Logo from "public/assets/logo.png";
import { Input } from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, setUser } = useContext(UserContext);

    const router = useRouter();
    useEffect(() => {
        if (user) {
            console.log(user)
            router.push('/');

        } else {
            console.log('user not found')
        }
    }, [])

    function login(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        if (email === 'irlan@gmail.com' && password === '123456') {
            setUser({
                name: 'Irlan Moreira',
                email: 'irlan@gmail.com',
                photo: '131212l312lk3.png'
            })

            router.push('/');
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
            </section>
        </main>
    )
}