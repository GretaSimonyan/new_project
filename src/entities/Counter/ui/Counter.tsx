import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const { t } = useTranslation();
  const counterValue = useCounterValue();
  const { decrement, increment, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleInc} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleDec} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};
