import React, { useEffect, useState } from 'react'
import { 
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    IconButton,
    Input,
    Select
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';

const Exercise = (props) => {
    const {
        exercise,
        handleChange,
        deleteExercise
    } = props

    // Sets up the exercise and allows the inputs to change it
    const [currentExercise, setCurrentExercise] = useState(exercise);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setCurrentExercise((prev) => {
            return {...prev, [name]: value}
        })
    }

    // Everytime the current exercise is changed we want to update the array in the parent component
    useEffect(() => {
        handleChange(exercise.id, currentExercise)
    }, [currentExercise]);

    

  return (
    <GridItem>
            <Flex flexDirection={'row'} justifyContent={'end'} alignItems={'end'}>
                <IconButton colorScheme='red' icon={<DeleteIcon/>} onClick={deleteExercise}/>
            </Flex>
        <FormControl>
                <FormLabel>
                    Exercise Name
                </FormLabel>
            <Input placeholder='Exercise Name' name='exerciseName' value={currentExercise.exerciseName} onChange={handleInputChange}/>
            <FormLabel>
                Type
            </FormLabel>
            <Select name='type' value={currentExercise.type} onChange={handleInputChange}>
                <option value='Weight'>Weight</option>
                <option value='Duration'>Duration</option>
            </Select>
        </FormControl>
        {exercise.type === 'Weight' ? (
            <>
                <FormControl>
                    <FormLabel>
                        Weight
                    </FormLabel>
                    <Input placeholder='Weight' name='weight' value={currentExercise.weight} onChange={handleInputChange}/>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Sets
                    </FormLabel>
                    <Input placeholder='Sets' name='sets' value={currentExercise.sets} onChange={handleInputChange}/>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Reps
                    </FormLabel>
                    <Input placeholder='Reps' name='reps' value={currentExercise.reps} onChange={handleInputChange}/>
                </FormControl>
            </>
        ) : (
            <FormControl>
                <FormLabel>
                    Duration
                </FormLabel>
                <Input placeholder='Time' name='duration' value={currentExercise.duration} onChange={handleInputChange}/>
            </FormControl>
        )}
    </GridItem>
  )
}

export default Exercise