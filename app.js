let ul = document.querySelector("ul")

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
    .then((pasuxi) => pasuxi.json())
    .then((data) => {
        console.log(data);
        data.forEach((item) => ul.innerHTML += `<li onclick="changeCategory(${item.id})">${item.name}</li>`)
    })

function showAll() {
    section.innerHTML = ""
    fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
        .then((pasuxi) => pasuxi.json())
        .then((data) => data.forEach((item) => section.innerHTML += card(item)))
        .catch(() => section.innerHTML = "<h1> კავშირის პრობლემა </h1>")
}

showAll()


function changeCategory(id) {
    section.innerHTML = ""
    fetch(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
        .then((pasuxi) => pasuxi.json())
        .then((data) => data.products.forEach((item) => section.innerHTML += card(item)))
}

function card(item) {
    return `<div class="card">
            <img src="${item.image}" alt="">
            <h4>${item.name}</h4>
            <h6>${item.price}₾</h6>
            <button onclick="addToCart(${item.id}, ${item.price})">ADD TO CART</button>
        </div>`
}


function addToCart(id, fasi) {
    let info = {
        quantity: 1,
        price: fasi,
        productId: id
    }

    fetch("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", {
        method: "POST",
        headers: {
            accept: "text/plain",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
    }).then((pasuxi) => pasuxi.json())
        .then((data) => {
           let existing = item.product.id
           if(existing){
            fetch("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: existing.id,
                    quantity: existing.quantity +1
                })
            })

           } 

        })

}