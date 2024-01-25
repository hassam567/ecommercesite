
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SingleProductDetail from './Components/SingleProductDetail';
import AppToolbar from "./Components/AppToolBar"
import BasicMenu from './Components/Menu';

import React from 'react';
import Grid from '@mui/material/Grid';


import { Divider } from '@mui/material';


import './styles/Grid.css'

import Hidden from '@mui/material/Hidden';


import Layout from './Components/layout';
const AppWrapper = ({ children }) => (
  <>
      <AppToolbar backgroundColor="#2B3445" textColor="white" height="45px" text="Free Express Shipping" />

<Hidden smDown>
    <Grid container spacing={2} justifyContent="flex-end" className='customGrid'>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Home" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Mega Menu" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Full Screen Menu" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Pages" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="User Account" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Vendor Account" />
        </Grid>
    </Grid>
</Hidden>

{/* Display for screen sizes 200 or less */}
<Hidden smUp>
    <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Home" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Mega Menu" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Full Screen Menu" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Pages" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="User Account" />
        </Grid>
        <Grid item>
            <BasicMenu textColor="black" menuOptions={['Option 1', 'Option 2']} buttonText="Vendor Account" />
        </Grid>
    </Grid>
</Hidden>

  <Divider />
    {children}
  </>
);
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
  
  <Router>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/product/:productId" element={<SingleProductDetail />} />
          </Routes>
        </AppWrapper>
      </Router>

    </QueryClientProvider>
  );
}

export default App;
