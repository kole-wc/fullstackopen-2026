const Total = ({ parts }) => {
    return (
        <b>total of {parts.reduce((totalExercises, part) => totalExercises + part.exercises, 0)} exercises</b>
    )
}


export default Total