import React, { useState } from 'react'
import { 
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    Select
} from '@chakra-ui/react'

const Exercise = (props) => {
    const {
        exerciseName,
    } = props

    const [name, setName] = useState(exerciseName);
    const nameOnChange = (e) =>  setName(e.target.value)

    const [exerciseType, setExerciseType] = useState('Weight');
    const typeOnChange = (e) => setExerciseType(e.target.value);

  return (
    <GridItem>
        <FormControl>
            <FormLabel>
                <Heading size={'md'}>
                    {name}
                </Heading>
            </FormLabel>
            <FormLabel>
                Exercise Name
            </FormLabel>
            <Input placeholder='Exercise Name' value={name} onChange={nameOnChange}/>
            <FormLabel>
                Type
            </FormLabel>
            <Select value={exerciseType} onChange={typeOnChange}>
                <option value='Weight'>Weight</option>
                <option value='Duration'>Duration</option>
            </Select>
        </FormControl>
        {exerciseType === 'Weight' ? (
            <>
                <FormControl>
                    <FormLabel>
                        Weight
                    </FormLabel>
                    <Input placeholder='Weight'/>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Sets
                    </FormLabel>
                    <Input placeholder='Sets'/>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Reps
                    </FormLabel>
                    <Input placeholder='Reps'/>
                </FormControl>
            </>
        ) : (
            <FormControl>
                <FormLabel>
                    Duration
                </FormLabel>
                <Input placeholder='Time'/>
            </FormControl>
        )}
    </GridItem>
  )
}

export default Exercise