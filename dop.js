document.getElementById("back").addEventListener('click', e => {
    window.location.href = "./index.html";
})
const localData = JSON.parse(localStorage.getItem("data"))
async function start() {
    try {
        const ans = await fetch(localData.url);
        console.log(`Status code: ${ans.status}`);
        const data = await ans.json();
        document.title = data.title;
        console.log(data);

        document.querySelector(".title").textContent = data.title;
        document.querySelector(".numb").textContent = `Номер эпизода:   ${data.episode_id}`;
        document.querySelector(".opening").textContent = data.opening_crawl;
        for(let i = 0; i < data.planets.length; i++) {
            const pl = await (await fetch(data.planets[i])).json();
            const name = document.createElement('li');
            name.classList.add("li");
            name.textContent = pl.name;
            document.getElementById("planets").append(name);
        }
        for(let i = 0; i < data.species.length; i++) {
            const pl = await (await fetch(data.species[i])).json();
            const name = document.createElement('li');
            name.classList.add("li");
            name.textContent = pl.name;
            document.getElementById("species").append(name);
        }

    } catch(error) {
        console.log(error);
    }
}
document.addEventListener('DOMContentLoaded', start);
