import styles from './TasksHeader.module.css';
export function TasksHeader() {
  return (
    <header className={styles.tasksHeader}>
      <aside>
        <p className={styles.createdTasks}>Tarefas criadas <span>0</span></p>
      </aside>
      <aside>
        <p className={styles.finishedTasksCounter}>Concluídas <span>0</span></p>
      </aside>
    </header>
  )
}