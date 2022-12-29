import React from 'react'
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div >
      <Spin size='large' delay={1000}/>
    </div>
  )
}

export default Loader
