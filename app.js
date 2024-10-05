const loadPhones = async (status, searchText) => {
    console.log(searchText);
    document.getElementById('spinner').style.display = "none";

    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    // .then((res) => res.json())
    // .then((data) => displayPhone(data.data.slice(0, 6))
    // )

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : 'iphone'}`);
    const data = await res.json();

    if (status) {
        displayPhone(data.data)
    }
    else {
        displayPhone(data.data.slice(0, 6))
    }
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
       const {brand, slug, image} = phone;
        const div = document.createElement('div')
        div.innerHTML = `<div class="card m-2 bg-base-100 w-96 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img
                                src=${image}
                                alt="Shoes"
                                class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">${brand}</h2>
                                <p>${slug}</p>
                                <div class="card-actions">
                                <button onclick="phoneDetail()" class="btn btn-primary">Show Details</button>
                                </div>
                            </div>
                        </div>`

        phoneContainer.appendChild(div);
    })

}


const handleSearch = () => {
    document.getElementById('spinner').style.display = "block";

    const searchText = document.getElementById('input').value;
    setTimeout(function () {
        loadPhones(false, searchText)
    }, 3000)

}
loadPhones(false, 'iphone')



const handleShowAll = () => {
    loadPhones(true)
}


const phoneDetail =(slug)=>{
  console.log(slug);
  
}