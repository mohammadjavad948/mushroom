import style from './sideBarIcon.module.css';

export default function SideBarIcon(props: {children: any, click?: any}){

    return (
        <div onClick={props.click} className={style.container}>
            {props.children}
        </div>
    )
}