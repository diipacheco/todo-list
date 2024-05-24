import styles from './TasksHeader.module.css';

interface TasksHeaderProps {
  tasksCreatedCounter: number;
  doneTasks: number;
}
export function TasksHeader({ tasksCreatedCounter, doneTasks }: TasksHeaderProps) {
  return (
    <header className={styles.tasksHeader}>
      <aside>
        <p className={styles.createdTasks}>Tarefas criadas <span className={styles.tasksCounter}>{tasksCreatedCounter}</span></p>
      </aside>
      <aside>
        <p className={styles.finishedTasks}>Concluídas <span className={styles.tasksCounter}>{doneTasks} de {tasksCreatedCounter}</span></p>
      </aside>
    </header>
  )
}