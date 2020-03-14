import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import { IonBadge, IonItem, IonLabel, IonProgressBar } from '@ionic/react';

import { Dictionary } from '../models';
import { percent } from '../utils';

const format = (value: number): string => (value < 1000 ? String(value) : `${Math.round(value / 100) / 10}k`);

type DictionaryItemProps = {
  item: Dictionary;
};

const DictionaryItem: React.FC<DictionaryItemProps> = ({ item }) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push('/learn', { id: item.id, title: item.name });
  }, [history, item]);

  return (
    <IonItem button detail onClick={handleClick}>
      <IonLabel className="ion-padding-top ion-padding-bottom normal-text">{item.name}</IonLabel>
      <IonBadge slot="end">{format(item.wordsCount)}</IonBadge>
      <IonProgressBar color="primary" value={percent(item.wordsCompleted, item.wordsCount)} />
    </IonItem>
  );
};

export default DictionaryItem;
