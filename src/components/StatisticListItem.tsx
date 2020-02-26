import React, { useMemo } from 'react';

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';

import { modelHelper, Statistic } from '../models';

function Count({ count }: { count: number }) {
  const items: JSX.Element[] = [];
  for (let n = 0; n < count; n += 1) {
    items.push(<li key={`item-${n}`} />);
  }

  return <ul className="count">{items}</ul>;
}

interface StatisticListItemProps {
  item: Statistic;
  showCount?: boolean;
}

const StatisticListItem: React.FC<StatisticListItemProps> = ({ item, showCount }) => {
  const { translation, category } = item;
  const textWithLang = useMemo(() => modelHelper.getTextWithLang(item), [item]);
  const transcription = useMemo(() => modelHelper.getTranscription(item), [item]);
  const nextOccurString = useMemo(() => modelHelper.nextOccurString(item), [item]);
  const count = useMemo(() => (item.occurs ? item.occurs.length - 1 : 0), [item]);

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
          {nextOccurString && (
            <IonRow>
              <IonCol>
                <span className="small-text">{`Next occur: ${nextOccurString}`}</span>
                {showCount && <Count count={count} />}
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonLabel>
    </IonItem>
  );
};

export default StatisticListItem;
