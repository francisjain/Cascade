import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton } from '@mui/material';

export default function Avatarsample() {


  const [currentimg, setCurrentimg] = React.useState('')
  const selectImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setCurrentimg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    console.log(e.target.files[0]);
  }

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 'sm', m: 7 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Francis Jain
          </Typography>
          <Typography component="div" variant="h6">
            Don Peter
          </Typography>
        </CardContent>
      </Box>


      <span style={{ position: "relative", overflow: "hidden" }}>

        <IconButton style={{ color: "red", zIndex: "100", position: "absolute", top: "2px" }} onClick={() => { setCurrentimg('') }}><DeleteIcon /></IconButton>

        <div style={{ margin: "27px" }}>
          <Avatar
            alt="Remy Sharp"
            src={currentimg}
            sx={{ width: 56, height: 56 }}
          />
        </div>


        <input type="file" id='file' onChange={selectImage} style={{ display: "none" }} />
        <label htmlFor='file' id='uploadbtn' style={{ zIndex: "10", height: "100%", width: "100%", color: "transparent", position: "absolute", top: "0px", left: "0px" }}>upload image</label>
      </span>

    </Card>
  );
}
