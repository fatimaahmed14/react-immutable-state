import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
  
    const newWorkout = generateWorkout()

    const newWorkouts = [...workouts ]
    newWorkouts.push(newWorkout)
    setWorkouts(newWorkouts)
    console.log("addNewWorkout:", newWorkout)
  }

  const deleteWorkout = (deletedWorkout) => {
    const deleteWorkoutArray = workouts.filter((workout) => {
      if(deletedWorkout !== workout) return true
      else return false 
    })
    setWorkouts(deleteWorkoutArray)
    console.log("deleteWorkout:", deletedWorkout)
  }

  const completeWorkout = (completedWorkout) => {
  const completedWorkoutMap = workouts.map((workout) => {
  if(workout === completedWorkout) {
    const workoutCopy = {...workout}
    workoutCopy.done = !workoutCopy.done
    return workoutCopy
  } else {
    return workout
  }
  
  })
  setWorkouts(completedWorkoutMap)
 console.log("completeWorkout:", completedWorkout)
}

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done && 
              <button onClick={e=>completeWorkout(workout)}>Done</button>}
            {workout.done && 
             <p>✅</p>}
            <button onClick={e=>deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
