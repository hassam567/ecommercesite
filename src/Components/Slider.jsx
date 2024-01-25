import React, { useState } from 'react';
import { Box, Button, Typography, Slider, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: ' 450px',
  overflow: 'hidden',
  backgroundColor: '#F6F9FC',
  width:"100%",
  [theme.breakpoints.down(250)]: {
    width: '100vw', // Set to 100% of viewport width for screens <= 250px
  },
  [theme.breakpoints.down(599)]: {
    width: '100vw', 
    height: '700px', // Set to 100% of viewport width for screens <= 250px
  },

}));

const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',

  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F6F9FC',
 
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
  marginTop:"0px"
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  marginLeft: '150px',
  marginRight: '20px',
  maxWidth: '600px',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '20px',
    textAlign: 'center',
  },
  [theme.breakpoints.down(299)]: {
    '& > *': {
      fontSize: '14px', // Adjust the font size as needed
    },
  },
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  marginRight: '250px',
  overflow:"hidden"
});
const RoundBox = styled(Box)(({ filled }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: filled ? '#0F3460' : 'transparent',
  border: '2px solid #0F3460', // Constant border size
  cursor: 'pointer',
  position: 'absolute',
  bottom: '10px',
  left: '50%', // Center the round box horizontally
  transform: 'translateX(-50%)',
  marginBottom:"25px"
}));



const SliderComponent = ({ slides,buttonText  }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCircle, setActiveCircle] = useState(1); // Track the active circle
  const [isCircle1Filled, setIsCircle1Filled] = useState(false);
  const [isCircle2Filled, setIsCircle2Filled] = useState(false);
  
  const handleRoundBoxClick = (circleNumber) => {
    // Check if the clicked circle is the active one
    if (circleNumber === activeCircle) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  
      // Fill the corresponding circle based on the active circle
      if (activeCircle === 1) {
        setIsCircle1Filled(true);
        setIsCircle2Filled(false); // Unfill the other circle
      } else {
        setIsCircle2Filled(true);
        setIsCircle1Filled(false); // Unfill the other circle
      }
  
      // Switch to the next active circle
      setActiveCircle((prevCircle) => (prevCircle % 2) + 1);
    }
  };
  
  
  

  return (
    <>
 <StyledBox>
      <SliderContainer>
        <ContentContainer>
          <Typography variant="h3" sx={{marginBottom:"20px",whiteSpace:"pre-line"}}>{slides[currentSlide].heading}</Typography>
          <Typography variant="body1" sx={{marginBottom:"20px"}}>{slides[currentSlide].paragraph}</Typography>
          <Button variant="contained" sx={{ backgroundColor: "#222222" ,width:{xs:"150px", sm:"160px"},height:"45px"}}>
            {buttonText}
          </Button>
        </ContentContainer>
        <StyledImage src={slides[currentSlide].imgSrc} alt={`Slide ${currentSlide + 1}`} />
        
        <RoundBox onClick={() => handleRoundBoxClick(1)} filled={isCircle1Filled} />
        <RoundBox onClick={() => handleRoundBoxClick(2)} filled={isCircle2Filled} sx={{ marginLeft: "20px" }} />
      </SliderContainer>
     
    </StyledBox>
    <br/>
    </>
   

  );
};

export default SliderComponent;
