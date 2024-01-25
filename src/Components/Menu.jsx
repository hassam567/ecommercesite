import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BasicMenu({ textColor, menuOptions, buttonText }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: textColor, display: 'flex', alignItems: 'center' }}
      >
        {buttonText}
        <KeyboardArrowDownIcon style={{ marginLeft: '5px' }} />
      </Button>
      <Popover
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(index)}
            style={{ color: textColor, fontWeight: selectedItem === index ? 'bold' : 'normal' }}
          >
            {option}
          </MenuItem>
        ))}
      </Popover>
    </div>
  );
}
