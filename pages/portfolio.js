import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Portfolio() {
  return (
      <Layout title="Portfolio - MyApp">
          <h1 className={styles.title}>
            Portfolio <a href="https://sujaykundu.com">MyApp</a>
         </h1>
      </Layout>
  )
}
