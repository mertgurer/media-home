"use client";

import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";
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
    const t = useTranslations();
    const [hidden, setHidden] = useState(true);

    return (
        <div className="flex flex-col relative gap-2 w-full min-w-0">
            {!inline && <p className="text-sm text-text">{t(title)}</p>}
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
                        color: bright
                            ? "var(--accent)"
                            : !dark
                            ? "var(--background)"
                            : "var(--text)",
                        backgroundColor: !dark
                            ? "var(--text)"
                            : "color-mix(in srgb, var(--primary), transparent 7%)",
                    }}
                    className={`rounded-md text-sm font-light no-spinner ${
                        leftElement ? "ps-12" : undefined
                    } ${type === "password" ? "pr-10" : ""} ${
                        !inline ? "py-[10px] px-5" : "py-4 px-6"
                    } ${disabled ? "opacity-60" : ""}`}
                    placeholder={
                        inline
                            ? t(title, translationProps)
                            : placeholder
                            ? t(placeholder, translationProps)
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
                        color: !dark ? "var(--background)" : "var(--text)",
                        backgroundColor: !dark
                            ? "var(--text)"
                            : "color-mix(in srgb, var(--primary), transparent 7%)",
                    }}
                    className={`h-full rounded-md text-sm font-light ${
                        !inline ? "py-[10px] px-5" : "py-4 px-6"
                    }`}
                    placeholder={inline ? t(title) : ""}
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
