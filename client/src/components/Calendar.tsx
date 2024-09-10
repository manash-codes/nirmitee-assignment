
import { Calendar as BigCalendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop, { EventInteractionArgs, withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

import { useCallback, useContext } from 'react';
import { Event } from '../types/Calendar.types';
import { EventContext } from '../context/EventContext';


const localizerInstance = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop<Event>(BigCalendar);
type DnDType = CalendarProps<Event> & withDragAndDropProps<Event>;
type CustomCalendarProps = Omit<DnDType, 'components' | 'localizer'>;

const Calendar = (props: CustomCalendarProps) => {
    const { events, updateEvent } = useContext(EventContext)

    const onChangeEventTime = useCallback(
        (start: string, end: string, event: Event) => {
            event.start = moment(start).toDate();
            event.end = moment(end).toDate();;
            updateEvent(event);
        },
        [updateEvent])

    return (
        <div className="py-4">
            <DnDCalendar
                events={events}
                onEventDrop={async (props: EventInteractionArgs<Event>) => {
                    onChangeEventTime(props.start.toString(), props.end.toString(), props.event)
                    // props.event.start = moment(props.start).toDate();
                    // props.event.end = moment(props.end).toDate();
                    // await updateEvent(props.event);
                }}
                views={['month', 'week', 'day']}
                defaultView='week'
                localizer={localizerInstance}
                {...props}
            />
        </div>
    );
};

export default Calendar;
