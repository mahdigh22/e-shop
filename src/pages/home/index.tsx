import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function Index() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Box
          sx={{
            borderRight: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",p:2
          }}
        >
          dddd
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ width: "100%",p:2 }}>
          <Carousel indicators={false}>
            {images.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Box>
      </Grid>
    </Grid>
  );
  function Item(props: any) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "400px",
        }}
      >
        <img
          // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={props.item.imgPath}
          alt={props.item.label}
          loading="lazy"
          width={"100%"}
          height={"250px"}
        />
        <h2>{props.item.label}</h2>
        <p>{props.item.description}</p>

        <Button>Check it out!</Button>
      </Box>
    );
  }
}
