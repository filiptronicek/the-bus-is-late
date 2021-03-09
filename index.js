import fetch from 'node-fetch';
import fs from 'fs';

const url = "https://mapa.pid.cz/getData.php";


(async function () {
    const response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        const data = await response.json();
        const date = new Date().toISOString();
        fs.writeFile(`./data/${date}.json`, JSON.stringify(data, null, 4), { flag: 'w+' }, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}());
