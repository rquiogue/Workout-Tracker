import express from 'express'
const router = express.Router();

import {
    getAllWorkouts,
    getWorkoutbyID,
    createWorkout,
    updateWorkout,
    deleteWorkout
} from '../Controllers/workoutController.js'

router.get('/', getAllWorkouts);

router.get('/:workoutID', getWorkoutbyID);

router.post('/', createWorkout);

router.put('/:workoutID', updateWorkout);

router.delete('/:workoutID', deleteWorkout);

export default router;