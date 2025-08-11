import React from "react";
import { Container, Typography } from "@mui/material";
import Counter from "./Components/Counter"; // HUOM: iso C koska kansio on Components

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" gutterBottom>Counter App</Typography>
      <Counter />
    </Container>
  );
}
