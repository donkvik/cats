const createCard = (data, parent, arr) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", data.id);
    //card.data.id = data.id;
    
    const age = document.createElement("div");
    age.className = "age";
    age.innerText = data.age || "unknown";
    
    const rate = document.createElement("div");
    rate.className = "rate";
    rate.innerHTML = "<span>🌟</span><span>🌟</span><span>🌟</span><span>🌟</span><span>🌟</span>"
   
    const pic = document.createElement("div");
    pic.className = "pic";
    pic.style.backgroundImage = `url(${data.img_link || "https://i.pinimg.com/736x/b9/57/05/b95705525bb0802667a59d2e068caee8.jpg"})`;
    
    const name = document.createElement("div");
    name.className = "name";
    name.innerText = data.name;
   
    card.append(pic, age, rate, name);
    card.addEventListener("click", function() {
        showPopup(arr, "card");
    });

    parent.append(card);
}

const showPopup = (list, type, content) => {
    let el = list.filter(el => el.dataset.type === type)[0];
    // switch (type) {
    //     case "card": 
    //     case "info":
    //     case "form":
    // }
    el.classList.add("active");
    el.parentElement.classList.add("active");
}