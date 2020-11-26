import Button from '../dist/src/components/Button'; // Built Components
import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
      <Layout title="About - MyApp">
          <h1 className={styles.title}>
             About <a href="https://sujaykundu.com">MyApp</a>
         </h1>
         <Button variant="info" size="lg" label="Know More" />
      </Layout>
  )
}
