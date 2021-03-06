import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Cast = (props) => {
  const { theData, handleSelect, handleDelete } = props;

  return (
    <ul>
      {theData.map((cast) => (
        <Box
          key={cast.id}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 250,
              height: 200,
            },
          }}
        >
          <Paper elevation={3} sx={{ minWidth: 200 }}>
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Where Everybody Knows Your Name
                </Typography>
                <Typography variant="h5" component="div">
                  {cast.character}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {cast.actor}
                </Typography>
                <Typography variant="body2">
                  {cast.role}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleSelect(cast.id)} size="small">
                  Learn More
                </Button>{" "}
                {cast.character !== "Sam Malone" ? (
                  <Button onClick={() => handleDelete(cast.id)} size="small">
                    Delete
                  </Button>
                ) : (
                  <div>
                    <p></p>
                  </div>
                )}
              </CardActions>
            </Card>
          </Paper>
        </Box>
      ))}
    </ul>
  );
};

export default Cast;
