import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import { IonBadge, IonItem, IonLabel, IonProgressBar } from '@ionic/react';

import { Dictionary } from '../../models';
import { percent } from '../../utils';

const formatter = new Intl.NumberFormat('ru');

const format = (value: number): string => formatter.format(value);

type DictionaryListItemProps = {
  item: Dictionary;
};

const DictionaryListItem: React.FC<DictionaryListItemProps> = ({ item }) => {
  const history = useHistory();
  const handleClick = useCallback(() => history.push(`/learn/${item.id}`), [history, item]);

  return (
    <>
      <IonItem button detail onClick={handleClick}>
        <IonLabel className="ion-padding-top ion-padding-bottom normal-text">{item.name}</IonLabel>
        <IonBadge slot="end">{format(item.wordsCount)}</IonBadge>
      </IonItem>
      <IonProgressBar color="primary" value={percent(item.wordsCompleted, item.wordsCount)} />
    </>
  );
};

export default DictionaryListItem;
