import { Fragment, useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonUpRef = useRef<HTMLButtonElement>(null);
  const buttonDownRef = useRef<HTMLButtonElement>(null);
  const buttonLeftRef = useRef<HTMLButtonElement>(null);
  const buttonRightRef = useRef<HTMLButtonElement>(null);

  let x = 250;
  let y = 150;
  let coinx = Math.random() * (600 - 50);
  let coinY = Math.random() * (400 - 50);

  let t = Date.now();
  let speed = 300;
  let dir = 0;
  let score = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    function draw() {
      var timePassed = (Date.now() - t) / 1000;
      t = Date.now();

      context?.clearRect(0, 0, 600, 400);

      context!.font = "25px Arial";
      context!.fillStyle = "white";
      context?.fillText("Score: " + score, 20, 30);

      context?.beginPath();
      context?.rect(x, y, 100, 100);
      context!.fillStyle = "red";
      context?.fill();

      context?.beginPath();
      context?.rect(coinx, coinY, 50, 50);
      context!.fillStyle = "#e3c228";
      context?.fill();

      if (dir == 1) {
        if (x + 100 < 600) {
          x += speed * timePassed;
        }
      } else if (dir == 2) {
        if (x > 0) {
          x -= speed * timePassed;
        }
      } else if (dir == 3) {
        if (y + 100 < 400) {
          y += speed * timePassed;
        }
      } else if (dir == 4) {
        if (y > 0) {
          y -= speed * timePassed;
        }
      }

      if (
        coinx <= x + 100 &&
        x <= coinx + 50 &&
        coinY <= y + 100 &&
        y <= coinY + 50
      ) {
        score++;
        coinx = Math.random() * (600 - 50);
        coinY = Math.random() * (400 - 50);
      }

      window.requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <Fragment>
      <h1 className="text-4xl font-bold my-10">Coin Collector</h1>
      <canvas
        ref={canvasRef}
        id="canvas"
        width="600"
        height="400"
        className="block m-auto"
      >
        Your browser does not support HTML5 canvas tag.
      </canvas>
      <div className="my-5">
        <button
          ref={buttonUpRef}
          id="up"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[5px]"
          onMouseDown={() => {
            dir = 4;
          }}
          onTouchStart={() => {
            dir = 4;
          }}
          onMouseUp={() => {
            dir = 0;
          }}
          onTouchEnd={() => {
            dir = 0;
          }}
        >
          ↑
        </button>
        <br />
        <button
          id="left"
          ref={buttonLeftRef}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[5px]"
          onMouseDown={() => {
            dir = 2;
          }}
          onTouchStart={() => {
            dir = 2;
          }}
          onMouseUp={() => {
            dir = 0;
          }}
          onTouchEnd={() => {
            dir = 0;
          }}
        >
          ←
        </button>
        <button
          ref={buttonDownRef}
          id="down"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[5px] mx-[5px]"
          onMouseDown={() => {
            dir = 3;
          }}
          onTouchStart={() => {
            dir = 3;
          }}
          onMouseUp={() => {
            dir = 0;
          }}
          onTouchEnd={() => {
            dir = 0;
          }}
        >
          ↓
        </button>
        <button
          id="right"
          ref={buttonRightRef}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[5px]"
          onMouseDown={() => {
            dir = 1;
          }}
          onTouchStart={() => {
            dir = 1;
          }}
          onMouseUp={() => {
            dir = 0;
          }}
          onTouchEnd={() => {
            dir = 0;
          }}
        >
          →
        </button>
      </div>
    </Fragment>
  );
}
