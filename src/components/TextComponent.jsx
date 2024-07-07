import { Typography,Box } from "@mui/material";
import React from "react";
import circle from '../assets/svg/circle.svg'
import circleSm from '../assets/svg/circle-sm.svg'
const TextComponent = ({width}) => {
    return (
        <>
        {width > 600 ?
<Box sx={{padding:'60px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

<Box sx={{position:'relative'}}>
    <Typography fontSize="36px" fontWeight="700" color="#112D35">
    Your top questions,
    </Typography>
    </Box>
    <Box sx={{position:'absolute',left:'48%',marginBottom:'44px'}}>
    <img src={circle} alt="circle"/>
    </Box>
   <Box>
    <Typography fontSize="36px" fontWeight="700" color="#112D35">
answered
    </Typography>
    </Box>
</Box>

:
<>
<Box sx={{padding:'60px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

<Box sx={{position:'relative'}}>
    <Typography fontSize="20px" fontWeight="700" color="#112D35">
    Your top questions,
    </Typography>
    </Box>
    <Box sx={{position:'absolute',left:'47%',marginBottom:'25px',marginLeft:'3px'}}>
    <img src={circleSm} alt="smcircle"/>
    </Box>
   <Box>
    <Typography fontSize="20px" fontWeight="700" color="#112D35">
answered
    </Typography>
    </Box>
</Box>

</>
        }
        </>
    )
}
export default TextComponent;