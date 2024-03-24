import { DateProps } from "../types/ListsProps";
import { FC } from "react";

const DateTime: FC<DateProps> = (props) => {
    return <p className="date">{props.date}</p>;
}

export default DateTime;
