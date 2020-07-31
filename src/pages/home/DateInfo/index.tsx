import React, { FC } from 'react'
import { MetaText } from 'components/text/MetaText'

export const DateInfo: FC = () => {
  return (
    <div
      className={
        'flex flex-row text-white space-x-4 items-center justify-center'
      }
    >
      <div>img</div>
      <div className={'flex flex-col'}>
        <span className={'text-xl'}>Today</span>
        <MetaText>Sat, 3 Aug</MetaText>
      </div>
    </div>
  )
}
