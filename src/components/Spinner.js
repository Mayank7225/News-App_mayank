import React from 'react'
import loading from './loading.gif';
function spinner() {
  return (
    <div className='text-center my-3'>
      <img src={loading} alt="loading"></img>
    </div>
  )
}

export default spinner
