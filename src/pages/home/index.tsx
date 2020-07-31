import React, { FC } from 'react'
import { DateInfo } from './DateInfo'
import { CurrentWeather } from './CurrentWeather'
import { useQuery } from 'react-query'
import { CurrentWeatherResponse } from 'types'
import { format } from 'date-fns'

function kelvinToF(kelvin: number) {
  const celsius = kelvin - 273
  return Math.floor(celsius * (9 / 5) + 32)
}

export const HomePage: FC = () => {
  const { data } = useQuery<CurrentWeatherResponse, string>(
    'currentWeather',
    () => fetch(`http://localhost:3001/weather`).then((res) => res.json())
  )

  if (!data) {
    return null
  }

  return (
    <div className={'h-screen bg-blue-900 p-4 space-y-4 text-white'}>
      <div className={'text-center'}>
        <p className={'text-gray-200'}>Weather Forecast</p>
      </div>
      <DateInfo />
      <CurrentWeather
        currentTemp={kelvinToF(data.main.temp)}
        feelsLikeTemp={kelvinToF(data.main.feels_like)}
        sunset={format(data.sys.sunset, 'hh:mm a')}
      />
    </div>
  )
}
