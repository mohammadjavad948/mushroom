import {Head} from "next/document";

export default function PageTitle(props: {children: string}){

    return (
        <div style={{width: '100%'}}>
            <Head>
                <title>{props.children}</title>
            </Head>
            <h3>{props.children}</h3>
        </div>
    )
}