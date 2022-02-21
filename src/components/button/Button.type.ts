import React from "react";

export default interface IButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    type?: IButtonType;
    block?: boolean;
    styleClassNames?: string;
}

export enum IButtonType {
    PRIMARY,
    SECONDARY,
    TERTIARY
}