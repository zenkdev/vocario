import { onCLS, onFCP, onINP, onLCP, onTTFB, type MetricType } from 'web-vitals';
import { firebaseInstance } from './shared/api';

const sendToFirebase = (metric: MetricType) => {
  firebaseInstance.logEvent('web_vitals', {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    // Include other metric attributes if needed
  });
};

export const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
  if (onPerfEntry instanceof Function) {
    onCLS(onPerfEntry || sendToFirebase);
    onFCP(onPerfEntry || sendToFirebase);
    onINP(onPerfEntry || sendToFirebase);
    onLCP(onPerfEntry || sendToFirebase);
    onTTFB(onPerfEntry || sendToFirebase);
  }
};
