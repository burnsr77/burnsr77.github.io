const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://restcountries-v1.p.rapidapi.com/all");
xhr.setRequestHeader("x-rapidapi-key", "a2a2e9673amshe9cd17053ffdf04p1ce896jsn075e1fbe3ab4");
xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");

xhr.send(data);