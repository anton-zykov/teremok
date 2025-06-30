import { type JSX, type ReactNode } from 'react';
import { Header } from './Header';
import { Modals } from './Modals';
import { Logo } from './Logo';
import styles from './Page.module.css';

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <>
      <Modals />
      <div className={styles.page}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <h4>sidebar</h4>
        </div>
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    </>
  );
};
