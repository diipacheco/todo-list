import { PlusCircle } from '@phosphor-icons/react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { TasksHeader } from './components/TasksList/TasksHeader';
import { Task } from './components/TasksList/Task';
// import { EmptyTasks } from './components/TasksList/EmptyTasks';

import styles from './App.module.css';
function App() {

  return (
    <main>
      <Header />
      <section className={styles.mainSection}>
        <div className={styles.taskInputContainer}>
          <Input />
          <Button>Criar
            <PlusCircle size={20} color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.tasksContainer}>
          <TasksHeader />
          <Task />
          <Task />
          <Task />

          {/* <EmptyTasks /> */}
        </div>
      </section>
    </main>
  )
}

export default App
