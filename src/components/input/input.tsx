"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { InputProps } from "./types";

export default function Input({
    id,
    title,
    type,
    inline,
    dark,
    bright,
    placeholder,
    defaultValue,
    otherProps,
    translationProps,
    disabled,
    leftElement,
    rightElement,
}: InputProps) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="flex flex-col relative gap-2 w-full min-w-0">
            {!inline && <p className="text-sm text-text">{title}</p>}
            {leftElement && (
                <div className="absolute left-2 bottom-[2px] p-2 max-md:bottom-[3px]">
                    {leftElement.type === "custom" ? (
                        leftElement.element
                    ) : (
                        <span className={leftElement.className}></span>
                    )}
                </div>
            )}
            {type !== "textarea" ? (
                <input
                    defaultValue={defaultValue}
                    name={id}
                    type={hidden ? type : ""}
                    style={{
                        backgroundColor:
                            "color-mix(in srgb, var(--primary), transparent 80%)",
                    }}
                    className={`rounded-md text-sm font-medium no-spinner placeholder-gray-700 bg-secondary ${
                        leftElement ? "ps-12" : undefined
                    } ${type === "password" ? "pr-10" : ""} ${
                        !inline ? "py-[10px] px-5" : "py-4 px-6"
                    } ${disabled ? "opacity-60" : ""}`}
                    placeholder={
                        inline
                            ? title
                            : placeholder
                            ? placeholder
                            : type === "email"
                            ? "email@example.com"
                            : ""
                    }
                    disabled={disabled}
                    {...otherProps}
                />
            ) : (
                <textarea
                    name={id}
                    style={{
                        backgroundColor:
                            "color-mix(in srgb, var(--primary), transparent 80%)",
                    }}
                    className={`h-full rounded-md text-sm font-medium placeholder-gray-700 bg-secondary ${
                        !inline ? "py-[10px] px-5" : "py-4 px-6"
                    }`}
                    placeholder={inline ? title : ""}
                    maxLength={1024}
                />
            )}

            {rightElement && (
                <div className="absolute right-0 bottom-0">
                    {rightElement.type === "custom" ? (
                        rightElement.element
                    ) : (
                        <span className={rightElement.className}></span>
                    )}
                </div>
            )}

            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setHidden(!hidden)}
                    tabIndex={-1}
                    className="absolute right-2 bottom-[2px] p-2 max-md:bottom-[3px]"
                >
                    {hidden ? (
                        <Eye
                            color="var(--background)"
                            size={20}
                            strokeWidth={1.5}
                        />
                    ) : (
                        <EyeOff
                            color="var(--background)"
                            size={20}
                            strokeWidth={1.5}
                        />
                    )}
                </button>
            )}
        </div>
    );
}
