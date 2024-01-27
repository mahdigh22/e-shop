import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        p: 1,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "85%",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          Shop Name
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Button
            sx={{
              color: "black",
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Product
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Contact
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            About
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            size="small"
            id="filled-basic"
            label="Search for products"
            InputProps={{
              sx: {
                height: "30px",
                border: "0px solid",
                borderRadius: "6px",
                backgroundColor: alpha("#DDDDDD", 0.3),
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ width: "18px", height: "18px" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputLabel-root": { top: -2, fontSize: "13px" },
              border: "0px solid",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#DDDDDD",
                },
              },
            }}
          />
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
