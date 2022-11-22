import { Typography } from "@mui/material";

export default function Header({ title }) {
  return (
    <>
      <Typography variant="h3" align="center">
        {title}
      </Typography>
 
    </>
  );
}
