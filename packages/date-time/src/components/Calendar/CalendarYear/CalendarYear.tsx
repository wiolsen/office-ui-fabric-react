import * as React from 'react';
import { ICalendarYearProps, ICalendarYearStyleProps, ICalendarYearStyles } from './CalendarYear.types';
import { getStyles } from './CalendarYear.styles';
import { styled } from 'office-ui-fabric-react/lib/Utilities';
import { CalendarYearBase } from './CalendarYear.base';

/**
 * CalendarYear description
 */
export const CalendarYear: React.FunctionComponent<ICalendarYearProps> = styled<
  ICalendarYearProps,
  ICalendarYearStyleProps,
  ICalendarYearStyles
>(CalendarYearBase, getStyles, undefined, { scope: 'CalendarYear' });
