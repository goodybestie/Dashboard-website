import * as React from 'react';
import { styled, useTheme,alpha  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import Profile from "../IMAGES/Container/Profile.png"
import Image from 'next/image';
import  MainPage from "../MAINPAGE/mainpage"
import MainPage2 from "../MAINPAGE2/mainpage2"
import BasicTable from "../FOOTER/Footer"
import PlatForm from '../PLATFORM/Platform';
import logo from "../IMAGES/Container/logo.png";
import Component8 from "../IMAGES/Container/Component8.png";
import trendup from "../IMAGES/Container/trendup.png";
import Icon from "../IMAGES/Container/Icon.png";
import cube from "../IMAGES/Container/cube.png";
import stop from "../IMAGES/Container/stop.png";
import arrorright from "../IMAGES/Container/arrorright.png";
import setting from "../IMAGES/Container/setting.png";
import logout from "../IMAGES/Container/logout.png";
import Vector from "../IMAGES/Container/Vector.png";
import { CiLight } from "react-icons/ci";



const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  outline:"#E1DFDF solid 1px", 
  borderRadius:"20px", 
  backgroundColor: "#ffffff",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color:"#000",
    background:"",
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(114% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:"#FAFAFA"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Image src={logo} alt="" /> */}
          <Typography variant="h6" noWrap component="div" sx={{color:"#26282C", ml:"1rem", mr:"23rem",fontWeight:"600",}} >
          Dashboard
          </Typography>
        <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"#E1DFDF"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{marginRight:"-5rem"}}>
            <Image src={Profile} alt='' />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: "4rem",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "4rem",
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{background:"#FAFAFA",}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
        <List  sx={{background:"#FAFAFA", }}>
              <ListItemButton >
                   <Image src={Component8} alt="" />
              </ListItemButton>
              <ListItemButton>
              <Image src={trendup} alt="" />
              </ListItemButton>
              <ListItemButton sx={{ml:"-0.7rem"}}>
              <Image src={Icon} alt="" />
              </ListItemButton>
              <ListItemButton sx={{ml:"-0.7rem"}}>
              <Image src={cube} alt="" />
              </ListItemButton>
              <ListItemButton sx={{ml:"-0.7rem"}}>
              <Image src={stop} alt="" />
              </ListItemButton>
              <Box sx={{background:"#fff", borderRadius:"14px", padding:"3px"}}>
              <ListItemButton sx={{ml:"-0.7rem",}}>
              <CiLight />
              </ListItemButton>
              <ListItemButton sx={{ml:"-0.2rem"}}>
              <Image src={Vector} alt="" />
              </ListItemButton>
              </Box>

              <Box sx={{mt:"4rem"}}>
              <ListItemButton sx={{ml:"-0.7rem"}}>
              <Image src={arrorright} alt="" />
              </ListItemButton>
              <ListItemButton sx={{ml:"-0.7rem"}}>
              <Image src={setting} alt="" />
              </ListItemButton>
              <ListItemButton sx={{ml:"-0.3rem"}}>
              <Image src={logout} alt="" />
              </ListItemButton>
              </Box>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box>
        <Box sx={{display:"flex", gap:"1rem",flexDirection:{md:"row", xs:"column"}}}>
          <MainPage />
          <MainPage2 />
        </Box>
        <Box sx={{display:"flex", gap:"1rem", flexDirection:{md:"row", xs:"column"}}}>
          <BasicTable />
          <PlatForm />
        </Box>
        </Box>
      </Main>
    </Box>
  );
}
