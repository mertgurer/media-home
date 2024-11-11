import { Dispatch, SetStateAction } from "react";

export interface BurgerMenuProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
