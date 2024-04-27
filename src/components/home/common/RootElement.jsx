import React from 'react'

import {Link,Outlet} from "react-router-dom"
import Header from './Header'

function RootElement() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default RootElement