import React, { FC } from 'react'
import { MetaText } from 'components/text/MetaText'

interface CurrentWeatherProps {
  currentTemp: number
  feelsLikeTemp: number
  location?: string
  sunset: string
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({
  currentTemp,
  feelsLikeTemp,
  sunset,
}) => {
  return (
    <div className={'space-y-1 text-center'}>
      <div className={'flex flex-row align-top space-x-2 justify-center'}>
        <span className={'text-6xl'}>{currentTemp}</span>
        <span className={'text-2xl text-gray-400 font-light py-4'}>°F</span>
      </div>
      <div>
        <MetaText>Barcelona, Spain</MetaText>
      </div>
      <div>
        <MetaText>
          Feels like {feelsLikeTemp} • Sunset {sunset}
        </MetaText>
      </div>
    </div>
  )
}
