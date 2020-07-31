import React, { FC } from 'react'
import { MetaText } from 'components/text/MetaText'

export const CurrentWeather: FC = () => {
  return (
    <div className={'space-y-1 text-center'}>
      <div className={'flex flex-row align-top space-x-2 justify-center'}>
        <span className={'text-6xl'}>28</span>
        <span className={'text-2xl text-gray-400 font-light py-4'}>°C</span>
      </div>
      <div>
        <MetaText>Barcelona, Spain</MetaText>
      </div>
      <div>
        <MetaText>Feels like 22 • Sunset 20:15</MetaText>
      </div>
    </div>
  )
}
