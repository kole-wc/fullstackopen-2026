import Part from './Part'
import Total from './Total'

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <div>
                {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
            </div>
            <Total parts={course.parts} />
        </div>
    )
}

export default Course