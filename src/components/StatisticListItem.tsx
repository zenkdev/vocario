import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import startOfToday from 'date-fns/startOfToday';
import React, { useMemo } from 'react';

import { IonBadge, IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';

import { Statistic } from '../models';
import { getTextWithLang, getTranscription } from '../utils';

interface StatisticListItemProps {
  item: Statistic;
  showCount?: boolean;
}

const StatisticListItem: React.FC<StatisticListItemProps> = ({ item, showCount }) => {
  const { translation, category, count, nextOccur } = item;
  const textWithLang = useMemo(() => getTextWithLang(item), [item]);
  const transcription = useMemo(() => getTranscription(item), [item]);

  function nextOccurString(value: string | undefined) {
    if (!value) {
      return undefined;
    }
    const date = parseISO(value);
    const days = differenceInDays(startOfDay(date), startOfToday());
    if (days <= 0) {
      return 'today';
    }
    if (days === 1) {
      return 'tomorrow';
    }
    return `in ${days} days`;
  }

  return (
    <IonItem>
      <IonLabel>
        <IonGrid class="ion-no-margin ion-no-padding">
          <IonRow>
            <IonCol>
              <span className="bold-text normal-text">{textWithLang}</span>
              <div>
                <span className="small-text">{transcription}</span>
              </div>
            </IonCol>
            <IonCol>
              <span className="normal-text">{translation}</span>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <span className="small-text">{category}</span>
            </IonCol>
          </IonRow>
          {nextOccur && (
            <IonRow>
              <IonCol>
                <span className="small-text">{`Next occur: ${nextOccurString(nextOccur)}`}</span>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonLabel>
      {showCount && (
        <IonBadge slot="end" color="primary">
          {count}
        </IonBadge>
      )}
    </IonItem>
  );
};

export default StatisticListItem;
