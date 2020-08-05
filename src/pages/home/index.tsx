import React, { FC } from 'react'
import { DateInfo } from './DateInfo'
import { CurrentWeather } from './CurrentWeather'
import { useQuery } from 'react-query'
import { CurrentWeatherResponse } from 'types'
import { format, fromUnixTime } from 'date-fns'

function kelvinToF(kelvin: number) {
  const celsius = kelvin - 273
  return Math.floor(celsius * (9 / 5) + 32)
}

export const HomePage: FC = () => {
  const urlParameters = new URLSearchParams()
  urlParameters.append('zip', '23059')
  if (process.env.REACT_APP_API_KEY) {
    urlParameters.append('appid', process.env.REACT_APP_API_KEY)
  }

  const { data } = useQuery<CurrentWeatherResponse, string>(
    'currentWeather',
    () =>
      fetch(
        `${process.env.REACT_APP_API_HOST}/weather?${urlParameters.toString()}`
      ).then((res) => res.json())
  )

  if (!data) {
    return null
  }

  return (
    <div className={'h-screen bg-blue-900 p-4 space-y-4 text-white'}>
      <div className={'text-center'}>
        <p className={'text-gray-200'}>Weather Forecast</p>
      </div>
      <DateInfo
        date={format(fromUnixTime(data.dt), '	iii, d MMM')}
        weatherIconId={data.weather[0].icon}
      />
      <CurrentWeather
        currentTemp={kelvinToF(data.main.temp)}
        feelsLikeTemp={kelvinToF(data.main.feels_like)}
        location={data.name}
        sunset={format(fromUnixTime(data.sys.sunset), 'hh:mm a')}
      />
    </div>
  )
}
