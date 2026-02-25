import React, { useState } from 'react'
import Modal from './Modal'
import { exerciseDescriptions } from "../utils/index" // descriptions lookup

function WorkoutCard(props) {

  const {trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete} = props

  const {warmup = [], workout = []} = trainingPlan || {}

  const [showExerciseDescription, setShowExerciseDescription] = useState(null);
  const [weights, setWeights] = useState(savedWeights || {})
  const handleCloseModal = () => setShowExerciseDescription(null);

  function handleAddWeight(title, weight){
    const newObj ={
      ...weights,
      [title]: weight
    }
    setWeights(newObj)
  }

  // temporary placeholder; rename or replace with real data when available
  //const showExerciseDescription = { name: 'asdas', description: 'asdsa' }

  return (
    <div className='workout-container'>
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={handleCloseModal}
        />
      )}


      <div className='workout-card card'>
        <div className='plan-card-header'>
          <p>Day {dayNum}</p>
          {icon}
        </div>
      </div>
      <div className='plan-card-header'>
        <h2><b>{type}Workout</b></h2>
      </div>


      <div className='workout-grid'>
        <div className='exercise-name'>
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className='weight-input'>Max weight</h6>
        {warmup.map((warmupExercise, warmupIndex) => (
            <React.Fragment key={warmupIndex}>
              <div className='exercise-name'>
                <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                <button
                  onClick={() => {
                    setShowExerciseDescription({
                      name: warmupExercise.name,
                      description: exerciseDescriptions[warmupExercise.name] || ''
                    })
                  }}
                  className='help-icon'
                >
                  <i className='fa-regular fa-circle-question'></i>
                </button>
              </div>
              <p className='exercise-info'>{warmupExercise.sets}</p>
              <p className='exercise-info'>{warmupExercise.reps}</p>
              <input className='weight-input' placeholder='N/A' disabled />
            </React.Fragment>
        ))}
      </div>

      <div className='workout-grid'>
        <div className='exercise-name'>
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className='weight-input'>Max weight</h6>
        {workout.map((workoutExercise, wIndex) => (
            <React.Fragment key={wIndex}>
              <div className='exercise-name'>
                <p>{wIndex + 1}. {workoutExercise.name}</p>
                <button
                  onClick={() => {
                    setShowExerciseDescription({
                      name: workoutExercise.name,
                      description: exerciseDescriptions[workoutExercise.name] || ''
                    })
                  }}
                  className='help-icon'
                >
                  <i className='fa-regular fa-circle-question'></i>
                </button>
              </div>
              <p className='exercise-info'>{workoutExercise.sets}</p>
              <p className='exercise-info'>{workoutExercise.reps}</p>
              <input value={weights[workoutExercise.name] || ''} onChange={(e) => handleAddWeight(workoutExercise.name, e.target.value)} className='weight-input' placeholder='14' />
            </React.Fragment>
        ))}
      </div>

      <div className='workout-buttons'>
        <button
          type="button"
          onClick={() => handleSave && handleSave(workoutIndex, {weights})}
        >
          Save & Exit
        </button>
        <button
          type="button"
          onClick={() => handleComplete && handleComplete(workoutIndex, {weights})}
          disabled={true}
        >
          Complete
        </button>
      </div>
    </div>
  )
}

export default WorkoutCard
