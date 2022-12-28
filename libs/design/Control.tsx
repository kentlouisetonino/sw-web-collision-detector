import { LegacyRef, ReactNode, forwardRef } from "react";

interface ControlProps {
  children: ReactNode;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
}

const Control = forwardRef(
  (
    {
      children,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
    }: ControlProps,
    ref: LegacyRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[5px] mx-[5px]"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </button>
  )
);

Control.displayName = "Control";

export default Control;
