import React from 'react';

import { IonLabel, IonList, IonListHeader } from '@ionic/react';

import { Dictionary } from '../../models';
import DictionaryListItem from './DictionaryListItem';

type DictionaryListProps = {
  dictionaries: Dictionary[];
};

const DictionaryList: React.FC<DictionaryListProps> = ({ dictionaries }) => (
  <IonList lines="none" class="ion-no-margin ion-no-padding">
    {!dictionaries.length && (
      <IonListHeader>
        <IonLabel>No Dictionaries Found</IonLabel>
      </IonListHeader>
    )}
    {dictionaries.map(item => (
      <DictionaryListItem key={item.id} item={item} />
    ))}
  </IonList>
);

export default DictionaryList;
