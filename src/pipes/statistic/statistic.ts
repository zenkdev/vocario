import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary } from '../../models';
import { getStatistic } from '../../providers/utils';

/**
 * Generated class for the StatisticPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'statistic'
})
export class StatisticPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Dictionary, ...args) {
    return getStatistic(value);
  }
}
