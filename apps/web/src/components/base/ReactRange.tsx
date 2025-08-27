import classNames from "classnames";
import React from "react";
import { getTrackBackground, Range } from "react-range";
import { IRenderThumbParams, IRenderTrackParams } from "react-range/lib/types";

interface ReactRangeProps {
  min?: number;
  max?: number;
  step?: number;
  values: number[];
  variant?: "primary" | "secondary";
  trackHeight?: string;
  tipFormatter?: (value: number) => React.ReactNode;
  onChange?: (value: number[]) => void;
  onFinalChange?: (value: number[]) => void;
  className?: string;
  draggableTrack?: boolean;
  alwaysShowTooltip?: boolean;
}

const getColor = (variant: string) =>
  variant === "primary"
    ? "oklch(48.8% 0.243 264.376)"
    : "oklch(37.3% 0.034 259.733)";

const ReactRange = ({
  min = 0,
  max = 10000,
  step = 100,
  variant = "primary",
  trackHeight = "0.75rem",
  onChange = () => {},
  onFinalChange = () => {},
  values,
  className,
  draggableTrack = false,
  alwaysShowTooltip,
  tipFormatter
}: ReactRangeProps) => {
  const Track = ({ props, children }: IRenderTrackParams) => (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      className={classNames("react-range", className)}
      style={{
        ...props.style
      }}
    >
      <div
        ref={props.ref}
        className="react-range-track"
        style={{
          height: trackHeight,
          cursor: !draggableTrack ? "pointer" : "ew-resize",
          background: getTrackBackground({
            values,
            colors:
              values.length === 2
                ? [
                    "oklch(96.7% 0.003 264.542)",
                    getColor(variant),
                    "oklch(96.7% 0.003 264.542)"
                  ]
                : [getColor(variant), "oklch(96.7% 0.003 264.542)"],
            min,
            max
          })
        }}
      >
        {children}
      </div>
    </div>
  );

  const Thumb = ({ props, isDragged, index }: IRenderThumbParams) => (
    <div
      {...props}
      key={props.key}
      className={classNames("react-range-thumb ", {
        dragging: isDragged
      })}
      style={{
        ...props.style
      }}
    >
      <div
        className={classNames("react-range-tooltip", {
          show: alwaysShowTooltip || isDragged
        })}
      >
        {tipFormatter ? tipFormatter(values[index]) : values[index].toFixed(1)}
      </div>
    </div>
  );
  return (
    <Range
      min={min}
      max={max}
      draggableTrack={draggableTrack}
      onChange={onChange}
      onFinalChange={onFinalChange}
      values={values}
      step={step}
      renderThumb={Thumb}
      renderTrack={Track}
    />
  );
};

export default ReactRange;
