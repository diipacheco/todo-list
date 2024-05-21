import { PlusCircle } from '@phosphor-icons/react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';


import styles from './App.module.css';
function App() {

  return (
    <main>
      <Header />
      <section className={styles.mainSection}>
        <div className={styles.taskInputContainer}>
          <Input />
          <Button>Criar
            <PlusCircle size={20} color="#f2f2f2"  />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
