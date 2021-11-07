import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1636106020064-2658eb589d36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")', height: "500px", backgroundPosition: "center", backgroundRepeat :"no-repeat", backgroundSize: "cover", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: "4rem", [theme.breakpoints.down("sm")]: {height: 300, fontSize: "3em"}
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  pagination: {
    display: "flex",
    justifyContent: "center"
  }
}))

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <ToolBar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </ToolBar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?cs=srgb&dl=pexels-negative-space-160107.jpg&fm=jpg"
                title="Programming photo"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  React Hooks
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Ada Bekee
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    September 5, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Programming photo"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  React Router
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Ayo Bankole
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    December 5, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Programming photo"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  React Styled Components
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Funmi Angel
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    October 7, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Programming photo"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  React UseContext
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    John Smith
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    August 5, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.PaginationContainer}>
          <Pagination count={10}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
