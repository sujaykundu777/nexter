import Button from '../src/components/Button';
import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleClick = () => {
    alert('do something');
  }
  return (
      <Layout title="Welcome to Nexter">
          <h1 className={styles.title}>
             Welcome to <a href="/">Nexter</a>
         </h1>
          <Button variant="dark" size="lg" label="Get Started" disabled={false} onClick={handleClick} />
      </Layout>
  )
}
