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
import { styled } from '@mui/material/styles';
import bus_map from "/Users/dailin/Desktop/chatbot/client/src/images/cabs-system-map.jpg";
import reg_bus from "/Users/dailin/Desktop/chatbot/client/src/images/cabs-banner.jpeg";
import demand_bus from "/Users/dailin/Desktop/chatbot/client/src/images/on-demand-bus.jpeg";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
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
  <div>
    <div className = "bus map">
      <Box
        component="img"
        sx={{
          // height: 233,
          width: 1/3,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="OSU BUS MAP."
        src={bus_map}
      />
    </div>
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
    {/* cards will be in parallel */}
    <div className = "card notes"> 
      <Card sx={{ maxWidth: 1/4 }}>
        <CardMedia
          component="img"
          height="140"
          image={reg_bus}
          alt="OSU BUS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Schedules Note
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CABS runs reduced service during academic breaks and no service on university holidays. 
            On home football Saturdays, CABS suspends service six hours prior to kickoff. Visit Ohio State’s 
            academic calendar for dates and the TTM news feed for information about service changes.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 1/4 }}>
        <CardMedia
          component="img"
          height="140"
          image={demand_bus}
          alt="OSU BUS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          On Demand Service
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To request overnight on-demand service, call 614-293-8669 or use the call buttons 
            located at the main entrances of Wexner Medical Center buildings and by the 
            elevators of all patient and visitor garages.
          </Typography>
        </CardContent>
      </Card>
      
    </div>
  </div>
  )
};

export default Busses;
