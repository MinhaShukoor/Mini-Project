import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './sidebar.css'

const Sidebar = () => {


    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

   
    const list = (anchor) => (
        <Box 
          className="container"
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            
                <ListItem disablePadding>
                <a href='/admin/dashboard' className='home'>

                  <ListItemButton >
                   <ListItemIcon>
                   <GridViewIcon/>
                    </ListItemIcon>
                    <ListItemText  primary={"Dashboard"}/>
                    </ListItemButton>
                    </a>
                    </ListItem>

                   <ListItem disablePadding>
                   <a href='/admin/products' className='products'>
                    <ListItemButton>
                    <ListItemIcon>
                    <LocalMallOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Products"}/>
                    </ListItemButton>
                    </a>
                    </ListItem>

                    <ListItem disablePadding>
                    <a href='/admin/cutomers' className='customer'>

                    <ListItemButton>
                    <ListItemIcon>
                    <PeopleAltOutlinedIcon/>

                    </ListItemIcon>
                    <ListItemText primary={"Customers"}/>
                    </ListItemButton>
                    </a>
                    </ListItem>   

                   

                   <ListItem disablePadding>
                   <a href="/admin/orders" className='orders'>

                    <ListItemButton >
                     <ListItemIcon>
                     <ShoppingCartOutlinedIcon/>
                     </ListItemIcon>
                     <ListItemText primary={"orders"}/>
                     </ListItemButton>
                    </a>
                   </ListItem>
          </List>
         
        </Box>
        
      );
    
   
    return(  
        <div className='sidebar'>
         
                <MenuIcon 
                        onClick={
                            toggleDrawer("left",true)}
                            />
                <Drawer  anchor={"left"} 
                        open={state["left"]}
                        onClose={toggleDrawer("left",false)}
                          > 
                          {list("left")}
                          </Drawer>
        </div>
       
 


  );
}

export default Sidebar;

