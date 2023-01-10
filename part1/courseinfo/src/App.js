const Content = parts => {
  return (
    <div>
      <Part ... />
      <Part ... />
      <Part ... />
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'state of a component',
        exercises: 14
      }
    ]
  }

  return (
    // <div>
    //   <h1>{course}</h1>
    //   <p>
    //     {part1} {exercises1}
    //   </p>
    //   <p>
    //     {part2} {exercises2}
    //   </p>
    //   <p>
    //     {part3} {exercises3}
    //   </p>
    //   <p>
    //     Number of exercises {exercises1+exercises2+exercises3}
    //   </p>
    // </div>

    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App;
