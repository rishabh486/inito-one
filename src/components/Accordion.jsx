import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import plus from "../assets/svg/Plus.svg";
import minus from '../assets/svg/Minus.svg'
import { useState } from 'react';

export default function AccordionExpandDefault({width}) {
  const [expanded, setExpanded] = useState([true, false, false, false, false, false, false, false]);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = isExpanded;
      return newExpanded;
    });
  };
  const accordionData = [
    "What results does Inito give?",
    "Will Inito work if I have PCOS?",
    "How many test strips are required per cycle?",
    "Do medications affect results?",
    "Where can I buy more refill strips? Do I need to buy a new monitor every cycle?",
    "How accurate is Inito?",
    "Do I need to use a test strip for each hormone?",
    "Is Inito FDA Registered and can HSA benefits be used to purchase it?",
  ];
  return (
    
    <>
    {width > 600 ?
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px'}}>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px',width:'80%',flexWrap:'wrap'}}>
      {accordionData.map((title, index) => (
        <Accordion
          key={index}
          square={false}
          expanded={expanded[index]}
          onChange={handleChange(index)}
          sx={{ 
            width: '35% !important', 
            backgroundColor: '#F7F7FE', 
            borderRadius: '24px', 
            overflow: 'hidden',
            marginBottom: '10px'
          }}
        >
          <AccordionSummary
            expandIcon={<img src={expanded[index] ? minus : plus} alt={expanded[index] ? "minus" : "plus"} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography fontSize="18px" fontWeight="700" color="#112D35">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize="15px" fontWeight="500" color="#3F555D">
              {index === 0 ? "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
    </div>

    :
    <>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',padding:'20px'}}>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px'}}>
      {accordionData.map((title, index) => (
        <Accordion
          key={index}
          square={false}
          expanded={expanded[index]}
          onChange={handleChange(index)}
          sx={{ 
            width: '70% !important', 
            backgroundColor: '#F7F7FE', 
            borderRadius: '24px', 
            overflow: 'hidden',
            marginBottom: '10px'
          }}
        >
          <AccordionSummary
            expandIcon={<img src={expanded[index] ? minus : plus} alt={expanded[index] ? "minus" : "plus"} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography fontSize="18px" fontWeight="700" color="#112D35">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize="15px" fontWeight="500" color="#3F555D">
              {index === 0 ? "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
    </div>
    </>
    }
    </>
  );
}
