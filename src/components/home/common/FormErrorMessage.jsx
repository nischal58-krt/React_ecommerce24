import React from 'react'

function FormErrorMessage(props) {
  if(props.msg){
      return (
      <span className="text-sm text-red-400">{props.msg}</span>
    )
  }return null
  
}

export default FormErrorMessage