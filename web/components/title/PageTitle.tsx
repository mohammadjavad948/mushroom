import Head from "next/head";

export default function PageTitle(props: {title: string, children?: any}){

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Head>
                <title>{props.title}</title>
            </Head>
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}