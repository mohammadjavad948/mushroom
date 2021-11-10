import style from './sideBarIcon.module.css';

export default function SideBarIcon(props: {children: any}){

    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}