import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './adminsidebar.css'

const AdminSidebar = () => {


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
            <ListItemButton >

                    <ListItemIcon>
                    <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                    </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                   <ListItemButton>

                    <ListItemIcon>
                    <LocalMallOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Products"}/>

                    </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                   <ListItemButton >

                    <ListItemIcon>
                   <PeopleAltOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Customers"}/>

                    </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                   <ListItemButton >

                    <ListItemIcon>
                   <ShoppingCartOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"orders"}/>

                    </ListItemButton>
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

export default AdminSidebar;

