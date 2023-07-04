import Link from 'next/link'
import style from './style.module.scss'

export function Signin() {
    return (
        <div className={style.login}><Link href="/signin">Sign in</Link></div>
    )
}