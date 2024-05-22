import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onInputTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function Input({ onInputTextChange, ...rest }: InputProps) {
  return (
    <input onChange={onInputTextChange} className={styles.input} {...rest} />
  )
}