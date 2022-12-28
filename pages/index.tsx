import { Fragment, useEffect, useState } from 'react'
import GameBox from '../libs/design/GameBox'
import NextHead from '../libs/design/NextHead'

export default function Home() {
  const [browserWidth, setBrowserWidth] = useState(0)

  useEffect(() => {
    setBrowserWidth(window.innerWidth)

    function handleResize() {
      setBrowserWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  if (browserWidth < 600) {
    return (
      <h1 className="text-base my-10">
        Sorry this app does not support mobile view less than 600 pixel.
      </h1>
    )
  }

  return (
    <Fragment>
      <NextHead title="Collision Detector" />
      <h1 className="text-4xl font-bold my-10">Collision Detector</h1>
      <GameBox />
    </Fragment>
  )
}
