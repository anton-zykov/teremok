import { type JSX, type ReactNode } from 'react';
import { HeaderCategoryChoice } from './HeaderCategoryChoice';
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
        <div className={styles.categories}>
          <HeaderCategoryChoice />
        </div>
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    </>
  );
};
