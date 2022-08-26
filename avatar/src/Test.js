import { Avatar, TextField, Typography, Grid, Input, InputLabel, MenuItem, Select, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Button, Autocomplete, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Paper, IconButton } from '@mui/material'
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/system'
import { IMaskInput } from 'react-imask';
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function Test() {
  const [serviceList, setServiceList] = useState([{ service: "", service1: '' }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };


  // const [allValues, setAllValues] = useState({
  //   mobile: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // });

  // const changeHandler = e => {
  //   setAllValues({ ...allValues, [e.target.name]: e.target.value })
  //   console.log(allValues);
  // }

  const [workexperience, setWorkExperience] = useState([{
    disignation: "",
    joiningdt: "",
    resigndt: ""
  }])
  
  const getTableValue = (e, index) => {
    const { name, value } = e.target;
    const list = [...workexperience];
    list[index][name] = value;
    setWorkExperience(list)
  }

  const removeExp = (index) => {
    const list = [...workexperience]
    list.splice(index, 1);
    setWorkExperience(list)
  }
  const addExp = () => {
    setWorkExperience([...workexperience, {
      disignation: "",
      joiningdt: "",
      resigndt: ""
    }])
  }


  console.log(workexperience);
  return (
    <div>

      {
      /* <input type="text"
        className="form-control"
        id="mobile"
        name="mobile"
        placeholder="Enter a valid mobile number"
        onChange={changeHandler}
      />
      <input type="text"
        className="form-control"
        id="username"
        name="username"
        placeholder="Enter a valid Name"
        onChange={changeHandler}
      /> */}



      <Grid item md={6}>
        <Typography sx={{ mb: 1, mt: 2 }}>Work Experience </Typography>
        <TableContainer component={Paper} elevation={3} sx={{ marginBottom: "22px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Designation</b></TableCell>
                <TableCell><b>:</b></TableCell>
                <TableCell ><b>Joining Date</b></TableCell>
                <TableCell ><b>Resign Date</b></TableCell>
                <TableCell><b>:</b></TableCell>
                <TableCell align='center'><b>Add option</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {
                workexperience.map((d, index) => (
                  <>
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <TextField name='disignation' variant='standard' type="text" value={d.disignation} onChange={(e) => getTableValue(e, index)} />
                      </TableCell>
                      <TableCell><b>:</b></TableCell>
                      <TableCell ><TextField name='joiningdt' placeholder='Join Date' variant='standard' type="date" value={d.joiningdt} onChange={(e) => getTableValue(e, index)} /></TableCell>
                      <TableCell ><TextField name='resigndt' variant='standard' type="date" value={d.resigndt} onChange={(e) => getTableValue(e, index)} /></TableCell>
                      <TableCell><b>:</b></TableCell>
                      <TableCell align='center'>
                        {workexperience.length - 1 === index && workexperience.length < 4 && (
                          <IconButton onClick={addExp}><AddIcon /></IconButton>)} &nbsp;&nbsp;
                        {workexperience.length !== 1 && (
                          <IconButton onClick={() => removeExp(index)}><DeleteIcon /></IconButton>)}
                      </TableCell>
                    </TableRow >
                  </>
                ))
              }

            </TableBody>
          </Table>
        </TableContainer>

      </Grid>


      <form className="App" autoComplete="off">
        <div className="form-field">
          <label htmlFor="service">Service(s)</label>
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="text"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                <input
                  name="service1"
                  type="text"
                  id="service1"
                  value={singleService.service1}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                {serviceList.length - 1 === index && serviceList.length < 4 && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {serviceList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="output">
          <h2>Output</h2>
          {serviceList &&
            serviceList.map((singleService, index) => (
              <ul key={index}>
                {singleService.service && <li>{singleService.service}&nbsp;{singleService.service1}</li>}
              </ul>
            ))}
        </div>
      </form>


    </div>
  )
}

export default Test