import { onCLS, onFCP, onINP, onLCP, onTTFB, type MetricType } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
  if (onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onINP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};
