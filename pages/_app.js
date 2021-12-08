import React from 'react'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" >

      <h1 >MyApp</h1>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp