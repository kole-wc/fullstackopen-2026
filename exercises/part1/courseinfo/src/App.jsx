const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(({ id, name, exercises }) => (
        <Part key={id} name={name} exercises={exercises}/>
      ))}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const totalExercises = course.parts.reduce((exercisesCount, current) => exercisesCount + current.exercises, 0)


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App