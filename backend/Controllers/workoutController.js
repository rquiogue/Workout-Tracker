export const getAllWorkouts =  function(req, res){
    res.send('Get all workouts');
};

export const getWorkoutbyID = function(req, res){
    res.send(`Get workout: ${req.params.workoutID}`);
};

export const createWorkout = function(req, res){
    res.send('Creating workout');
};

export const updateWorkout = function(req, res){
    res.send(`Edit workout: ${req.params.workoutID}`);
};

export const deleteWorkout = function(req, res){
    res.send(`Delete workout: ${req.params.workoutID}`);
};