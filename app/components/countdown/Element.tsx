export interface ElementProps {
    value: number,
    singularText: string,
    pluralText: string
}

export function ValueElement(props: ElementProps) {
    if (props.value == 0) {
        return null;
    }

    if (props.value == 1) {
        return (<span>{props.value} {props.singularText}</span>)
    }

    return (<span>{props.value} {props.pluralText}</span>)
}