import React from 'react'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import {Box, Container, Stack} from '@mui/material'
import Navbar from './Navbar'

function index() {
  return (
    <Box>
        <Navbar/>
       <Stack direction="row" spacing={2} justifyContent="space-between">
       <Sidebar/>
        <Feed/>
        <Rightbar/>
       </Stack>
    </Box>
  )
}

export default index