import React from 'react'
import { Box } from '@mui/material'
import BasicMenu from './Menu'
const Wrapper = () => {
  return (
  <>
    <Box sx={{position:"fixed"}}>
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
    </Box>
  </>
  )
}

export default Wrapper
