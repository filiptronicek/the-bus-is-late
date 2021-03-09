import fetch from 'node-fetch';

const url = "https://mapa.pid.cz/getData.php";


(async function () {
    const response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        const data = await response.json();
        console.log(data);
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}());
