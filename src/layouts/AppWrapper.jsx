import AppToolbar from "../Components/AppToolBar";
import BasicMenu from '../Components/Menu';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import '../styles/Grid.css'
import Hidden from '@mui/material/Hidden';
import CartComponent from '../Components/CartComponent';
import Footer from "../Components/Footer";
const AppWrapper = ({ children }) => (
    <>
    
        <AppToolbar backgroundColor="#2B3445" textColor="white" height="45px" text="Free Express Shipping" />

        <Hidden smDown >
            <Grid container spacing={2} justifyContent="flex-end" className='customGrid' sx={{marginTop:"20px"}}>
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
            <Grid container spacing={2} justifyContent="flex-end" sx={{marginTop:"100px"}}>
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
        <CartComponent />
      
        {children}
        <Footer /> {/* Include the Footer component here */}
       
    </>
);

export default AppWrapper;