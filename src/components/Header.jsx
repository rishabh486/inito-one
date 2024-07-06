import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InitoSvg from '../assets/svg/Logo Inito copy.svg'
import menu from '../assets/svg/menu.svg'

const pages = ['About Us', 'Blog', 'FAQ', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({width}) {
  console.log(width);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    {width > 600 ?
    <AppBar position="static"
    sx={{
        '&.MuiAppBar-root':{
            backgroundColor : '#ffffff',
        }
    }}>

       
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{display: 'flex',justifyContent: 'space-around'}}>
         
         <img src={InitoSvg} alt="img"/>

         
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#112D35', display: 'block',
                fontSize: '16px',fontWieght: '600' }}
              >
                {page}
              </Button>
            ))}
          </Box>
</Box>
          <Box sx={{ flexGrow: 0 }}>
            
          </Box>
       

    </AppBar>
    :<>

    <AppBar position="static"
    sx={{
        '&.MuiAppBar-root':{
            backgroundColor : '#ffffff',
        },
        padding:'10px'
    }}>

       
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{display: 'flex',justifyContent: 'space-between'}}>
          <Box sx={{display:'flex',justifyContent:'space-between',gap:'15px'}}>
          <img src={menu} alt="img"/>
         <img src={InitoSvg} alt="img"/>
</Box>
         
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
          <Button sx={{
                    width: '150px',
                    height: '50px',
                    backgroundColor: '#1F94AA',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '17px',
                    color: '#fff'
                }}>
                    Try Inito
                </Button>
          </Box>
</Box>
          <Box sx={{ flexGrow: 0 }}>
            
          </Box>
       

    </AppBar>
    </> }
    </>
  );
}
export default ResponsiveAppBar;
