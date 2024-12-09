import s from './Button.module.css';
import {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
}

export function Button({title, onClick, disabled}: ButtonProps) {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled}>{title}</button>);
}