async function start() {
    try {    
        const ans = await fetch("https://swapi.dev/api/films");
        console.log(`Status code: ${ans.status}`);
        const films = (await ans.json()).results;
        films.sort((a,b) => a.episode_id - b.episode_id);
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        for (let i = 0; i < films.length; i++) {
            const temp = document.createElement('li');
            temp.textContent = films[i].title;
            temp.addEventListener('click', e => {
                window.location.href = "./dop.html";
                const data = {url: films[i].url};
                localStorage.setItem("data", JSON.stringify(data));
            })
            ul.appendChild(temp);
        }
    } catch (error) {
        console.log(error);
    }
    
}
document.addEventListener('DOMContentLoaded', start);