
import { Calendar as BigCalendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop, { EventInteractionArgs, withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

import { useCallback, useEffect, useState } from 'react';
import { Event } from '../types/Calendar.types';
import { fetchEvents, updateEvent } from '../services/eventService';

const localizerInstance = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop<Event>(BigCalendar);
type DnDType = CalendarProps<Event> & withDragAndDropProps<Event>;
type CustomCalendarProps = Omit<DnDType, 'components' | 'localizer'>;

const Calendar = (props: CustomCalendarProps) => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const events = await fetchEvents();
            setEvents(events);
        };
        fetch();
    }, []);

    const onChangeEventTime = useCallback(
        (start: string, end: string, _id: string) => {
            setEvents((prevEvents) =>
                prevEvents.map((event) =>
                    event._id === _id ? {
                        ...event,
                        start: moment(start).toDate(),
                        end: moment(end).toDate(),
                    } : event
                )
            );
        },
        [])

    return (
        <div className="p-4">
            <DnDCalendar
                events={events}
                onEventDrop={(props: EventInteractionArgs<Event>) => {
                    onChangeEventTime(props.start.toString(), props.end.toString(), props.event._id)
                    props.event.start = moment(props.event.start).toDate();
                    props.event.end = moment(props.event.end).toDate();
                    updateEvent(props.event);
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
