import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


export default function AccordionExpandDefault() {
  return (
    <div style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)'}}>
      <Accordion defaultExpanded square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What results does Inito give?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Will Inito work if I have PCOS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>How many test strips are required per cycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Do medications affect results?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Where can I buy more refill strips? Do I need to buy a new monitor every cycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>How accurate is Inito?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Do I need to use a test strip for each hormone?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '60%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Is Inito FDA Registered and can HSA benefits be used to purchase it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
