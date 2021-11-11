import style from './helperPage.module.css';

export default function HelperPage(props: {children: any}){

    return (
        <div className={style.container}>
            <div className={style.smallDraggable} />
            {props.children}
        </div>
    )
}