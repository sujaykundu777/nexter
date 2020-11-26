import Head from 'next/head';
import styles from '../../styles/Main.module.css';
import Navbar from '../components/Navbar';

const Layout = ({ children, title = 'Nexter'}) => (
    <div className={styles.container}>
        <Head>
            <title> {title} </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
           <p> Nexter. 2021 </p>
       </footer>
    </div>
)
export default Layout;