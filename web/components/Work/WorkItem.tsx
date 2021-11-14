import style from './workItem.module.css';

export default function WorkItem(){

    return (
        <div className={style.container}>
            <div className={style.title}>
                عنوان
            </div>
            <div>
                توضیح
            </div>
        </div>
    )
}