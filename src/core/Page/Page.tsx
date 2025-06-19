import { type JSX, type ReactNode } from 'react';
import styles from './Page.module.css';

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
};
