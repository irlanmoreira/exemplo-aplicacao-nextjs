import { ReactNode } from 'react';
import style from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?:ReactNode;
    typeButton?:'primary'|'secondary'|'search'|'danger';
}

export default function Button({typeButton, children, ...rest}:ButtonProps) {

    return (
        <button className={`${style.button} ${typeButton&&style[typeButton]}`} type={rest.type}>
            {children}
        </button>
    )
}