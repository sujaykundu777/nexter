import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Blog() {
  return (
      <Layout
          title="Blog - Nexter"
          footer={`Copyright ${new Date().getFullYear()}`}
      >
          <h1 className={styles.title}>
            Blog <a href="/">Nexter</a>
         </h1>
      </Layout>
  )
}
