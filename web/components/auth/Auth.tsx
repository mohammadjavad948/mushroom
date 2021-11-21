import style from './auth.module.css';
import Button from "../form/Button";
import {Formik, Form, FormikHelpers} from 'formik';
import FormikInput from "../form/formik/FormikInput";
import {useAuthStore} from "../../store/authStore";
import {login} from "../../api/auth";

export default function Auth(){

    const {setToken} = useAuthStore();

    async function submit(value: any, helper: FormikHelpers<any>){
        helper.setSubmitting(true);

        try {
            const data = await login(value);

            setToken(data.data.token);
        } catch (e){
            helper.setSubmitting(false);
        }
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