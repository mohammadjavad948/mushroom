import Head from "next/head";

export default function PageTitle(props: {title: string}){

    return (
        <div style={{width: '100%'}}>
            <Head>
                <title>{props.title}</title>
            </Head>
            <h3>{props.title}</h3>
        </div>
    )
}