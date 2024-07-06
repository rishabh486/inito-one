import { Typography,Box } from "@mui/material";
import React from "react";
import circle from '../assets/svg/circle.svg'
const TextComponent = () => {
    return (
        <>
<Box sx={{padding:'60px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<Box sx={{position:'absolute',left:'50%',}}>
    <img src={circle} alt="circle"/>
    </Box>
<Box sx={{position:'relative'}}>
    <Typography fontSize="36px" fontWeight="700" color="#112D35">
    Your top questions,
    </Typography>
    </Box>
   <Box>
    <Typography fontSize="36px" fontWeight="700" color="#112D35">
answered
    </Typography>
    </Box>
</Box>
        </>
    )
}
export default TextComponent;