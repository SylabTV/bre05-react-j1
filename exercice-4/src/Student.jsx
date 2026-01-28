// src/Student.jsx
function Student({ name, notes }) {
  return (
    <article>
      <h3>{name}</h3>
      <ul>
        <li>{notes[0]}</li>
        <li>{notes[1]}</li>
        <li>{notes[2]}</li>
      </ul>
    </article>
  )
}

export default Student
