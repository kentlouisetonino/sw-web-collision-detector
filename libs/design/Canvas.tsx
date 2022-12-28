import { forwardRef, LegacyRef, ReactNode } from 'react'

interface CanvasProps {
  children: ReactNode
}

const Canvas = forwardRef(
  ({ children }: CanvasProps, ref: LegacyRef<HTMLCanvasElement>) => {
    return (
      <canvas
        ref={ref}
        id="canvas"
        width="600"
        height="400"
        className="block m-auto bg-black"
      >
        {children}
      </canvas>
    )
  }
)

Canvas.displayName = 'Canvas'
export default Canvas
