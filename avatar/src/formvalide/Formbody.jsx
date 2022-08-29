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

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+91 (#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};




export default function Formbody({ getData }) {

  let navigate = useNavigate()

  const [value, setValue] = React.useState([null, null]);
  const [emailError, setEmailError] = React.useState(true);


  const getTableValue = (e, index, ftype) => {
    const expValue = allValues.workexp
    expValue[index][ftype] = e.target.value

    if (ftype == "resigndt") {
      let valJoin = allValues.workexp.map(d => d.joiningdt)
      if (expValue[index]["resigndt"] > valJoin) {
        expValue[index]["resigndt"] = e.target.value
        setAllValues({
          ...allValues,
          workexp: expValue,
        });
      } else {
        alert("Invalide Date Entry*");
      }
    } else {
      setAllValues({
        ...allValues,
        workexp: expValue,
      });
    }

    console.log(allValues.workexp);
  }

  const addExp = () => {
    const expValue = allValues.workexp;
    expValue.push({
      designation: "",
      joiningdt: "",
      resigndt: ""
    })
    setAllValues({
      ...allValues,
      workexp: expValue,
    });
  }

  const removeExp = (index) => {
    const expValue = allValues.workexp;
    expValue.splice(index, 1);
    setAllValues({
      ...allValues,
      workexp: expValue,
    });
  }

  const [allValues, setAllValues] = useState({
    image: '',
    currentdateandtime: '',
    firstname: '',
    lastname: '',
    address: '',
    contact: '',
    country: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
    workexp: [{
      designation: "",
      joiningdt: "",
      resigndt: ""

    }],
    skills: [],
    timeshift: [null, null]
  });

  const changeHandler = (e) => {
    if (e.target.name == "dob") {
      if (e.target.value < "2019-12-01") {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
      } else {
        alert("must be under 2019");
      }
    } else {
      setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
  }

  const selectImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAllValues({ ...allValues, [e.target.name]: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
    console.log(e.target.files[0]);
  }

  const emailValidation = () => {
    const exp = /\S+@\S+\.\S+/
    if (exp.test(allValues.email)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }

  }

  const handleSubmit = (event) => {

    event.preventDefault();
    emailValidation()
    if (allValues.image
      // && allValues.currentdateandtime && allValues.firstname
      // &&
      // allValues.lastname && allValues.address && allValues.contact && allValues.country &&
      // allValues.dob && allValues.gender && allValues.email && allValues.password && allValues.jobtitle &&
      // allValues.workexp && allValues.skills && allValues.timeshift
    ) {
      getData(allValues);
      // navigate('/userDetail')
    } else { alert('Invalide Form*') }
  };

  console.log(allValues, "gggg");
  

  return (
    <div>
      <Container>
        <Typography variant="h4" textAlign={"center"} mt={4}>Registration</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 7 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={8} style={{ marginLeft: "50px", width: "100%", display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <Avatar
                alt="Remy Sharp"
                src={allValues.image}
                sx={{ width: 56, height: 56 }}
                required
              />
              <input type="file" id='file' name='image' onChange={selectImage} style={{ display: "none" }} />
              <label htmlFor='file' id='uploadbtn'><b>Upload Your Image</b></label>

            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                variant='standard'
                fullWidth
                id="datetime-local"
                name="currentdateandtime"
                label="Date & Time"
                type="datetime-local"
                // defaultValue="2017-05-24T10:30"
                onChange={changeHandler}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={allValues.firstname == "" ? true : false}
                autoComplete="given-name"
                name="firstname"
                onChange={changeHandler}
                required
                fullWidth
                id="firstName"
                label="First Name"
                helperText={allValues.firstname == "" ? "Required Field" : false}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={allValues.lastname == "" ? true : false}
                helperText={allValues.lastname == "" ? "Required Field" : false}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                onChange={changeHandler}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                onChange={changeHandler}
                autoComplete="address"
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="formatted-text-mask-input">Contact Number</InputLabel>
              <Input
                required
                value={allValues.contact}
                name="contact"
                placeholder='+91 (100) 000-0000'
                onChange={changeHandler}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">Country </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={allValues.country}
                  name="country"
                  onChange={changeHandler}
                  label="Country"
                >
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="canada">Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="date"
                label="D O B"
                name="dob"
                value={allValues.dob}
                onChange={changeHandler}
                variant="standard"
                type="date"
                // defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl >
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  onChange={changeHandler}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={allValues.email == "" ? true : false}
                helperText={emailError ? <span style={{ color: "red" }}>Required Field  (Eg:- you@mail.com)</span> : false}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={allValues.password == "" ? true : false}
                helperText={allValues.password == "" ? "Required Field" : false}
                required
                fullWidth
                name="password"
                onChange={changeHandler}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            {/*             
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="jobtitle"
                onChange={changeHandler}
                label="Job Title & Description"
                type="text"
                id="Job Title"
                autoComplete="family"
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Joining Date', end: 'Resign Date' }}
              >
                <Typography sx={{mb: 2 }}>Work Experience </Typography>
                <DateRangePicker
                  calendars={1}
                  name="workexp"
                  // value={allValues.workexp}  
                  value={value}
                  onChange={(e) => {
                    // setAllValues({ ...allValues, [e.target.name]: e.target.value })
                    setValue(e)
                    console.log(e);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 9 }}> To </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Grid>
 */}


            <Grid item xs={12} sm={12} md={12}>
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
                    {allValues.workexp.map((d, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <TextField name='designation' variant='standard' type={"text"} value={d.designation} onChange={(e) => { getTableValue(e, index, "designation") }} />
                        </TableCell>
                        <TableCell><b>:</b></TableCell>
                        <TableCell ><TextField name="joiningdt" variant='standard' type={"date"} value={d.joiningdt} onChange={(e) => { getTableValue(e, index, "joiningdt") }} /></TableCell>
                        <TableCell ><TextField name='resigndt' variant='standard' type={"date"} value={d.resigndt} onChange={(e) => { getTableValue(e, index, "resigndt") }} /></TableCell>
                        <TableCell><b>:</b></TableCell>
                        <TableCell align='center'>

                          {d.designation && d.joiningdt && d.resigndt && allValues.workexp.length - 1 === index &&
                            allValues.workexp.length < 4 &&
                            (<IconButton onClick={addExp}> <AddIcon /></IconButton>)}
                          &nbsp;&nbsp;
                          {allValues.workexp.length !== 1 && (<IconButton onClick={() => removeExp(index)}><DeleteIcon /></IconButton>)}
                        </TableCell>
                      </TableRow >
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>

            <Grid item xs={12} sm={6}>
              <Autocomplete
                multiple
                id="size-small-outlined-multi"
                limitTags={2}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                // defaultValue={[top100Films[13]]}
                renderInput={(params) => (
                  <TextField {...params} label="Skill's" placeholder="Choose your skill's"
                    onChange={changeHandler} name="skills" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography component="label" mt={2} htmlFor='time' >Time Shift :</Typography>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Starting Time', end: 'Ending Time' }}
              >

                <DateRangePicker
                  calendars={1}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField
                        id="time"
                        label="Starting Time"
                        type="time"
                        // defaultValue="07:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        sx={{ width: 175 }}
                      />
                      <Box sx={{ mx: 5 }}> To </Box>
                      <TextField
                        id="time"
                        label="Ending Time"
                        type="time"
                        // defaultValue="07:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        outputProps={{
                          step: 300, // 5 min
                        }}
                        sx={{ width: 175 }}
                      />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div >
  )
}
const top100Films = [
  { title: 'React', year: 1994 },
  { title: 'Angular', year: 1972 },
  { title: 'Node js', year: 2000 },
  { title: 'Express', year: 2009 },
  { title: 'MongoDB', year: 1975 },
];

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 12 },
  // createData('fffffffff', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
];
