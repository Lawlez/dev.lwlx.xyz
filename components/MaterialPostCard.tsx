import React from "react";
import clsx from "clsx";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Hidden,
  Divider,
  Collapse,
  CardActions,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

import { format } from "fecha";
import { PostData } from "../loader";
import { Tag } from "./Tag";

const MaterialPostCard: React.FC<{ post: PostData }> = ({ post }) => {
  const classes = useStyles();
  const [PaperElevation, setPaperElevation] = React.useState(2);
  const [expanded, setExpanded] = React.useState(false);
  const [Liked, setLiked] = React.useState({});

  const handleExpandClick = () => setExpanded(!expanded);
  const elevateUp = () => setPaperElevation(12);
  const resetEvelation = () => setPaperElevation(2);

  const sharePost = async (post) => {
    if (typeof window !== "undefined") {
      console.log("not yet implemented");
    }
  };

  const likePost = async (postId) => {
    setLiked(state =>({...state, [postId]: true}))
  };

  return (
    <Card
      className={classes.card}
      elevation={PaperElevation}
      onMouseEnter={elevateUp}
      onMouseLeave={resetEvelation}
    >
      <CardActionArea component="a" href={`/${post.path}`}>
        {post.thumbnailPhoto && (
          <CardMedia
            className={classes.cardMedia}
            image={post.thumbnailPhoto}
            title={post.title}
          />
        )}
        <CardContent>
          {post.title && <Typography variant="h6">{post.title}</Typography>}
          {post.subtitle && (
            <Typography variant="subtitle1">{post.subtitle}</Typography>
          )}
          <Divider />
          <p style={{ opacity: 0.42, textAlign: "center", margin: "0px" }}>
            published&nbsp;
            {post.datePublished
              ? format(new Date(post.datePublished), "MMMM Do, YYYY")
              : ""}
          </p>
          <div style={{ marginTop: "8px" }}>
            {post.tags &&
              (post.tags || []).map((tag, key) => <Tag key={key} tag={tag} />)}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label="add to favorites" size="small" onClick={()=> likePost(post.title)}>
          <FavoriteIcon color={Liked.[post.title] ? 'error' : 'inherit'} />
        </IconButton>
        <IconButton
          aria-label="share"
          size="small"
          onClick={() => sharePost(post)}
        >
          <ShareIcon />
        </IconButton>
        {post.description && (
          <Hidden xsDown>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              size="small"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Hidden>
        )}
      </CardActions>
      {post.description && (
        <Hidden xsDown>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="subtitle2" paragraph color="textSecondary">
                {post.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Hidden>
      )}
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 18,
    marginBottom: 8,
    height: "fit-content",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    minHeight: 160,
    maxHeight: 260,
  },
  cardActions: {
    justifyContent: "space-between",
  },
  expand: {
    alignSelf: "flex-end",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default MaterialPostCard;
