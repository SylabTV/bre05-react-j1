const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"]

function Recipe() {
  return (
    <article>
      <h2>La recette de la pâte à crèpes</h2>
      <h3>Ingrédients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
      </ul>
    </article>
  )
}

export default Recipe
