
export default function PageTitle(props: {children: any}){

    return (
        <div style={{width: '100%'}}>
            <h3>{props.children}</h3>
        </div>
    )
}