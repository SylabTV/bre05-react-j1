const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"]
const steps = [
"Faire un puits avec la farine et y verser les oeufs",
"Battre les oeufs et la farine et y incorporer doucement le lait",
"Faire fondre le beurre et l'ajouter au mélange"
];
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
      <ol>
      <li>{steps[0]}</li>
      <li>{steps[1]}</li>
      <li>{steps[2]}</li>
      </ol>
    </article>
  )
}

export default Recipe
