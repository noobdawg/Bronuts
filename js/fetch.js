// FETCH DATA
const getbroBtnElement = document.getElementById("getBro");

getbroBtnElement.addEventListener("click", getBro);

function getBro() {
	fetch('./about.txt')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
			data.forEach(function (bro) {
				output += `
              <h2 class="txt1">Starten</h2>
              <p class="txt11">${bro.text1}</p>
              <h2 class="txt1">Instagram Følgere</h2>
              <p class="txt11">${bro.text2}</p>
            `;
			})
			document.getElementById('output').innerHTML = output;
		})
}