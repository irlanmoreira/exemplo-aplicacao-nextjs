import { ReactNode } from 'react';
import style from './style.module.scss';

interface ButtonProps {
    children?:ReactNode;
    typeButton?:'primary'|'secundary'|'search';
}

export default function Button({typeButton, children}:ButtonProps) {

    return (
        <button className={`${style.button} ${typeButton&&style[typeButton]}`}>
            {children}
        </button>
    )
}