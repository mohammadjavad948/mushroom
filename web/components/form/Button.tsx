import {HTMLProps} from "react";
import style from './form.module.css';

export default function Button({className, children, ...rest}: HTMLProps<HTMLButtonElement>){

    return (
        <button
            className={`${style.button} ${className}`}
            {...rest as any}
        >
            {children}
        </button>
    )
}