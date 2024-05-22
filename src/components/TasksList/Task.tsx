import { Check, Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';
export function Task() {
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

      <aside>
        <div className={styles.taskTextContainer}>
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
      </aside>
      <aside className={styles.deleteTaskAside}>
        <button>
          <Trash size={16} color="#808080" />
        </button>
      </aside>
    </div >
  )
}