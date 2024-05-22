import styles from './TasksHeader.module.css';

interface TasksHeaderProps {
  tasksCreatedCounter: number;
}
export function TasksHeader({ tasksCreatedCounter }: TasksHeaderProps) {
  return (
    <header className={styles.tasksHeader}>
      <aside>
        <p className={styles.createdTasks}>Tarefas criadas <span className={styles.tasksCounter}>{tasksCreatedCounter}</span></p>
      </aside>
      <aside>
        <p className={styles.finishedTasks}>Concluídas <span className={styles.tasksCounter}>2 de 5</span></p>
      </aside>
    </header>
  )
}