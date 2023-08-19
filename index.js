import { data } from "./data.js"

const avgScoreEl = document.getElementById("avg-score")
const resultsEl = document.getElementById("results")

const avgScore = Math.round((data[0].score + data[1].score + data[2].score + data[3].score) / 4)

avgScoreEl.innerText = avgScore

const resultsHtml = data.map(category => {
  return `
    <div class="flex-row result" id=${category.category.toLowerCase()}>
        <div class="flex-row">
          <img src=${category.icon} alt="lightning bolt icon" class="result-icon">
          <p>${category.category}</p>
        </div>
        <p><span id="reaction-score">${category.score}</span><span class="denominator"> / 100</span></p>
      </div>
  `
})

resultsEl.innerHTML = resultsHtml.join(' ')
