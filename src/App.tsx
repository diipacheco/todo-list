import { ChangeEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { TasksHeader } from './components/TasksList/TasksHeader';
import { EmptyTasks } from './components/TasksList/EmptyTasks';
import { Task } from './components/TasksList/Task';

export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

import styles from './App.module.css';
function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  function onInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleCreateText() {
    setTasks([...tasks, {
      id: tasks.length + 1,
      text: taskText,
      done: false,
    }]);
    setTaskText('');
  }

  return (
    <main>
      <Header />
      <section className={styles.mainSection}>
        <div className={styles.taskInputContainer}>
          <Input
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={taskText}
            onInputTextChange={onInputTextChange} />
          <Button
            onClick={handleCreateText}
          >Criar
            <PlusCircle
              size={20}
              color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.tasksContainer}>
          <TasksHeader
            tasksCreatedCounter={tasks.length}
          />
          {
            tasks.length > 0 ?
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                />
              )) :
              <EmptyTasks />
          }
        </div>
      </section>
    </main>
  )
}

export default App
