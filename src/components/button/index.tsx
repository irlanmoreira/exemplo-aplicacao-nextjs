import { ReactNode } from 'react';
import style from './style.module.css';

interface ButtonProps {
    children?:ReactNode;
}

export default function Button({children}:ButtonProps) {

    return (
        <button className={style.buttonRed}>
            {children}
        </button>
    )
}