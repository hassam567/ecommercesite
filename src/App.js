import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProductDetail from './Components/SingleProductDetail';

import React, { useState } from 'react';

import Layout from './layouts/layout';

import { ThemeProvider } from '@mui/system';
import AppWrapper from './layouts/AppWrapper';
import CartComponent from './Components/CartComponent';
import CartDisplay from './Components/CartDisplay';
import Footer from './Components/Footer';
function App() {
    const queryClient = new QueryClient();
    const [postData, setPostData] = useState(null);

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <AppWrapper>
                        <Routes>
                            <Route
                                path="/"
                                element={<Layout />}
                            />
                            <Route
                                path="/product/:productId"
                                element={<SingleProductDetail />}
                            />
                       <Route path="/cart/:id" element={<CartComponent />} />


                       <Route path="/cart-display/allcart" element={<CartDisplay  />} />

                        </Routes>
                        
                    </AppWrapper>
                </Router>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
