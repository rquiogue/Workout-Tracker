import React from 'react'
import './Backdrop.css'
import { Flex } from '@chakra-ui/react'

const Backdrop = ({children}) => {
  return (
    <Flex justifyContent={'center'} className='backdrop'>
        {children}
    </Flex>
  )
}

export default Backdrop