const btnNumber = document.getElementById("countInputs")
const btnInputs = document.getElementById("btn")
const inputs = document.getElementById("inputs")
const btncalculation = document.getElementById("calculation")
const result = document.getElementById("result")

function totalScores(scores) {
    let total = 0; 
    for(let i = 0; i < scores.length; i++ ) {
        total += scores[i];

    }
    console.log(total)
     return total;

}


btnInputs.addEventListener("click", () => {
    const count = btnNumber.value
    inputs.innerHTML = ""
    for(let i = 0; i < count ; i++) {

        

        inputs.innerHTML += `
                                <label for="score${i}">Score ${i+1}</label>
                                <input type="number" min="0" max="100" id="score${i}"><br><br>
        `

    }

    btncalculation.hidden = false

})

btncalculation.addEventListener("click", () => {
    const count = btnNumber.value 
    const scores = [] ;


    for(let i = 0; i < count; i++ ) {

        const inputsId = document.getElementById(`score${i}`)
        const score = Number( inputsId.value);
        scores.push(score);
    }

   printScores(scores)
   let totalCalCulation = totalScores(scores)

   console.log(scores)
    

   result.innerHTML = `
    <p>The students Scores ${scores}</p>
    <h3>The total of Scores: ${totalCalCulation}</h3>
   `

})

function printScores(scores) {

    console.log("Student Scores")
    for(let i = 0; i < scores.length; i++) {

        console.log(scores[i])

    }
}



