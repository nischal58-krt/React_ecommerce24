import React from 'react'

import {Link,Outlet} from "react-router-dom"

function RootElement() {
  return (
    <div>
      
          
          <Outlet/>
    </div>
  )
}

export default RootElement