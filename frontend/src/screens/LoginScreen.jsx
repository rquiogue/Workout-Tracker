import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import Backdrop from '../components/universal/Backdrop'
import { Center } from '@chakra-ui/react'
import BackButton from '../components/universal/BackButton'

const LoginScreen = () => {
  return (
    <Backdrop>
        <BackButton link={'/'}/>
        <Center>
            <SignIn signUpUrl={'/register'}/>
        </Center>
    </Backdrop>
  )
}

export default LoginScreen