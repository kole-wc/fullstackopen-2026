const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.contents[0].part} exercises={props.contents[0].exercises}/>
      <Part part={props.contents[1].part} exercises={props.contents[1].exercises}/>
      <Part part={props.contents[2].part} exercises={props.contents[2].exercises}/>

      {/* Below is alternative solution for exercise 1.2 */}
      {/* {props.contents.map(({ id, part, exercises }) => (
        <Part key={id} part={part} exercises={exercises}/>
      ))} */}

      {/* Below is solution if there is no Part component */}
      {/* {props.contents.map(({ id, part, exercises }) => (
        <p key={id}>
          {part} {exercise}
        </p>
      ))} */}
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
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const contents = [
    { id: 1, part: 'Fundamentals of React', exercises: 10 },
    { id: 2, part: 'Using props to pass data', exercises: 7 },
    { id: 3, part: 'State of a component', exercises: 14 }
  ]
  const totalExercises = contents.reduce((exerciseCount, current) => exerciseCount + current.exercises, 0)


  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App