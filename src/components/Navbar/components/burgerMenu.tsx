"use client";

import React, { useState } from "react";
import { BurgerMenuProps } from "./types";

export default function BurgerMenu({ open, setOpen }: BurgerMenuProps) {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 p-2 z-40 md:hidden"
        >
            <div
                className={`w-6 h-1 duration-500 ease-in-out ${
                    open
                        ? "rotate-[45deg] -translate-x-[18%] translate-y-[100%] scale-x-50 bg-background"
                        : "bg-primary"
                }`}
            ></div>
            <div
                className={`w-6 h-1 duration-500 ease-in-out ${
                    open ? "-rotate-45 bg-background" : "bg-primary"
                }`}
            ></div>
            <div
                className={`w-6 h-1 duration-500 ease-in-out ${
                    open
                        ? "rotate-45 translate-x-[18%] -translate-y-[90%] scale-x-50 bg-background"
                        : "bg-primary"
                }`}
            ></div>
        </button>
    );
}
