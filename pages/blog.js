import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Blog() {
  return (
      <Layout title="Blog - MyApp">
          <h1 className={styles.title}>
            Blog <a href="https://sujaykundu.com">MyApp</a>
         </h1>
      </Layout>
  )
}
