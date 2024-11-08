import { HTMLInputTypeAttribute } from "react";

type InputElementType = "custom" | "text";

type InputElement = {
    type: InputElementType;
    element?: React.ReactNode;
    className?: string;
};
export interface InputProps {
    id: string;
    title: string;
    type?: HTMLInputTypeAttribute;
    inline?: boolean;
    dark?: boolean;
    bright?: boolean;
    placeholder?: string;
    defaultValue?: string;
    otherProps?: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    translationProps?: Record<string, any>;
    disabled?: boolean;
    leftElement?: InputElement;
    rightElement?: InputElement;
    fontSize?:
        | "text-sm"
        | "text-base"
        | "text-lg"
        | "text-xl"
        | "text-2xl"
        | "text-3xl"
        | "text-4xl"
        | "text-5xl";
}
