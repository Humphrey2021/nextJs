import Link from 'next/link'
import Head from 'next/head'
import styles from './index.module.css'
import Foot from './components/Footer/footer'

export default function Home() {
  return <>
    <Head>
      <title>Index Page</title>
    </Head>
    <div>
      index page works -----
      <Link href="/list">
        <a className="demo" title="list page">jump to list page</a>
      </Link>
      <img style={{ width: '50px' }} src="/images/pic.jpg"></img>
      <p className={styles.demo}>这是一段文字</p>
    </div>
    {/* <Link href="/components/Footer/footer">
      <a className="demo" title="list page">jump to footer page</a>
    </Link> */}
    <Foot />
    <style jsx>{`
      .demo {
          color: red;
      }
    `}</style>
  </>
}
