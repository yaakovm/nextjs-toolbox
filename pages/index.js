import Head from "next/head";
import Footer from "@components/Footer";
import JokeBlock from "@components/JokeBlock";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Accordion, AccordionDetails, AccordionSummary, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Header from "@components/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Home() {

  return (
    <Container maxWidth="lg">
      <Head>
        <title>The Boogiewoogie site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={2}>
        <Grid item xs={12}>

          <Header title={"Intentionally left blank"}></Header>
        </Grid>

        <Grid item xs={12} md={8}>
{[1,2,3,4,5].map(() =>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >Clothing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
)}

        </Grid>
        <Grid item xs={12} md={4}>
          xs=12 md=4
        </Grid>
      </Grid>

      <JokeBlock />
      <Footer />
    </Container>
  );
}
