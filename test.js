const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://restcountries-v1.p.rapidapi.com/all");
xhr.setRequestHeader("x-rapidapi-key", "7729987a28msh7e4c5c175d516d0p111a14jsn850b3afc91cd");
xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");

xhr.send(data);