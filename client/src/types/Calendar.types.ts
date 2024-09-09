import { stringOrDate } from "react-big-calendar";

export type Event = {
    _id: string,
    title: string,
    start: stringOrDate,
    end: stringOrDate,
}
export interface EventState {
    events: Event[];
    loading: boolean;
    error: string | null;
}