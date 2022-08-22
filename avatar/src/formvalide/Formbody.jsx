import { Avatar, TextField, Typography, Grid, Input, InputLabel, MenuItem, Select, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Button, Autocomplete } from '@mui/material'
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/system'
import { IMaskInput } from 'react-imask';
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
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
export default function Formbody() {
  const [value, setValue] = React.useState([null, null]);
  const [country, setCountry] = React.useState('');
  const [values, setValues] = React.useState({
    textmask: '+91 (100) 000-0000',
    numberformat: '1320',
  });

  const handleChange = (event) => {
    setCountry(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
                label="Date & Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
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
                autoComplete="address"
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="formatted-text-mask-input">Contact Number</InputLabel>
              <Input
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
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
                  value={country}
                  label="Country"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                  <MenuItem value={30}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="date"
                label="D O B"
                variant="standard"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl >
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="password"
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
                name="Job Title"
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
                  <TextField {...params} label="Skill's" placeholder="Choose your skill's" />
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
                        inputProps={{
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