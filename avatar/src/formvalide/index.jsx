import React from 'react'
import Formbody from './Formbody'

function index({getData,data}) {
  return (
    <div>
        <Formbody getData={getData}/>
        {/* <Userdetail data={data}/> */}
    </div>
  )
}

export default index