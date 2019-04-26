import React, { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import withStyles from "@material-ui/core/es/styles/withStyles";
import styles from "./styles";

const App = ({ classes, lessons }) => {
  const [selectedLesson, selectLesson] = useState('elopage');

  return (
    <div className="App">
      <Sidebar
        classes={classes}
        items={lessons}
        selectLesson={selectLesson}
      />
      <Content
        classes={classes}
        selectedLesson={selectedLesson}
      />
    </div>
  )
};

export default withStyles(styles)(App);
