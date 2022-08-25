
import { Avatar, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Userdetail({ data }) {
    console.log(data);

    return (
        <div>
            <Container sx={{ bgcolor: "gray", mt: "25px", p: 3, borderRadius: 1 }}>
                <Typography variant='h3' component={"h3"} textAlign="center" color={"white"}>User Details</Typography>
                <Grid container spacing={2} padding={2} alignItems={"center"} >
                    <Grid item xs={12} sm={6} display="flex" gap={2} alignItems={"center"} >
                        {
                            data.map(d => (
                                <>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={d.image}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography color={"white"}>{d.firstname} {d.lastname}</Typography>
                                </>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        {
                            data.map(d => (
                                <>
                                <Typography align='right'>Date & Time :</Typography>
                                <Typography align='right' color={'white'}> {d.currentdateandtime}</Typography>
                                </>
                            ))}
                    </Grid>
                    <Grid item sm={12}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">


                                <TableBody>
                                    {data.map((row) => (
                                        <>
                                            <StyledTableRow key={row.address}>
                                                <StyledTableCell component="th" scope="row">
                                                    Address
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.contact}>
                                                <StyledTableCell component="th" scope="row">
                                                    Contact
                                                </StyledTableCell>
                                                <StyledTableCell align="left" >:</StyledTableCell>
                                                <StyledTableCell align="left">{row.contact}  </StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.country}>
                                                <StyledTableCell component="th" scope="row">
                                                    Country
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.country} </StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.dob}>
                                                <StyledTableCell component="th" scope="row">
                                                    D O B
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.dob}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.gender}>
                                                <StyledTableCell component="th" scope="row">
                                                    Gender
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.gender}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.email}>
                                                <StyledTableCell component="th" scope="row">
                                                    E-mail
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.jobtitle}>
                                                <StyledTableCell component="th" scope="row">
                                                    Job Title
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.jobtitle}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.skills}>
                                                <StyledTableCell component="th" scope="row">
                                                    Skills
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.skills}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow key={row.workexp}>
                                                <StyledTableCell component="th" scope="row">
                                                    Work Experience
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.workexp}</StyledTableCell>
                                            </StyledTableRow>
                                            {/* <StyledTableRow key={row.timeshift}>
                                                <StyledTableCell component="th" scope="row">
                                                    Time sift
                                                </StyledTableCell>
                                                <StyledTableCell align="left">:</StyledTableCell>
                                                <StyledTableCell align="left">{row.timeshift}</StyledTableCell>
                                            </StyledTableRow> */}

                                        </>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
