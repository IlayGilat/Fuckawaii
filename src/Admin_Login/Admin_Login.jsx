import React from 'react'
import ReactDOM from 'react-dom/client'
 import '../index.css'
 import Login from './Login'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ChakraProvider>
    <Login></Login>
    </ChakraProvider>
  </React.StrictMode>
)
