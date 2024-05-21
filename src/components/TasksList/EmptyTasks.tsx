import Clipboard from '../../assets/Clipboard.svg';

import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
  return (
    <article className={styles.emptyTasksContainer}>
      <p>
        <img src={Clipboard} alt='Ícone clipboard' />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </article>
  )
}