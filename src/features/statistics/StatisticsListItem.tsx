import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';
import React, { useMemo } from 'react';

import { useAppSelector } from '../../hooks';
import { Statistic } from '../../models';
import { wordUtils } from '../../utils';
import { VisibilityFilters } from '../filters/filtersSlice';

const { getTextWithLang, getTranscription, nextOccurString } = wordUtils;

const Count = ({ count }: { count: number }) => {
  const items: JSX.Element[] = [];
  for (let n = 0; n < count; n += 1) {
    items.push(<li key={`item-${n}`} />);
  }

  return <ul className="count">{items}</ul>;
};

interface StatisticsListItemProps {
  item: Statistic;
}

const StatisticsListItem = ({ item }: StatisticsListItemProps) => {
  const { translation, category } = item;
  const { filter } = useAppSelector(state => state.visibilityFilter);
  const textWithLang = useMemo(() => getTextWithLang(item), [item]);
  const transcription = useMemo(() => getTranscription(item), [item]);
  const nextOccur = useMemo(() => nextOccurString(item), [item]);
  const count = item.occurs ? item.occurs.length - 1 : 0;
  const showCount = filter !== VisibilityFilters.SHOW_COMPLETED;

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
                <span className="small-text">{`Next occur: ${nextOccur}`}</span>
                {showCount && <Count count={count} />}
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonLabel>
    </IonItem>
  );
};

export default StatisticsListItem;
