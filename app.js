let ul = document.querySelector("ul")

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
    .then((pasuxi) => pasuxi.json())
    .then((data) => {
        console.log(data);
        data.forEach((item) => ul.innerHTML += `<li onclick="changeCategory(${item.id})">${item.name}</li>`)
    })

let sectionCard = document.querySelector(".sectionCard")
let left = document.querySelector(".left")

fetch("https://restaurant.stepprojects.ge/api/Products/GetFiltered")
.then(pasuxi => pasuxi.json())
.then(data => console.log(data);
)




