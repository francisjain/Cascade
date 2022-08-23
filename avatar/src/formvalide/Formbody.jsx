import { Avatar, TextField, Typography, Grid, Input, InputLabel, MenuItem, Select, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Button, Autocomplete } from '@mui/material'
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/system'
import { IMaskInput } from 'react-imask';
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import {useNavigate} from 'react-router-dom'



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

  const [value, setValue] = React.useState([null, null]);

  let navigate =useNavigate()

  const [allValues, setAllValues] = useState({
    image: '',
    currentdateandtime: '',
    firstname: '',
    lastname: '',
    address: '',
    contact: '+91 (100) 000-0000',
    country: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
    jobtitle: '',
    workexp: { value },
    skills: [],
    timeshift: [null, null]
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allValues.firstname && allValues.lastname && allValues.email && allValues.password) {
      // console.log(allValues,"gggg");
      getData(allValues);
      navigate('/userDetail')
    } else { alert('Fill the Required Field') }
  };

  return (
    <div>
      <Container>
        <Typography variant="h4" textAlign={"center"} mt={4}>Registration</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 7 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={8} style={{ marginLeft: "50px", width: "100%", display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <label><b>Upload Your Image</b></label>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
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
                value={allValues.contact}
                name="contact"
                onChange={changeHandler}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">Country </InputLabel>
                <Select
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
                helperText={allValues.lastname == "" ? "Required Field  (Eg:- you@mail.com)" : false}
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
                helperText={allValues.lastname == "" ? "Required Field" : false}
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
                <Typography sx={{ mt: 2, mb: 1 }}>Work Experience </Typography>
                <DateRangePicker
                  calendars={1}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
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
            <Grid item xs={12} sm={6}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Starting Time', end: 'Ending Time' }}
              >
                <Typography sx={{ mt: 2, mb: 2 }}>Time Shift </Typography>
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
                        sx={{ width: 200 }}
                      />
                      <Box sx={{ mx: 9 }}> To </Box>
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
                        sx={{ width: 200 }}
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