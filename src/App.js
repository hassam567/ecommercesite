import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/system';
import AppWrapper from './layouts/AppWrapper';
import routes from './routes/routeArray';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import AppToolbar from './Components/AppToolBar';
import BasicMenu from './Components/Menu';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import './styles/Grid.css'
import Hidden from '@mui/material/Hidden';
;
function App() {
    const queryClient = new QueryClient();

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Router>
               
                    <AppWrapper>
                        <AppToolbar  backgroundColor="#2B3445" textColor="white" height="45px" text="Free Express Shipping" />

                        <Hidden smDown >
                            <Grid container spacing={2} justifyContent="flex-end" className='customGrid'  >
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
                            <Grid container spacing={2} justifyContent="flex-end" className='customGrid' >
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

                        <Routes>
                            {routes.map((route, index) => (
                                <Route key={index} {...route} />
                            ))}
                        </Routes>
                        <Footer />
                    </AppWrapper>
                </Router>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
