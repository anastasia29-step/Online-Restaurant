let ul = document.querySelector("ul")
let right = document.querySelector(".rightSide")

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
    .then((pasuxi) => pasuxi.json())
    .then((data) => {
        console.log(data);
        data.forEach((item) => ul.innerHTML += `<li onclick="changeCategory(${item.id})">${item.name}</li>`)
    })

let sectionCard = document.querySelector(".sectionCard")
let left = document.querySelector(".leftSide")

fetch("https://restaurant.stepprojects.ge/api/Products/GetFiltered")
    .then(pasuxi => pasuxi.json())
    .then(data => console.log(data)
    )
fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
    .then(pasuxi => pasuxi.json())
    .then((data) => {
        data.forEach((item) => right.innerHTML += card(item))
    })

function card(item) {
    return ` <div class="card">
                <img src="${item.image}" alt="">
                <h1>${item.name}</h1>
                <p>Spiciness: ${item.spiciness}</p>
                <div class="sides">
                    <div class="checks">
                        <input type="checkbox" ${item.nuts} ? "checked" : "">
                        <p>Nuts</p>
                    </div>
                    <div class="checks">
                        <input type="checkbox">
                        <p>Vegeterian</p>
                    </div>
                </div>
                <div class="bottom">
                    <h1>$ </h1>
                    <button>Add to cart</button>
                </div>
            </div>`
}




