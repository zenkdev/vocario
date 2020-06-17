import { flashOutline } from 'ionicons/icons';
import React from 'react';

import { IonIcon } from '@ionic/react';

type TitleProps = {
  text: string;
  isNew?: boolean;
};

const Title: React.FC<TitleProps> = ({ text, isNew }) => (
  <div style={{ position: 'relative' }}>
    <h1 className="large-text ion-text-center">{text}</h1>
    {isNew && <IonIcon icon={flashOutline} style={{ position: 'absolute', top: 'calc(50% - 12px)', right: '16px' }} />}
  </div>
);

export default Title;
