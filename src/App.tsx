import { Header } from './components/Header';
import styles from './App.module.css';
import { Input } from './components/Input';
function App() {

  return (
    <main>
      <Header />
      <section className={styles.mainSection}>
        <div className={styles.taskInputContainer}>
          <Input />
          <button>Criar</button>
        </div>
      </section>
    </main>
  )
}

export default App
