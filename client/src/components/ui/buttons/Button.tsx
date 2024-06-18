import {ReactElement, ReactText} from "react";
import ButtonText from "./buttonText/ButtonText";
import ButtonBorder from "./buttonBorder/ButtonBorder";
import ButtonFill from "./buttonFill/ButtonFill";

export interface IButton {
    children: ReactElement | ReactText
    className: string | undefined
}

export {
    ButtonText,
    ButtonBorder,
    ButtonFill
}
