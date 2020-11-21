import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <Layout title="Welcome to MyApp">
          <h1 className={styles.title}>
             Welcome to <a href="https://sujaykundu.com">MyApp</a>
         </h1>
      </Layout>
  )
}
