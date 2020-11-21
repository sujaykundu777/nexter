import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Products() {
  return (
      <Layout title="Products - MyApp">
          <h1 className={styles.title}>
            Products <a href="https://sujaykundu.com">MyApp</a>
         </h1>
      </Layout>
  )
}
