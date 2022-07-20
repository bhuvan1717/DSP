import React from "react";
import { Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "70px",
    height: "24px",
    padding: "0px"
  },
  switchBase: {
    color: "#00385b ",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#00385b"
      }
    }
  },
  thumb: {
    color: "white",
    width: "20px",
    height: "20px",
    margin: "1px"
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#00385b ",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px"
    },
    "&:after": {
      content: "'Admin'",
      left: "5px"
    },
    "&:before": {
      content: "'User'",
      right: "10px"
    }
  },
  checked: {
    color: "#00385b !important",
    transform: "translateX(46px) !important"
  }
});

export default function  Demo() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
