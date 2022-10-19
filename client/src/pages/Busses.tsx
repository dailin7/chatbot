import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import bus_map from "../images/cabs-system-map.jpg";
import reg_bus from "../images/cabs-banner.jpeg";
import demand_bus from "../images/on-demand-bus.jpeg";
import recuriment from "../images/recuriment.jpeg";
import { Button } from "@mui/material";
import { BsCloudDownloadFill } from "react-icons/bs";
import { positions } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import heroDivider from "../images/hero-divider.svg";

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fdc1c1",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function bus_info(period: string, time_fre_1: string, time_fre_2: string, time_fre_3: string) {
  return {period, time_fre_1, time_fre_2, time_fre_3};
}

function bus_info_mc(period: string, time_fre_1: string, time_fre_2: string, time_fre_3: string, time_fre_4: string) {
  return {period, time_fre_1, time_fre_2, time_fre_3, time_fre_4};
}

const be_info = [
  bus_info('REGYLAR WEEKDAY', "7AM - 10AM", "10AM - 6PM", "6PM - 10PM"),
  bus_info('Monday - Friday', "10 MIN", "8 MIN", "15 MIN"),
  bus_info('SUMMER SERVICE', "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Monday - Friday', "15 MIN", "-", "-"),
  bus_info("BREAK SERVICE", "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Monday - Friday', "15 MIN", "-", "-"),
];

const cc_info = [
  bus_info('REGYLAR WEEKDAY', "7AM - 10AM", "10AM - 6PM", "6PM - 10PM"),
  bus_info('Monday - Friday', "10 MIN", "7 MIN", "15 MIN"),
  bus_info('REGYLAR WEEKEND', "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Saturday - Sunday', "20 MIN", "20 MIN", "-"),
  bus_info('SUMMER SERVICE', "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Monday - Friday', "15 MIN", "-", "-"),
  bus_info('BREAK SERVICE', "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Monday - Friday', "15 MIN", "-", "-"),
];

const er_info = [
  bus_info('REGYLAR WEEKDAY', "7AM - 10AM", "10AM - 6PM", "6PM - 10PM"),
  bus_info('Monday - Friday', "10 MIN", "15 MIN", "30 MIN"),
  bus_info('SUMMER SERVICE', "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Monday - Friday', "30 MIN", "-", "-"),
  bus_info('BREAK SERVICE', "7AM - 7PM", "7PM - 10PM", "10PM - MIDNIGHT"),
  bus_info('Monday - Friday', "30 MIN", "-", "-"),
];

const mc_info = [
  bus_info_mc('REGYLAR WEEKDAY', "5AM - 6AM", "6AM - 8AM","8AM - 2PM", "2PM - 8PM"),
  bus_info_mc('Monday - Friday', "10 MIN", "3 MIN", "10 MIN", "3MIN"),
  bus_info_mc('REGYLAR WEEKDAY', "8PM - 10PM", "10PM - MIDNIGHT", "MIDNIGHT - 12:30AM", "12:30AM - 5AM"),
  bus_info_mc('Monday - Friday', "10 MIN", "3 MIN", "10 MIN", "ON DEMAND"),
];

const Busses = () => {
  return (
    <div className = "h-full">

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5335.596115402888!2d-83.0146018331603!3d39.99826267077555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388eb8c5837241%3A0x29e24cc55fefd423!2sOhio%20Union!5e0!3m2!1sen!2sus!4v1665525146289!5m2!1sen!2sus" 
        width="100%" height="650" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className = "bus info">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>BE - Buckeye Express</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {be_info.map((row) => (
                    <StyledTableRow
                      key={row.period}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.period}
                      </TableCell>
                      <TableCell align="right">{row.time_fre_1}</TableCell>
                      <TableCell align="right">{row.time_fre_2}</TableCell>
                      <TableCell align="right">{row.time_fre_3}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>CC - Campus Connector</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {cc_info.map((row) => (
                    <StyledTableRow
                      key={row.period}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.period}
                      </TableCell>
                      <TableCell align="right">{row.time_fre_1}</TableCell>
                      <TableCell align="right">{row.time_fre_2}</TableCell>
                      <TableCell align="right">{row.time_fre_3}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>ER - East Residential</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {er_info.map((row) => (
                    <StyledTableRow
                      key={row.period}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.period}
                      </TableCell>
                      <TableCell align="right">{row.time_fre_1}</TableCell>
                      <TableCell align="right">{row.time_fre_2}</TableCell>
                      <TableCell align="right">{row.time_fre_3}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>MC - Med Center Express</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {mc_info.map((row) => (
                    <StyledTableRow
                      key={row.period}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.period}
                      </TableCell>
                      <TableCell align="right">{row.time_fre_1}</TableCell>
                      <TableCell align="right">{row.time_fre_2}</TableCell>
                      <TableCell align="right">{row.time_fre_3}</TableCell>
                      <TableCell align="right">{row.time_fre_4}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className = "card notes, mt-5, background-size: auto, bg-gradient-to-r from-[#ffcccc] to-[#ffcccc]"> 
      <Grid container>
        <Grid item xs={4}>
          <Card sx={{ width: 300, m: "auto"}} >
            <CardMedia
              component="img"
              height="140"
              image={reg_bus}
              alt="OSU BUS"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Schedules Note
              </Typography>
              <Typography className="overflow-scroll h-[100px]" variant="body2" color="text.secondary" >
                CABS runs reduced service during academic breaks and no service on university holidays. 
                On home football Saturdays, CABS suspends service six hours prior to kickoff. Visit Ohio State’s 
                academic calendar for dates and the TTM news feed for information about service changes. {" "}
                <a className = "text-scarlet"href = "../images/cabs-system-map.jpg" >Download</a> Map here.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ width: 300, m: "auto"}} >
            <CardMedia
              component="img"
              height="140"
              image={demand_bus}
              alt="OSU BUS"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              On Demand Service
              </Typography>
              <Typography className="overflow-scroll h-[100px]" variant="body2" color="text.secondary" >
                To request overnight on-demand service, call 614-293-8669 or use the call buttons 
                located at the main entrances of Wexner Medical Center buildings and by the 
                elevators of all patient and visitor garages.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ width: 300, m: "auto"}} >
            <CardMedia
              component="img"
              height="140"
              image={recuriment}
              alt="recuriment"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Recuriment
              </Typography>
              <Typography className="overflow-scroll h-[100px]" variant="body2" color="text.secondary" >
              Earn up to $16 an hour as a student bus driver for Ohio State’s Campus Area Bus Service 
              (CABS). We will train you to drive! {" "}
              <a className = "text-scarlet"href = "https://ttm.osu.edu/jobs">Apply </a> today.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
        
      </div>
    </div>
  )
};

export default Busses;
