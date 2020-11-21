import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
      <Layout title="Contact - MyApp">
          <h1 className={styles.title}>
            Contact <a href="https://sujaykundu.com">MyApp</a>
         </h1>
      </Layout>
  )
}
