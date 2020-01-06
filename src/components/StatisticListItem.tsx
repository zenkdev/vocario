import React from 'react';

import { IonBadge, IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';

import { Statistic } from '../models';

interface StatisticListItemProps {
  item: Statistic;
  showCount?: boolean;
}

const StatisticListItem: React.FC<StatisticListItemProps> = ({ item, showCount }) => {
  return (
    <IonItem>
      <IonLabel>
        <IonGrid class="ion-no-margin ion-no-padding">
          <IonRow>
            <IonCol>
              <div>
                <strong>{item.text}</strong>
              </div>
              <small>{item.transcription}</small>
            </IonCol>
            <IonCol>{item.translation}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: '60%', whiteSpace: 'normal' }}>{`${item.partOfSpeech} : ${item.category}`}</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonLabel>
      {showCount && (
        <IonBadge slot="end" color="primary">
          {item.count}
        </IonBadge>
      )}
    </IonItem>
  );
};

export default StatisticListItem;
