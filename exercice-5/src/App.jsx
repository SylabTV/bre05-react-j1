import './App.css'
import Student from './Student'

// Tableau des étudiants
const students = ["Alan", "Alice", "Bernard", "Sophie"]

// Tableau des notes correspondantes
const notes = [
  [12, 11, 10],   // Alan
  [18, 10, 19],   // Alice
  [10, 9, 11],    // Bernard
  [11, 17, 19]    // Sophie
]

function App() {
  return (
    <section>
      <h2>Étudiant-e-s</h2>
      <ul>
        <li>
          <Student name={students[0]} notes={notes[0]} />
        </li>
        <li>
          <Student name={students[1]} notes={notes[1]} />
        </li>
        <li>
          <Student name={students[2]} notes={notes[2]} />
        </li>
        <li>
          <Student name={students[3]} notes={notes[3]} />
        </li>
      </ul>
    </section>
  )
}

export default App
