import style from '../../styles/main.module.css';


export default function MainLayout(props: {children?: any}){

    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}