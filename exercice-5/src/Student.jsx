function Student({ name, notes }) {
  // Calculer la moyenne
  const moyenne = Math.round((notes[0] + notes[1] + notes[2]) / 3);

  return (
    <article>
      <h3>{name}</h3>
      <ul>
        <li>{notes[0]}</li>
        <li>{notes[1]}</li>
        <li>{notes[2]}</li>
      </ul>
      <p>Moyenne : {moyenne}</p>
    </article>
  )
}

export default Student
