import { useState } from "react"

export interface OpeningHour {
    from: number
    to: number
};

export interface Location {
    provider: string
    link: string
}

export interface SuperMarketProps {
    name: string,
    locations: Location[],
    openingHour: OpeningHour
}

export function SuperMarket(props: SuperMarketProps) {
    let [now, setNow] = useState(new Date());

    const isOpen = props.openingHour.from < now.getHours() &&  props.openingHour.to > now.getHours();

    //const locations = props.locations.map()

    return (
        <div className="inline-block shadow-2 border-round-md p-2">
            <div>
                <span className="pi pi-shop mr-1"></span>{props.name}
            </div>
            <div>
                <span className="pi pi-map-marker mr-1"></span>
                <a className="mr-2" href="https://w3w.co/bevorzugt.genauere.bliebe" target="_new">what3words</a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=53.350596,10.206729" target="_new">Google Maps</a>
            </div>
            <div>
                <span className="pi pi-clock mr-1"></span>{props.openingHour.from} - {props.openingHour.to} ({isOpen ? 'open' : 'closed'})
            </div>
        </div>
    )
}