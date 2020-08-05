import React, { FC } from 'react'
import { MetaText } from 'components/text/MetaText'

interface DateInfoProps {
  date: string
  weatherIconId: string
}

export const DateInfo: FC<DateInfoProps> = ({ date, weatherIconId }) => {
  return (
    <div className={'flex flex-row text-white items-center justify-center'}>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIconId}@2x.png`}
          alt={'weather icon'}
          className={'h-12'}
        />
      </div>
      <div className={'flex flex-col'}>
        <span className={'text-lg'}>Today</span>
        <MetaText>{date}</MetaText>
      </div>
    </div>
  )
}
