import { Check, Trash } from '@phosphor-icons/react';

import { ITask } from '../../App';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
}
export function Task({ task }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <aside className={styles.checkBoxAside}>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={`${styles.checkBox} ${styles.checkboxUnchecked}`}>
            {/* <Check size={12} /> */}
          </span>
        </label>
      </aside>

      <div className={styles.taskTextContainer}>
        <p>{task.text}</p>
      </div>
      <aside className={styles.deleteTaskAside}>
        <button>
          <Trash size={16} color="#808080" />
        </button>
      </aside>
    </div >
  )
}