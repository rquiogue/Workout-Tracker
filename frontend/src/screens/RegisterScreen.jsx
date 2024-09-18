import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import Backdrop from '../components/universal/Backdrop'
import { Center } from '@chakra-ui/react'
import BackButton from '../components/universal/BackButton'

const RegisterScreen = () => {
  return (
    <Backdrop>
        <BackButton link={'/'}/>
        <Center>
            <SignUp signInUrl={'/login'}/>
        </Center>
    </Backdrop>
  )
}

export default RegisterScreen