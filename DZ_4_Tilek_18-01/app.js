let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
let theUrl = "/json-handler";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "email": "tilekt881@gmail.com", "response": { "name": "Tilek" } }));