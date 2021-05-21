import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
//import {Box, IconButton, Link} from '@material-ui/core'
//import Icon from '@mdi/react'

//icons
//import {
  //mdiFacebook as FacebookIcon,
  //mdiTwitter as TwitterIcon,
  //mdiGithub as GithubIcon,
//} from '@mdi/js'
  // <Route path="/app/Company" component={Company} />}

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Statistics from "../../pages/Site Statistics";
 import Admin from "../../pages/Admin";
//import Notification from "../../pages/notifications";
import Maps from "../../pages/maps";
import Company from "../../pages/Company";
import Service_Provider from "../../pages/Service_Provider";
import User from "../../pages/User";
import Facture from "../../pages/Facture";
import Devis from "../../pages/Devis";
import Manage_Service from "../../pages/Manage_Service";
import MS from "../../pages/MS";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles(); 

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/Site Statistics" component={Statistics} />
              <Route path="/app/Admin" component={Admin} />
              <Route path="/app/Company" component={Company} />
              <Route path="/app/Service_Provider" component={Service_Provider} />
              <Route path="/app/User" component={User} />
             <Route path="/app/Facture" component={Facture} />
             <Route path="/app/Devis" component={Devis} />
             <Route path="/app/Manage_Service" component={Manage_Service} />

             <Route path="/app/Ms" component={MS} />

              {/*<Route path="/app/notifications" component={Notification} />*/}
              <Route 
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>   
          
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
