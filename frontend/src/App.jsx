import { ChakraProvider } from '@chakra-ui/react'
import Routing from './utilities/Routing'
import './app.css'


function App() {
  return (
    <ChakraProvider>
      <Routing/>
    </ChakraProvider>
  )
}

export default App
