document.getElementById("back").addEventListener('click', e => {
    window.location.href = "./index.html";
})
const localData = JSON.parse(localStorage.getItem("data"))
async function start() {
    try {
        const ans = await fetch(localData.url);
        console.log(`Status code: ${ans.status}`);
        const data = await ans.json();
        console.log(data)
    } catch(error) {
        console.log(error);
    }
}
document.addEventListener('DOMContentLoaded', start);
