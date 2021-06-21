import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import App from './App';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);