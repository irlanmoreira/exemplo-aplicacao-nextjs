import style from './style.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function Input({ label, ...rest }: InputProps) {
    return (
        <input className={style.input} placeholder={rest.placeholder} type={rest.type} onChange={rest.onChange}/>
    )
}