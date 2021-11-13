import style from './auth.module.css';
import Input from "../form/Input";

export default function Auth(){

    return (
        <div className={style.container}>
            <div className={style.card}>
                <h3>ورود</h3>
                <Input
                    placeholder={"نام کاربری"}
                />
            </div>
        </div>
    )
}