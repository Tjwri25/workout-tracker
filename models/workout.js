const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            
          },
          name: {
            type: String,
            trim: true,
            
          },
          duration: {
            type: Number,
            
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },

  );
  
  // adds a dynamically-created property to schema
  workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;