import style from './auth.module.css';
import Input from "../form/Input";
import Button from "../form/Button";

export default function Auth(){

    return (
        <div className={style.container}>
            <div className={style.card}>
                <h3>ورود</h3>
                <Input
                    placeholder={"نام کاربری"}
                />
                <Input
                    placeholder={"رمز عبور"}
                />
                <Button >
                    ورود
                </Button>
            </div>
        </div>
    )
}