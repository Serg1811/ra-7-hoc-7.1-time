import dayjs from 'dayjs';
import { DateProps } from '../types/ListsProps';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { FC } from 'react';

const config = {
    thresholds: [
        { l: 'm', r: 1 },
        { l: 'mm', r: 59, d: 'minute' },
        { l: 'h', r: 1 },
        { l: 'hh', r: 23, d: 'hour' },
        { l: 'd', r: 1 },
        { l: 'dd', d: 'day' },
      ],
     rounding: Math.floor
}

dayjs.extend(relativeTime, config);

dayjs.locale('ru');

function WithTimePretty(Component: FC<DateProps>) {
    return function (props: DateProps) {
        const date = dayjs(props.date).fromNow();
        return <Component {...props} date={date} />;
    };
}

export default WithTimePretty;
