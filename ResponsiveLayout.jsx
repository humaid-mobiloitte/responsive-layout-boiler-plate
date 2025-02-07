import { Box, Container, Button, Typography, TextField, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function ResponsiveLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Navbar */}
      <Box
        sx={{
          height: "10%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 5, // Padding for navbar
          py: 2, // Vertical padding
        }}
      >
        {/* Logo */}
        <Typography variant={{ xs: "h6", md: "h5" }} color="white">
          Logo
        </Typography>

        {/* Navigation Links - Convert to dropdown on small screens */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: "auto", mr: 3 }}> 
          <Typography variant={{ xs: "body2", md: "h6" }} color="white">Home</Typography>
          <Typography variant={{ xs: "body2", md: "h6" }} color="white">About</Typography>
          <Typography variant={{ xs: "body2", md: "h6" }} color="white">Services</Typography>
          <Typography variant={{ xs: "body2", md: "h6" }} color="white">Contact</Typography>
        </Box>

        {/* Dropdown menu for small screens */}
        <IconButton sx={{ display: { xs: "flex", md: "none" } }} color="inherit" onClick={handleMenuClick}>
          ☰
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Services</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="secondary">Sign Up</Button>
          <Button variant="contained" color="secondary">Login</Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          height: "90%",
          bgcolor: "secondary.main",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Box */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "success.light",
            height: { xs: "50%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant={{ xs: "h3", md: "h1" }} gutterBottom>
            Heading
          </Typography>
          <Typography variant={{ xs: "body1", md: "h3" }} gutterBottom>
            Subheading
          </Typography>
          
          {/* Form - Switch to vertical layout on smaller screens */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, width: "100%", maxWidth: "100%", alignItems: "center" }}>
            <TextField label="Field 1" variant="outlined" fullWidth />
            <TextField label="Field 2" variant="outlined" fullWidth />
            <TextField label="Field 3" variant="outlined" fullWidth />
            <Button variant="contained" color="primary">Submit</Button>
          </Box>
        </Box>

        {/* Right Box */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "error.light",
            height: { xs: "50%", md: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Image Wrapper Box to control size and responsiveness */}
          <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
            <img src="src/assets/Superman Vs Batman.jpg" alt="insert test image" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
