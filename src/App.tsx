import React from 'react'
import { HomePage } from 'pages/home'
import { ReactQueryConfigProvider } from 'react-query'

const isDev = process.env.NODE_ENV === 'development'

function App() {
  return (
    <ReactQueryConfigProvider
      config={{
        queries: {
          refetchOnWindowFocus: !isDev,
        },
      }}
    >
      <HomePage />
    </ReactQueryConfigProvider>
  )
}

export default App
