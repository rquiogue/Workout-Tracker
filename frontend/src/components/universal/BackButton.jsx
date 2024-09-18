import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BackButton = ({link}) => {
    const navigate = useNavigate();

  return (
    <Button margin={'1rem'} colorScheme='orange' variant={'outline'} background={'white'} onClick={() => navigate(`${link}`)}
        position={'fixed'}
        left={'0rem'}
        >
        <ArrowBackIcon/>
        Back
    </Button>
  )
}

export default BackButton