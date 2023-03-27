import { useEffect } from "react"
import axios from 'axios';
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
// Components

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

    const url = 'http://localhost:4000/api/workouts';
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get(url)
                if (response.status === 200) {
                    dispatch({ type: 'SET_WORKOUTS', payload: response.data })
                }
            } catch (error) {
                console.error("Database Error please add a database or check your database connection..", error);
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}
export default Home