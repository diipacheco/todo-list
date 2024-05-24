import { Check, Trash } from '@phosphor-icons/react';

import { ITask } from '../../App';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
  handleChangeTaskStatus: (taskToChangeStatus: number) => void;
  handleDeleteTask: (taskToDelete: number) => void;
}
export function Task({ task, handleChangeTaskStatus, handleDeleteTask }: TaskProps) {
  const taskStyles = task.done ?
    styles['checkBoxChecked'] :
    styles['checkBoxUnchecked'];

  const taskTextStyles = task.done ? styles['taskTextDone'] : styles['taskText'];

  return (
    <div className={styles.taskContainer}>
      <aside className={styles.checkBoxAside}>
        <label htmlFor="checkbox" onClick={() => handleChangeTaskStatus(task.id)}>
          <input readOnly type="checkbox" />
          <span className={`${styles.checkBox} ${taskStyles}`}>
            {task.done && <Check size={10} />}
          </span>
        </label>
      </aside>

      <div className={styles.taskTextContainer}>
        <p className={taskTextStyles}>{task.text}</p>
      </div>
      <aside className={styles.deleteTaskAside}>
        <button onClick={() => handleDeleteTask(task.id)}>
          <Trash size={16} color="#808080" />
        </button>
      </aside>
    </div >
  )
}