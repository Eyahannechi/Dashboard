import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoBarChartSharp} from 'react-icons/io5';
import { RiAdminLine} from 'react-icons/ri';
import { RiBuilding2Line} from 'react-icons/ri';
import { BsPersonPlus} from 'react-icons/bs';
import { BsPersonCheck} from 'react-icons/bs';
import { RiUserSettingsLine } from 'react-icons/ri';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsNewspaper } from 'react-icons/bs';




// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
//import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <AiOutlineDashboard  style={{ fontSize: 27 }} /> },
  {
    id: 1,
    label: "Site Statistics",
    link: "/app/Site Statistics",
    icon: <IoBarChartSharp style={{ fontSize: 25 }}  />,
  },
  {   
    id: 1,
    label: "Admin",
    link: "/app/Admin",
    icon: <RiAdminLine style={{ fontSize: 27 }} />,
  },
  { id: 2, label: "Company", link: "/app/Company", 
  icon: <RiBuilding2Line  style={{ fontSize: 27 }} />
 },
  {
    id: 3,
    label: "Service Provider",
    link: "/app/Service_Provider",
    icon: <BsPersonCheck  style={{ fontSize: 27 }} />,
  },
  {
    id: 4,
    label: "User",
    link: "/app/User",
    icon: <BsPersonPlus  style={{ fontSize: 27 }} />,
  },
  {
    id: 5,
    label: "Facture",
    link: "/app/Facture",
    icon: <IoNewspaperOutline style={{ fontSize: 27 }} />,
  },
  {
    id: 6,
    label: "Devis",
    link: "/app/Devis",
    icon: <BsNewspaper  style={{ fontSize: 27 }} />,
  },
 
  {
    id: 6,
    label: "Service Category",
    link: "/app/MS",
    icon: <RiUserSettingsLine style={{ fontSize: 27 }} />,
  },
  {
    id: 7,
    //label: "Manage Services",
    link: "/app/ui",
    //icon:<GrUserSettings style={{ fontSize: 27 }} />,
  }
      
   // icon: </>,
    //children: [
     // { label: "Icons", link: "/app/ui/icons" },
      //{ label: "Charts", link: "/app/ui/charts" },
    //{ label: "Maps", link: "/app/ui/maps" },*/}
  
    
  
 // { id: 5, type: "divider" },
  //{ id: 6, type: "title", label: "HELP" },
  //{ id: 7, label: "Library", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  //{ id: 8, label: "Support", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  //{ id: 9, label: "FAQ", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  //{ id: 10, type: "divider" },
  //{ id: 11, type: "title", label: "PROJECTS" },
 // {
   // id: 12,
    //label: "My recent",
    //link: "",
    //icon: <Dot size="small" color="warning" />,
  //},
  //{
    //id: 13,
    //label: "Starred",
    //link: "",
    //icon: <Dot size="small" color="primary" />,
  //},
  //{
    //id: 14,
    //label: "Background",
    //link: "",
    //icon: <Dot size="small" color="secondary" />,
  //},
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
