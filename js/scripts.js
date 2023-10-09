let inputan = document.querySelector(".inputan");
let output = document.querySelector(".output");
let namaKota = document.querySelector(".nama-kota");
let suhu = document.querySelector(".suhu");
let kondisi = document.querySelector(".kondisi");
let gambar = document.querySelector(".gambar");
let apiKey = "5df066624a2b37618a4e6f238f45c100";

const dataCuaca = new Set(["Clear", "Clouds", "Haze", "Snow", "Rain"]);

function getInput() {
  return inputan.value;
}

async function getWeather() {
  try {
    let location = getInput();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    console.log(data);

    const cuaca = data.weather[0].main;
    namaKota.innerHTML = data.name;
    // console.log(data.name);
    suhu.innerHTML = `${Math.floor(data.main.temp - 273)}°C`;
    kondisi.innerHTML = cuaca;

    gambar.setAttribute("src", `./img/${cuaca}.png`);
  } catch (err) {
    console.log(err);

    gambar.setAttribute("src", `./img/space1.jpg`);
    namaKota.innerHTML = "Lokasi tidak ditemukan";
    suhu.innerHTML = "Error";
    kondisi.innerHTML = "Error";
  }
}

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   let location = getInput();
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let response = JSON.parse(this.responseText);

//       if (response.cod === 200) {
//         let cuaca = response.weather[0].main;
//         namaKota.innerHTML = location;
//         suhu.innerHTML = `${Math.floor(response.main.temp - 273)}°C`;
//         kondisi.innerHTML = cuaca;

//         if (dataCuaca.has(cuaca)) {
//           gambar.src = `./img/${cuaca}.png`;
//         } else {
//           gambar.src = "./img/space1.jpg";
//         }
//         // console.log(response);
//       }
//     } else {
//       namaKota.innerHTML = "Lokasi tidak ditemukan";
//       suhu.innerHTML = "Error";
//       kondisi.innerHTML = "Error";
//     }
//   };

//   xhttp.open("GET", apiUrl);
//   xhttp.send();
// }
