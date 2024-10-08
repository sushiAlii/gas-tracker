import { useState } from "react";
import "./App.css";
import { Button, Container, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Hi! Gas Tracker App!
      </Typography>

      <Button
        onClick={() => setCount(count + 1)}
        variant="contained"
        color="primary"
      >
        {`Click me! ${count}`}
      </Button>
    </Container>
  );
}

export default App;
