import { Fragment } from 'react'
import GameBox from '../libs/design/GameBox'
import NextHead from '../libs/design/NextHead'

export default function Home() {
  return (
    <Fragment>
      <NextHead title="Collision Detector" />
      <h1 className="text-4xl font-bold my-10">Collision Detector</h1>
      <GameBox />
    </Fragment>
  )
}
