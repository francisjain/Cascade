import React from 'react'
import Selectcheckbox from '../selectcheck'

function Notselectoption({ Data }) {
    return (
        <div>
            <Selectcheckbox Data={Data} hideAllSelect={true} />
        </div>
    )
}

export default Notselectoption