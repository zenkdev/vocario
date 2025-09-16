import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { format } from 'date-fns/format';
import { getDay } from 'date-fns/getDay';
import { getLocale } from '@/shared/lib';
import { parseISO } from 'date-fns/parseISO';
import { useAppSelector } from '@/lib/hooks';

import { selectChartData } from './selectors';

export default function StatisticsChart() {
  const locale = getLocale();
  const dataset = useAppSelector(selectChartData);

  return (
    <Paper>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            dataKey: 'date',
            tickPlacement: 'middle',
            tickLabelPlacement: 'middle',
            valueFormatter(value: string) {
              const date = parseISO(value);

              return format(date, 'MMM d', { locale });
            },
            tickLabelInterval(value: string, index: number) {
              const date = parseISO(value);

              return index === 0 || index === dataset.length - 1 || getDay(date) === locale.options?.weekStartsOn;
            },
            tickLabelStyle: {
              textTransform: 'uppercase',
            },
          },
        ]}
        yAxis={[{ position: 'none' }]}
        series={[
          {
            dataKey: 'count',
            valueFormatter(value: number | null) {
              return value ? `${value} words` : 'no data';
            },
          },
        ]}
        height={180}
        barLabel="value"
      />
      <Typography sx={{ width: '100%', textAlign: 'center', textTransform: 'uppercase', mb: 2 }}>Daily progress</Typography>
    </Paper>
  );
}
