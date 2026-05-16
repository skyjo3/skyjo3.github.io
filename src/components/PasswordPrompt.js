import React, { useState, useEffect, useRef } from 'react';
import styles from './PasswordPrompt.module.css';

const PasswordPrompt = ({ isOpen, projectTitle, onSubmit, onCancel, error }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (error) {
      setValue('');
      if (inputRef.current) inputRef.current.focus();
    }
  }, [error]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Password please!">
      <div className={styles.card}>
        <h2 className={styles.title}>Password Please!</h2>
        {projectTitle && (
          <p className={styles.subtitle}>Enter the password to view my <strong>{projectTitle}</strong> project :)</p>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            ref={inputRef}
            type="password"
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
          />
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn} disabled={!value}>
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;
