import {HTMLProps} from "react";
import style from './form.module.css';

export default function Button({className, children, ...rest}: HTMLProps<HTMLButtonElement>){

    return (
        <button>
            {children}
        </button>
    )
}