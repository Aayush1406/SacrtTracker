import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Details = ({ data }) => {
  return (
    <div>
      {data.map((bus) => {
        return (
          <Card sx={{ marginBottom: "10px" }}>
            <CardContent>
              <div>
                <span>
                  <strong>Route: </strong>
                  {bus.route} {`(${bus.tripheads})`}
                </span>{" "}
              </div>
              <div>
                <span>
                  <strong>Arrival Time: </strong>
                  {bus.arrivaltime}
                </span>
              </div>
              <div>
                <span>
                  <strong>Stop Name: </strong>
                  {bus.stopname}
                </span>
              </div>
            </CardContent>
            {/* <CardActions>
      <Button size="small">More</Button>
    </CardActions> */}
          </Card>
        );
      })}
    </div>
  );
};

export default Details;
