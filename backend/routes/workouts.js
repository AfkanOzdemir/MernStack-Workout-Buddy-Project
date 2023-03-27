const express = require('express');
const router = express.Router();
const {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

// @route   GET ALL WORKOUTS api/workouts
router.get('/', getAllWorkouts);

// @route   GET A SINGLE WORKOUT api/workouts/:id
router.get('/:id', getSingleWorkout);

// @route   POST A WORKOUT api/workouts/
router.post('/', createWorkout)

// @route   DELETE A WORKOUT api/workouts/:id
router.delete('/:id', deleteWorkout);

// @route   Uodate A WORKOUT api/workouts/
router.patch('/:id', updateWorkout)

module.exports = router;