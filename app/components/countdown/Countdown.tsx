import { useEffect, useState } from "react";
import { ValueElement } from "./Element";

export interface CounterdownProps {
    until: Date
}

export function Countdown(props: CounterdownProps) {

    let [now, setNow] = useState<Date>(new Date());

    useEffect(
        () => {
            const id = setInterval(() => {
                setNow(new Date());
            }, 1000);
            return () => clearInterval(id);
        },
        [now]
    );

    if (now > props.until) {
        return null;
    }

    const diffMs = props.until.getTime() - now.getTime();

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    const dayText = days == 0 ? "" : days == 1 ? "Tag" : "Tag2";
    const hoursText = hours == 0 ? "" : hours == 1 ? "Stunde" : "Stunden";
    const minutesText = minutes == 0 ? "" : minutes == 1 ? "Minute" : "Minuten";
    const secondsText = seconds == 0 ? "" : seconds == 1 ? "Sekunde" : "Sekunden";

    return (<div className="flex gap-1">
        <ValueElement value={days} singularText="Tag" pluralText="Tagen"></ValueElement>
        <ValueElement value={hours} singularText="Stunde" pluralText="Stunden"></ValueElement>
        <ValueElement value={minutes} singularText="Minute" pluralText="Minuten"></ValueElement>
        <ValueElement value={seconds} singularText="Sekunde" pluralText="Sekunden"></ValueElement>
    </div>)
}