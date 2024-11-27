import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import Copyright from "./Copyright";
import ButtonUsage from "./components/ButtonUsage";
import ZeroWidthStack from "./components/ZeroWidthStack";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example
        </Typography>
        <ButtonUsage />
        <ZeroWidthStack />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
