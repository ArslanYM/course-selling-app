import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
export const CourseCard = (props) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={props.course.id}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {props.course.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.course.description}
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
              {props.course.price}
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary" fullWidth>
            Buy Now
          </Button>
        </Card>
      </Grid>
    </>
  );
};