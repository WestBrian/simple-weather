import React, { FC } from 'react'
import { DateInfo } from './DateInfo'
import { CurrentWeather } from './CurrentWeather'

export const HomePage: FC = () => {
  return (
    <div className={'h-screen bg-blue-900 p-4 space-y-4 text-white'}>
      <div className={'text-center'}>
        <p className={'text-gray-200'}>Weather Forecast</p>
      </div>
      <DateInfo />
      <CurrentWeather />
    </div>
  )
}
