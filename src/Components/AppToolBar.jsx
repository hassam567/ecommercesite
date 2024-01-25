import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function AppToolbar({ backgroundColor, textColor, height,text }) {
  const theme = useTheme();
  
  const toolbarStyle = {
    minHeight: height || '80px', // Set your desired height or use default
    backgroundColor:backgroundColor, // Use the prop value or a default color
    color: textColor || '#FFFFFF',
 
   
  };

  return (
   
<Toolbar style={toolbarStyle}>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    // flexDirection:{xs:"column", sm:"row"},
    
    fontSize:{xs:"9px",sm:"14px"},
    // marginLeft: { xs: '0px', sm: '150px' }, // Adjust margin for different screen sizes
  }}>
    <Chip
      label="HOT"
      sx={{   marginBottom: { xs: '8px', sm: '0px' }, marginRight: { xs: '8px', sm: '10px' },  backgroundColor: "#D23F57",  color: "white", height:{xs:"15px",sm:"20px"}  }} // Adjust margin for different screen sizes
    />
    <Typography variant="h8" component="div" sx={{fontSize: { xs: '8px', sm: '16px'}  }}>
      {text}
    </Typography>
  </Box>
  {/* You can add other components, buttons, icons, etc., here */}
</Toolbar>
  );
}

export default AppToolbar;
