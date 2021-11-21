import Input from "../Input";
import {Field} from 'formik';

export default function FormikInput(props: any){

    return (
        <Field name={props.name}>
            {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
              }) => (
                <div>
                    <Input {...field} {...props} />
                    {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                    )}
                </div>
            )}
        </Field>
    )
}