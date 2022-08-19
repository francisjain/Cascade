import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'


const StyledToolbar =styled(Toolbar)({
    display:'fl'
})
function Navbar() {
  return (
    <AppBar position='sticky'>
        <Toolbar>Nnavbar</Toolbar>
    </AppBar>
  )
}

export default Navbar