function myFunction() {
	let x = document.getElementById("topmb1");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

const videobro = document.getElementById("Videobronuts");
videobro.muted = true;
videobro.loop = true;
videobro.autoplay = true;
