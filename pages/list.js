import Head from 'next/head'
import { readFile } from 'fs'
export default function List() {
    return (
        <>
            <Head>
                <title>List Page</title>
            </Head>
            <div>List page works</div>
        </>
    )
}

export async function getStaticProps() {

}