import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button, Collapse, makeStyles, Typography } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { processDateTime } from "../../services/time";
import CountDown from "../CountDown/CountDown";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "3vh 0 3vh 0",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  header: {
    padding: "1vh 0.5vw 1vh 1vw",
  },
  timer: {
    fontWeight: "bold",
    textShadow: "1px 1px 1px black",
  },
  subHeader: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    color: theme.palette.primary.contrastText,
  },
  favButton: {
    color: theme.palette.primary.contrastText,
  },
  actions: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  moreDetails: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  deleteButton: {
    color: theme.palette.primary.contrastText,
  },
  dropButton: {
    color: theme.palette.primary.contrastText,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  showDetail: {
    textAlign: "center",
  },
}));

export default function LaunchCard(props) {
  const [isFav, setIsFav] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { launch } = props;
  const classes = useStyles();
  const timezone = new Date()
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];

  const processedDateTime = launch ? processDateTime(launch.net) : null;
  const launchDate = processedDateTime
    ? processedDateTime.slice(0, 9)
    : "XXXX/XX/XX";
  const launchTime = processedDateTime
    ? `${processedDateTime.slice(10)} ${timezone}`
    : "XX:XX:XX";

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const addFav = () => {
    setIsFav(true);
  };
  const removeFav = () => {
    setIsFav(false);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <div className={classes.timer}>
            <CountDown launchTime={launch.net} />
          </div>
        }
        subheader={
          <div className={classes.subHeader}>
            <Typography>{launch.name}</Typography>
            <Typography>{launchDate}</Typography>
            <Typography>{launchTime}</Typography>
          </div>
        }
        action={
          isFav ? (
            <Button className={classes.favButton} onClick={removeFav}>
              <StarIcon />
            </Button>
          ) : (
            <Button className={classes.favButton} onClick={addFav}>
              <StarBorderIcon />
            </Button>
          )
        }
      />
      <CardMedia
        component="img"
        alt={launch.name}
        height="140"
        image={launch.image}
      />
      <CardActions className={classes.actions}>
        <Button>
          <Link className={classes.moreDetails} to={`/launch/${launch.id}`}>
            More Details
          </Link>
        </Button>
        {/* {
          <UserContext.Consumer>
            {(user) =>
              user ? (
                <Button className={classes.deleteButton}>
                  <DeleteIcon />
                </Button>
              ) : null
            }
          </UserContext.Consumer>
        } */}
        <Button
          className={
            (clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            }),
            classes.dropButton)
          }
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.showDetail}>
          <Typography>
            {launch.mission
              ? launch.mission.description
              : "Check back later for more info"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
