import {Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 220;

function Sidebar() {

    const location = useLocation();

    const menuItems = [
        {
            text: "Dashboard",
            icon: <DashboardIcon />,
            path: "/"
        },
        {
            text: "Employees",
            icon: <PeopleIcon />,
            path: "/employees"
        },
        
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,

                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    marginTop: "64px",
                    boxSizing: "border-box"
                }
            }}
        >
            <List>

                {
                    menuItems.map((item) => (

                        <ListItem
                            key={item.text}
                            disablePadding
                        >

                            <ListItemButton
                                component={Link}
                                to={item.path}
                                selected={location.pathname === item.path}
                            >

                                <ListItemIcon>

                                    {item.icon}

                                </ListItemIcon>

                                <ListItemText
                                    primary={item.text}
                                />

                            </ListItemButton>

                        </ListItem>

                    ))
                }

            </List>
        </Drawer>
    );
}

export default Sidebar;