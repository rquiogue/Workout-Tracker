import React from 'react'
import { 
    Flex,
    Spacer,
    Heading,
    Button,
    InputGroup,
    Input,
    InputLeftElement,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom' 
import Gap from './Gap'

const NavBarWorkoutScreens = () => {
    const bg = 'white';
    const color = 'orange.500'



  return (
    <>
        <Flex w='100%'
            h='5rem' 
            borderBottom={'2px solid lightgrey'}
            paddingX={'2rem'}
            top={'0'} 
            position={'fixed'} 
            alignItems='center' 
            justifyContent={'center'} 
            gap='3rem' 
            bg={bg}
            color={color}
            zIndex={1}>
            <Link to={'/'}>
                <Heading>
                    🏋️‍♂️ The Locker Room
                </Heading>
            </Link>
            <Spacer/>
            <Flex alignItems={'center'}
                justifyContent={'center'}
                gap={'3rem'}>
                <Link to={'/users'}>
                    <Heading>
                        Community
                    </Heading>
                </Link>

                <Link to={'/login'}>
                    <Button h='3.25rem' 
                        width={'8rem'}
                        bg={color}
                        color={bg}
                        fontSize='1.75rem'>
                        Log in
                    </Button>
                </Link>
            </Flex>
            
        </Flex>
        <Gap height={'5rem'}/>
    </>
  )
}

export default NavBarWorkoutScreens