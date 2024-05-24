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

  const doneTasks = tasks.filter((task => task.done));

  function onInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleCreateText() {
    setTasks(state => [...state, {
      id: tasks.length + 1,
      text: taskText,
      done: false,
    }]);
    setTaskText('');
  }

  function handleChangeTaskStatus(taskToChangeStatus: number) {
    const taskToUpdate = tasks.find(task => taskToChangeStatus === task.id);
    if (taskToUpdate) {
      taskToUpdate.done = !taskToUpdate.done;
      setTasks(state => state.map(task => task.id === taskToChangeStatus ? taskToUpdate : task));
    }
  }

  function handleDeleteTask(taskToDelete: number) {
    setTasks(state => state.filter(task => task.id !== taskToDelete));
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
            doneTasks={doneTasks.length}
          />
          {
            tasks.length > 0 ?
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  handleChangeTaskStatus={handleChangeTaskStatus}
                  handleDeleteTask={handleDeleteTask}
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
