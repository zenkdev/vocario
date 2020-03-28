import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { modelHelper, Statistic } from '../../models';
import { StatisticsFilters } from '../filters/filtersSlice';

function Count({ count }: { count: number }) {
  const items: JSX.Element[] = [];
  for (let n = 0; n < count; n += 1) {
    items.push(<li key={`item-${n}`} />);
  }

  return <ul className="count">{items}</ul>;
}

type StatisticsListItemProps = {
  item: Statistic;
};

const StatisticsListItem: React.FC<StatisticsListItemProps> = ({ item }) => {
  const { translation, category } = item;
  const filter = useSelector((state: RootState) => state.statisticsFilter);
  const textWithLang = useMemo(() => modelHelper.getTextWithLang(item), [item]);
  const transcription = useMemo(() => modelHelper.getTranscription(item), [item]);
  const nextOccurString = useMemo(() => modelHelper.nextOccurString(item), [item]);
  const count = item.occurs ? item.occurs.length - 1 : 0;
  const showCount = filter !== StatisticsFilters.SHOW_COMPLETED;

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

export default StatisticsListItem;
