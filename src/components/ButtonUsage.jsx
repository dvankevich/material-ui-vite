import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ButtonGroup } from "@mui/material";

export default function ButtonUsage() {
  return (
    <>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              alert("clicked");
            }}
          >
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Box>
    </>
  );
}
