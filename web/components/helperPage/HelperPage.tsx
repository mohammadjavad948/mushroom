import style from './helperPage.module.css';

export default function HelperPage(props: {children: any}){

    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}