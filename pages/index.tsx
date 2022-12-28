import { Fragment, useEffect, useState } from 'react'
import GameBox from '../libs/design/GameBox'

export default function Home() {
  const [browserWidth, setBrowserWidth] = useState(0)

  function handleRezie() {
    setBrowserWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleRezie)
      handleRezie()
      return () => window.removeEventListener('resize', handleRezie)
    }
  }, [])

  if (browserWidth < 600) {
    return (
      <h1 className="text-base mx-20 grid h-screen place-items-center">
        Sorry this app does not support mobile devices with less 600 pixel
        width. If possible toggle desktop site option in your browser.
      </h1>
    )
  }

  return (
    <Fragment>
      <h1 className="text-4xl font-bold my-10">Collision Detector</h1>
      <GameBox />
    </Fragment>
  )
}
