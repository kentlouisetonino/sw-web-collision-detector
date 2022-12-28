import { Fragment, useEffect, useRef } from 'react'
import Canvas from './Canvas'
import Control from './Control'

export default function GameBox() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const buttonUpRef = useRef<HTMLButtonElement>(null)
  const buttonDownRef = useRef<HTMLButtonElement>(null)
  const buttonLeftRef = useRef<HTMLButtonElement>(null)
  const buttonRightRef = useRef<HTMLButtonElement>(null)

  let direction = 0

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    let bigBoxX = 250
    let bigBoxY = 150
    let smallBoxX = Math.random() * (600 - 50)
    let smallBoxY = Math.random() * (400 - 50)

    let t = Date.now()
    let speed = 300
    let score = 0

    function draw() {
      const timePassed = (Date.now() - t) / 1000
      t = Date.now()

      context?.clearRect(0, 0, 600, 400)

      context!.font = '20px Titillium Web, sans-serif'
      context!.fillStyle = 'white'
      context?.fillText('Score: ' + score, 20, 30)

      // big box
      context?.beginPath()
      context?.rect(bigBoxX, bigBoxY, 100, 100)
      context!.fillStyle = 'green'
      context?.fill()

      // small box
      context?.beginPath()
      context?.rect(smallBoxX, smallBoxY, 50, 50)
      context!.fillStyle = 'red'
      context?.fill()

      if (direction == 1) {
        if (bigBoxX + 100 < 600) {
          bigBoxX += speed * timePassed
        }
      } else if (direction == 2) {
        if (bigBoxX > 0) {
          bigBoxX -= speed * timePassed
        }
      } else if (direction == 3) {
        if (bigBoxY + 100 < 400) {
          bigBoxY += speed * timePassed
        }
      } else if (direction == 4) {
        if (bigBoxY > 0) {
          bigBoxY -= speed * timePassed
        }
      }

      if (
        smallBoxX <= bigBoxX + 100 &&
        bigBoxX <= smallBoxX + 50 &&
        smallBoxY <= bigBoxY + 100 &&
        bigBoxY <= smallBoxY + 50
      ) {
        score++
        smallBoxX = Math.random() * (600 - 50)
        smallBoxY = Math.random() * (400 - 50)
      }

      window.requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <Fragment>
      <Canvas ref={canvasRef}>
        Your browser does not support HTML5 canvas tag.
      </Canvas>
      <div className="my-5">
        <Control
          ref={buttonUpRef}
          onMouseDown={() => (direction = 4)}
          onTouchStart={() => (direction = 4)}
          onMouseUp={() => (direction = 0)}
          onTouchEnd={() => (direction = 0)}
        >
          ↑
        </Control>
        <br />
        <Control
          ref={buttonLeftRef}
          onMouseDown={() => (direction = 2)}
          onTouchStart={() => (direction = 2)}
          onMouseUp={() => (direction = 0)}
          onTouchEnd={() => (direction = 0)}
        >
          ←
        </Control>
        <Control
          ref={buttonDownRef}
          onMouseDown={() => (direction = 3)}
          onTouchStart={() => (direction = 3)}
          onMouseUp={() => (direction = 0)}
          onTouchEnd={() => (direction = 0)}
        >
          ↓
        </Control>
        <Control
          ref={buttonRightRef}
          onMouseDown={() => (direction = 1)}
          onMouseUp={() => (direction = 0)}
          onTouchStart={() => (direction = 1)}
          onTouchEnd={() => (direction = 0)}
        >
          →
        </Control>
      </div>
    </Fragment>
  )
}
