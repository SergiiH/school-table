import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
        gap={15}
      >
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/second" className="link">
          SecondPage
        </Link>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
