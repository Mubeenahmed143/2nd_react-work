// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Button from '@mui/material/Button';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2', // blue
//     },
//     secondary: {
//       main: '#dc004e', // pink
//     },
//   },
// });

// function Material_ui() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button color="primary" variant="contained">Primary Button</Button>
//     </ThemeProvider>
//   );
// }

// export default Material_ui;


import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Material_ui() {
  return (
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      Delete
    </Button>
    
  );
}
export default Material_ui;