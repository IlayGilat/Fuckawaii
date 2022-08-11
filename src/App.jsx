import { useState } from 'react'
import {Box , Button , Flex , Input, Text} from '@chakra-ui/react'
import './index.css'
import NavBar from './Navbar'
import Mint from './Mint'

function App() {
  const [accounts,setAccounts] = useState([]);
 return (
   <div>
   <NavBar accounts={accounts} setAccounts={setAccounts}/>
   <Mint accounts={accounts} setAccounts={setAccounts}/>
   <div className='moving-background'>
     </div>
   </div>
 )
}

export default App
