"use client";

import React, { CSSProperties, ElementType, HTMLAttributes, forwardRef, useEffect, useRef, useState } from "react";
import styles from "./background.module.css";

type SpacingToken = "0" | "1" | "2" | "4" | "8" | "12" | "16" | "20" | "24" | "32" | "40" | "48" | "56" | "64" | "80" | "104" | "128" | "160" | "xs" | "s" | "m" | "l" | "xl"

interface DisplayProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType;
    inline?: boolean;
    pointerEvents?: "none" | "all" | "auto";
    position?: CSSProperties["position"];
    overflow?: CSSProperties["overflow"];
    overflowX?: CSSProperties["overflowX"];
    overflowY?: CSSProperties["overflowY"];
    transition?:
    | "micro-short"
    | "micro-medium"
    | "micro-long"
    | "macro-short"
    | "macro-medium"
    | "macro-long";
    opacity?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
    zIndex?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    dark?: boolean;
    light?: boolean;
}

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref && "current" in ref) {
        (ref as React.MutableRefObject<T | null>).current = value;
    }
}

interface MaskProps {
    cursor?: boolean;
    x?: number;
    y?: number;
    radius?: number;
}

interface GradientProps {
    display?: boolean;
    opacity?: DisplayProps["opacity"];
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    tilt?: number;
    colorStart?: string;
    colorEnd?: string;
}

interface DotsProps {
    display?: boolean;
    opacity?: DisplayProps["opacity"];
    color?: string;
    size?: SpacingToken;
}

interface GridProps {
    display?: boolean;
    opacity?: DisplayProps["opacity"];
    color?: string;
    width?: string;
    height?: string;
}

