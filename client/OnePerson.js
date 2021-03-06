import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import UpdateForm from "./UpdateForm";

const OnePerson = (props) => {
  const { theData, goBack, onFormChange, handleFormSubmit } = props;
  const cast = theData;

  return (
    <div>
      {" "}
      <ul>
        {
          <Box
            key={cast.id}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 200,
                height: 200,
              },
            }}
          >
            <Paper elevation={3} sx={{ minWidth: 300 }}>
              <Card sx={{ minWidth: 300 }}>
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
                    {cast.occupation}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => goBack()} size="small">
                    Go Back
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Box>
        }
      </ul>{" "}
      <p>UPDATE</p>
      <UpdateForm
        onFormChange={onFormChange}
        handleFormSubmit={handleFormSubmit}
        formId={cast.id}
      />
    </div>
  );
};

export default OnePerson;
