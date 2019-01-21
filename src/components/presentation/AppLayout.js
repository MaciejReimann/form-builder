import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Header from "./Header";
import SideDrawer from "./SideDrawer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    const { children, onSwitchClick, isOnPreview, classes } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={classes.root}>
        <Header
          isOpen={isOpen}
          onIconClick={() => this.setState({ isOpen: true })}
        />
        <SideDrawer
          isOpen={isOpen}
          onIconClick={() => this.setState({ isOpen: false })}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>

        <button onClick={onSwitchClick}>
          {isOnPreview ? "Preview" : "Edit"}
        </button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppLayout);
