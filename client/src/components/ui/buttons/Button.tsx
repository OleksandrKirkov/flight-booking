import {ReactElement, ReactText} from "react";
import ButtonText from "./buttonText/ButtonText";
import ButtonBorder from "./buttonBorder/ButtonBorder";

export interface IButton {
    children: ReactElement | ReactText 
}

export {
    ButtonText,
    ButtonBorder
}
