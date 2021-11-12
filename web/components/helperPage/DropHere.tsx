import style from './HelperPage.module.css';

export default function DropComponentHere(){

    return (
        <div
            onMouseOver={() => console.log('hmm')}
            onMouseUpCapture={() => console.log('capture')}
            className={style.dropHere}
        >
            <h3>
                صفحه را اینجا بیاندازید
            </h3>
        </div>
    )
}