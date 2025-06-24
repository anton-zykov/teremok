import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { useChosenCategory } from '@/hooks';
import type { category } from '@/types';
import styles from './HeaderCategoryChoice.module.css';

export const HeaderCategoryChoice = () => {
  const navigate = useNavigate();
  const [ chosenCategory, setChosenCategory ] = useChosenCategory();
  const changeCategory = (category: category)=> () => {
    setChosenCategory(category);
    navigate(`/${category}`);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>I'm viewing...</p>
      <div className={styles.categories}>
        <Button
          color={chosenCategory === 'cats' ? 'var(--Button-Primary_Initial)' : 'var(--Button-Primary_Hover)'}
          onClick={changeCategory('cats')}
        >Cats</Button>
        <Button
          color={chosenCategory === 'dogs' ? 'var(--Button-Primary_Initial)' : 'var(--Button-Primary_Hover)'}
          onClick={changeCategory('dogs')}
        >Dogs</Button>
        <Button
          color={chosenCategory === 'all' ? 'var(--Button-Primary_Initial)' : 'var(--Button-Primary_Hover)'}
          onClick={changeCategory('all')}
        >All</Button>
      </div>
    </div>
  );
};
