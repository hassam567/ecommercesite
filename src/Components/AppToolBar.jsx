import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';


function AppToolbar({ backgroundColor, textColor, height, text }) {
  const theme = useTheme();

  const toolbarStyle = {
    minHeight: height || '80px',
    backgroundColor: backgroundColor,
    color: textColor || '#FFFFFF',
   
      
   
   
  };

  return (
    <Toolbar style={toolbarStyle} >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '9px', sm: '14px' },
        }}
      >
        <Chip
          label="HOT"
          sx={{
            marginBottom: { xs: '8px', sm: '0px' },
            marginRight: { xs: '8px', sm: '10px' },
            backgroundColor: '#D23F57',
            color: 'white',
            height: { xs: '15px', sm: '20px' },
          }}
        />
        <Typography variant="h8" component="div" sx={{ fontSize: { xs: '8px', sm: '16px' } }}>
          {text}
        </Typography>
      </Box>
    </Toolbar>
  );
}

export default AppToolbar;
