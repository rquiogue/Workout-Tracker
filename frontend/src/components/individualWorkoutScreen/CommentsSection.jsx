import React from 'react'
import { Card, CardBody, CardHeader, Heading, Flex, Text, CardFooter, Input, IconButton} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
const CommentsSection = (props) => {
    const {
        comments,
        color
    } = props;

  return (
    <Card height={'100%'}>
        <CardHeader>
            <Heading size={'lg'} color={color}>
                Comments
            </Heading>
        </CardHeader>
        <CardBody overflow={'scroll'}>
            <Flex flexDirection={'column'} gap={2}>
                {comments.reverse().map((comment, index) => {
                    return (
                        <div key={index}>
                            <Heading size={'md'}>
                                {comment.username}
                            </Heading>
                            <Text>
                                {comment.text}
                            </Text>
                        </div>
                    )
                })}
            </Flex>
        </CardBody>
        <CardFooter>
            <Input placeholder='Comment' />
            <IconButton
            colorScheme='orange'
            aria-label='Search database'
            icon={<ArrowUpIcon />}
            />
        </CardFooter>
    </Card>
  )
}

export default CommentsSection