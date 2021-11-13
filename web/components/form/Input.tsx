import {InputProps} from "react-select";
import style from './form.module.css';

export default function Input({className, ...rest}?: InputProps<HTMLInputElement>){

    return (
        <input
            className={`${style.input} ${className}`}
            {...rest}
        />
    )
}