import style from './auth.module.css';
import Button from "../form/Button";
import {Formik, Form} from 'formik';
import FormikInput from "../form/formik/FormikInput";

export default function Auth(){

    function submit(value: any){
        console.log(value)
    }

    return (
        <div className={style.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={submit}
            >
                <Form className={style.card}>
                    <h3>ورود</h3>
                    <FormikInput
                        name={'username'}
                        placeholder={"نام کاربری"}
                    />
                    <FormikInput
                        type={'password'}
                        name={'password'}
                        placeholder={"رمز عبور"}
                    />
                    <Button type={'submit'}>
                        ورود
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}