import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
    return (
        <>
<Box sx={{backgroundColor:'#112D35',height:'400px',display:'flex',justifyContent:'center', alignItems: 'center'}}>
<Box sx={{display:'flex',flexDirection:'column'}}>
<Typography fontSize="15px" fontWeight="600" color="#FFFFFF">
               Company
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               About Us
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Careers
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
              Blog
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Contact Us
               </Typography>
</Box>

<Box sx={{display:'flex',flexDirection:'column'}}>
<Typography fontSize="15px" fontWeight="600" color="#FFFFFF">
               Support
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               FAQ
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Terms
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Privacy Policy
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Returns & Warranty
               </Typography>
</Box>

<Box sx={{display:'flex',flexDirection:'column'}}>
<Typography fontSize="15px" fontWeight="600" color="#FFFFFF">
               Get In Touch
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               +1 815-369-0989
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               help@inito.com
               </Typography>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               355 Bryant Street, Suite 403, San Francisco 94017
               </Typography>
</Box>

</Box>
        </>
    )
}
export default Footer;