interface LinesProps {
    display?: boolean;
    opacity?: DisplayProps["opacity"];
    size?: SpacingToken;
    thickness?: number;
    angle?: number;
    color?: string;
}

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    gradient?: GradientProps;
    dots?: DotsProps;
    grid?: GridProps;
    lines?: LinesProps;
    mask?: MaskProps;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
    (
        {
            gradient = {},
            dots = {},
            grid = {},
            lines = {},
            mask = {},
            children,
            className,
            style,
            ...rest
        },
        forwardedRef,
    ) => {
        const dotsColor = dots.color ?? "brand-on-background-weak";
        const dotsSize = "var(--static-space-" + (dots.size ?? "24") + ")";

        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
        const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
        const backgroundRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            setRef(forwardedRef, backgroundRef.current);
        }, [forwardedRef]);

        useEffect(() => {
            const handleMouseMove = (event: MouseEvent) => {
                if (backgroundRef.current) {
                    const rect = backgroundRef.current.getBoundingClientRect();
                    setCursorPosition({
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                    });
                }
            };

            document.addEventListener("mousemove", handleMouseMove);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
            };
        }, []);

        useEffect(() => {
            let animationFrameId: number;

            const updateSmoothPosition = () => {
                setSmoothPosition((prev) => {
                    const dx = cursorPosition.x - prev.x;
                    const dy = cursorPosition.y - prev.y;
                    const easingFactor = 0.05;

                    return {
                        x: Math.round(prev.x + dx * easingFactor),
                        y: Math.round(prev.y + dy * easingFactor),
                    };
                });
                animationFrameId = requestAnimationFrame(updateSmoothPosition);
            };

            if (mask.cursor) {
                animationFrameId = requestAnimationFrame(updateSmoothPosition);
            }

            return () => {
                cancelAnimationFrame(animationFrameId);
            };
        }, [cursorPosition, mask]);

        const maskStyle = (): CSSProperties => {
            if (!mask) return {};

            if (mask.cursor) {
                return {
                    "--mask-position-x": `${smoothPosition.x}px`,
                    "--mask-position-y": `${smoothPosition.y}px`,
                    "--mask-radius": `${mask.radius || 50}vh`,
                } as CSSProperties;
            }

            if (mask.x != null && mask.y != null) {
                return {
                    "--mask-position-x": `${mask.x}%`,
                    "--mask-position-y": `${mask.y}%`,
                    "--mask-radius": `${mask.radius || 50}vh`,
                } as CSSProperties;
            }

            return {};
        };

        const remap = (
            value: number,
            inputMin: number,
            inputMax: number,
            outputMin: number,
            outputMax: number,
        ) => {
            return ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
        };

        const adjustedX = gradient.x != null ? remap(gradient.x, 0, 100, 37.5, 62.5) : 50;
        const adjustedY = gradient.y != null ? remap(gradient.y, 0, 100, 37.5, 62.5) : 50;

        return (
            <div
                ref={backgroundRef}
                className={[
                    "absolute top-0 left-0 w-full h-full -z-10 overflow-hidden",
                    mask ? styles.mask : "",
                    className || ""
                ].filter(Boolean).join(" ").trim()}
                style={{
                    ...maskStyle(),
                    ...style,
                }}
                {...rest}
            >
                {gradient.display && (
                    <div
                        className={`absolute ${styles.gradient} pointer-events-none`}
                        style={{
                            opacity: gradient.opacity,
                            "--gradient-position-x": `${adjustedX}%`,
                            "--gradient-position-y": `${adjustedY}%`,
                            "--gradient-width": gradient.width != null ? `${gradient.width / 4}%` : "25%",
                            "--gradient-height": gradient.height != null ? `${gradient.height / 4}%` : "25%",
                            "--gradient-tilt": gradient.tilt != null ? `${gradient.tilt}deg` : "0deg",
                            "--gradient-color-start": gradient.colorStart
                                ? `var(--${gradient.colorStart})`
                                : "var(--brand-solid-strong)",
                            "--gradient-color-end": gradient.colorEnd
                                ? `var(--${gradient.colorEnd})`
                                : "var(--brand-solid-weak)",
                        } as CSSProperties}
                    />
                )}
                {dots.display && (
                    <div
                        className={`absolute top-0 left-0 w-full h-full pointer-events-none ${styles.dots}`}
                        style={{
                            opacity: dots.opacity,
                            "--dots-color": `var(--${dotsColor})`,
                            "--dots-size": dotsSize,
                        } as React.CSSProperties}
                    />
                )}
                {lines.display && (
                    <div
                        className={`absolute top-0 left-0 w-full h-full pointer-events-none ${styles.lines}`}
                        style={{
                            opacity: lines.opacity,
                            "--lines-angle": `${lines.angle ?? 45}deg`,
                            "--lines-color": `var(--${lines.color ?? "brand-on-background-weak"})`,
                            "--lines-thickness": `${lines.thickness ?? 0.5}px`,
                            "--lines-spacing": `var(--static-space-${lines.size ?? "24"})`,
                            background: `
              repeating-linear-gradient(
                var(--lines-angle),
                var(--static-transparent),
                var(--static-transparent) calc(var(--lines-spacing) - var(--lines-thickness)),
                var(--lines-color) calc(var(--lines-spacing) - var(--lines-thickness)),
                var(--lines-color) var(--lines-spacing)
              )
            `,
                        } as React.CSSProperties}
                    />
                )}
                {grid.display && (
                    <div
                        className={`absolute top-0 left-0 w-full h-full pointer-events-none ${styles.grid}`}
                        style={{
                            opacity: grid.opacity,
                            backgroundSize: `
                ${grid.width || "var(--static-space-32)"}
                ${grid.height || "var(--static-space-32)"}`,
                            backgroundPosition: "0 0",
                            backgroundImage: `
                linear-gradient(
                  90deg,
                  var(--${grid.color || "brand-on-background-weak"}) 0,
                  var(--${grid.color || "brand-on-background-weak"}) 1px,
                  var(--static-transparent) 1px,
                  var(--static-transparent) ${grid.width || "var(--static-space-32)"}
                ),
                linear-gradient(
                  0deg,
                  var(--${grid.color || "brand-on-background-weak"}) 0,
                  var(--${grid.color || "brand-on-background-weak"}) 1px,
                  var(--static-transparent) 1px,
                  var(--static-transparent) ${grid.height || "var(--static-space-32)"}
                )
              `,
                        }}
                    />
                )}
                {children}
            </div>
        );
    },
);

Background.displayName = "Background";

export { Background };