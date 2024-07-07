import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


export default function AccordionExpandDefault({width}) {
  return (
    
    <>
    {width > 600 ?
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px'}}>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion defaultExpanded square="false" sx={{ width: '35% !important',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">What results does Inito give?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="15px" fontWeight="500" color="#3F555D">
          Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '35% !important',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Will Inito work if I have PCOS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion  square="false" sx={{ width: '35%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">How many test strips are required per cycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '35%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Do medications affect results?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion  square="false" sx={{ width: '35%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Where can I buy more refill strips? Do I need to buy a new monitor every cycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '35%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">How accurate is Inito?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion  square="false" sx={{ width: '35%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Do I need to use a test strip for each hormone?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '35%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Is Inito FDA Registered and can HSA benefits be used to purchase it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>

    :
    <>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',padding:'20px'}}>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion defaultExpanded square="false" sx={{ width: '70% !important',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">What results does Inito give?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="15px" fontWeight="500" color="#3F555D">
          Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '70% !important',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Will Inito work if I have PCOS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion  square="false" sx={{ width: '70%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">How many test strips are required per cycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '70%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Do medications affect results?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion  square="false" sx={{ width: '70%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Where can I buy more refill strips? Do I need to buy a new monitor every cycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '70%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">How accurate is Inito?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      <Accordion  square="false" sx={{ width: '70%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Do I need to use a test strip for each hormone?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  square="false" sx={{ width: '70%',backgroundColor:'#F7F7FE',borderRadius:'24px',overflow:'hidden' }}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontSize="18px" fontWeight="700" color="#112D35">Is Inito FDA Registered and can HSA benefits be used to purchase it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
    </>
    }
    </>
  );
}
