import '../../app/chart.scss';

/* eslint-disable import/no-extraneous-dependencies */
import { max } from 'd3-array';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parseISO from 'date-fns/parseISO';
import React from 'react';
import { useSelector } from 'react-redux';
import { SizeMeProps, withSize } from 'react-sizeme';

import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';

import { defaultTo, getLocale } from '../../utils';
import { ChartData, selectChartData } from './selectors';

// accessors
const x = (d: ChartData): string => d.date;
const y = (d: ChartData): number => d.count;

const Chart: React.FC<SizeMeProps> = ({ size }) => {
  const locale = getLocale();
  const data = useSelector(selectChartData);

  const width = Math.round(Math.max(defaultTo(size.width, 0) - 32, 200));
  const height = Math.round(Math.max(defaultTo(size.height, 0) - 16, 100));

  // bounds
  const xMax = width;
  const yMax = height - 100;

  // scales
  const xScale = scaleBand<string>().domain(data.map(x)).padding(0.4).rangeRound([0, xMax]);
  const yScale = scaleLinear<number>()
    .domain([0, max(data, y) || 0])
    .rangeRound([yMax, 0]);

  return (
    <div className="chart">
      <div className="chart__wrapper" style={{ height: `${height}px` }}>
        <svg width={width} height={height}>
          <Group top={30}>
            {data.map(d => {
              const xd = x(d);
              const yd = y(d);
              const barWidth = xScale.bandwidth();
              const barHeight = yMax - (yScale(yd) as number);
              return (
                <Group key={`bar-${xd}`}>
                  <Bar width={barWidth} height={barHeight} x={xScale(xd)} y={yMax - barHeight} className="chart__bar" />
                  {yd && (
                    <text
                      x={defaultTo(xScale(xd), 0) + barWidth / 2}
                      y={yMax - barHeight}
                      className="chart__bar-label"
                      fontSize={12}
                      dy="-.5em"
                      textAnchor="middle"
                    >
                      {`${yd}`}
                    </text>
                  )}
                </Group>
              );
            })}
          </Group>
          <AxisBottom
            scale={xScale}
            top={height - 60}
            axisLineClassName="chart__axis-line"
            tickClassName="chart__axis-tick"
            tickFormat={(value, ix) => {
              const date = parseISO(value);
              if (ix === 0 || ix === data.length - 1 || getDay(date) === locale.options?.weekStartsOn) {
                return format(date, 'MMM d', { locale });
              }
              return undefined;
            }}
            label="Daily progress"
            labelProps={{ fontSize: 14, textAnchor: 'middle', className: 'chart__axis-label' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default withSize({ monitorHeight: true })(Chart);
