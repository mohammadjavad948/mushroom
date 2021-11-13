import {HTMLProps} from "react";
import style from './form.module.css';

export default function Input({className, ...rest}: HTMLProps<HTMLInputElement>){

    return (
        <input
            className={`${style.input} ${className}`}
            {...rest as any}
        />
    )
}