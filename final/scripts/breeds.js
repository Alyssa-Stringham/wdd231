const breeds = [
    {
        "name": "Akhal-Teke",
        "info": [
            "Subcategory: Light",
            "Origin: Turkmenistan",
            "US Registry: Akhal-Teke Association of America"
        ],
        "stats": [
            "Height: 14.2-16 hh",
            "Weight: 900-1100 lbs"
        ],
        "img": "images/akhal-teke.webp",
        "type": "Light"
    },
    {
        "name": "American Paint Horse",
        "info": [
            "Subcategory: Stock",
            "Origin: United States",
            "US Registry: American Paint Horse Association"
        ],
        "stats": [
            "Height: 14.2-16 hh",
            "Weight: 950-1200 lbs"
        ],
        "img": "images/paint-horse.webp",
        "type": "Stock"
    },
    {
        "name": "American Quarter Horse",
        "info": [
            "Subcategory: Stock",
            "Origin: United States",
            "US Registry: American Quarter Horse Association"
        ],
        "stats": [
            "Height: 14.3-16 hh",
            "Weight: 950-1200 lbs"
        ],
        "img": "images/quarter-horse.webp",
        "type": "Stock"
    },
    {
        "name": "Andalusian",
        "info": [
            "Subcategory: Light",
            "Origin: Iberian Peninsula, Spain",
            "US Registry: International Andalusian & Lusitano Horse Association"
        ],
        "stats": [
            "Height: 15-16.2",
            "Weight: 900-1100 lbs"
        ],
        "img": "images/andalusian.webp",
        "type": "Light"
    },
    {
        "name": "Appaloosa",
        "info": [
            "Subcategory: Stock",
            "Origin: Western United States",
            "US Registry: Appaloosa Horse Club"
        ],
        "stats": [
            "Height: 14.2-16",
            "Weight: 950-1250 lbs"
        ],
        "img": "images/appaloosa.webp",
        "type": "Stock"
    },
    {
        "name": "Arabian",
        "info": [
            "Subcategory: Light",
            "Origin: Arabian Peninsula",
            "US Registry: Arabian Horse Association"
        ],
        "stats": [
            "Height: 14.1-15.1 hh",
            "Weight: 800-1000 lbs"
        ],
        "img": "images/arabian.webp",
        "type": "Light"
    },
    {
        "name": "Belgian Draft",
        "info": [
            "Subcategory: Draft",
            "Origin: Belgium",
            "US Registry: Belgian Draft Horse Corporation of America"
        ],
        "stats": [
            "Height: 16-18 hh",
            "Weight: 1500-2200 lbs"
        ],
        "img": "images/belgian.webp",
        "type": "Draft"
    },
    {
        "name": "Clydesdale",
        "info": [
            "Subcategory: Draft",
            "Origin: Scotland",
            "US Registry: Clydesdale Breeders of the U.S.A."
        ],
        "stats": [
            "Height: 16-18 hh",
            "Weight: 1600-2400 lbs"
        ],
        "img": "images/clydesdale.webp",
        "type": "Draft"
    },
    {
        "name": "Dutch Warmblood",
        "info": [
            "Subcategory: Warmblood",
            "Origin: Netherlands",
            "Official Registry: Koninklijk Warmbloed Paardenstamboek Nederland (KWPN)"
        ],
        "stats": [
            "Height: 15.2-17 hh",
            "Weight: 1200-1500 lbs"
        ],
        "img": "images/dutch-warmblood.webp",
        "type": "Warmblood"
    },
    {
        "name": "Friesian",
        "info": [
            "Subcategory: Light Draft",
            "Origin: Netherlands",
            "US Registry: Friesian Horse Association of North America"
        ],
        "stats": [
            "Height: 15-17",
            "Weight: 1200-1600 lbs"
        ],
        "img": "images/friesian.webp",
        "type": "Draft"
    },
    {
        "name": "Haflinger",
        "info": [
            "Subcategory: Pony",
            "Origin: Austria/ Italy",
            "US Registry: American Haflinger Registry"
        ],
        "stats": [
            "Height: 13.2-15 hh",
            "Weight: 800-1300 lbs"
        ],
        "img": "images/haflinger.webp",
        "type": "Pony"
    },
    {
        "name": "Hanoverian",
        "info": [
            "Subcategory: Warmblood",
            "Origin: Germany",
            "US Registry: American Hanoverian Society"
        ],
        "stats": [
            "Height: 15.3-17.2 hh",
            "Weight: 1200-1500 lbs"
        ],
        "img": "images/hanoverian.webp",
        "type": "Warmblood"
    },
    {
        "name": "Irish Draught",
        "info": [
            "Subcategory: Draft",
            "Origin: Ireland",
            "US Registry: Irish Draught Horse Society of North America"
        ],
        "stats": [
            "Height: 15.1-16.3 hh",
            "Weight: 1300-1500 lbs"
        ],
        "img": "images/irish-draught.webp",
        "type": "Draft"
    },
    {
        "name": "Lipizzan",
        "info": [
            "Subcategory: Light",
            "Origin: Austria",
            "US Registry: United States Lipizzan Federation"
        ],
        "stats": [
            "Height: 14.2-16.1 hh",
            "Weight: 950-1300 lbs"
        ],
        "img": "images/lipizzan.webp",
        "type": "Light"
    },
    {
        "name": "Miniature Horse",
        "info": [
            "Subcategory: Miniature",
            "Origin: CHECK",
            "US Registry: American Miniature Horse Association"
        ],
        "stats": [
            "Height: up to 8.5 hh",
            "Weight: 150-350 lbs"
        ],
        "img": "images/miniature-horse.webp",
        "type": "Miniature"
    },
    {
        "name": "Morgan",
        "info": [
            "Subcategory: Light",
            "Origin: Vermont, United States",
            "US Registry: American Morgan Horse Association"
        ],
        "stats": [
            "Height: 14.1-15.2",
            "Weight: 900-1100 lbs"
        ],
        "img": "images/morgan.webp",
        "type": "Light"
    },
    {
        "name": "Mustang",
        "info": [
            "Subcategory: Light",
            "Origin: United States",
            "US Registry: North American Mustang Association and Registry"
        ],
        "stats": [
            "Height: 13-15 hh",
            "Weight: 700-1000 lbs"
        ],
        "img": "images/mustang.webp",
        "type": "Light"
    },
    {
        "name": "Percheron",
        "info": [
            "Subcategory: Draft",
            "Origin: France",
            "US Registry: Percheron Horse Association of America"
        ],
        "stats": [
            "Height: 15-19 hh",
            "Weight: 1100-2600 lbs"
        ],
        "img": "images/percheron.webp",
        "type": "Draft"
    },
    {
        "name": "Shetland Pony",
        "info": [
            "Subcategory: Pony",
            "Origin: Scotland",
            "US Registry: American Shetland Pony Club"
        ],
        "stats": [
            "Height: up to 10.5 hh",
            "Weight: 250-450 lbs"
        ],
        "img": "images/shetland-pony.webp",
        "type": "Pony"
    },
    {
        "name": "Shire",
        "info": [
            "Subcategory: Draft",
            "Origin: England",
            "US Registry: American Shire Horse Association"
        ],
        "stats": [
            "Height: 16-19 hh",
            "Weight: 1800-2400 lbs"
        ],
        "img": "images/shire.webp",
        "type": "Draft"
    },
    {
        "name": "Standardbred",
        "info": [
            "Subcategory: Light",
            "Origin: United States",
            "US Registry: U.S. Trotting Association"
        ],
        "stats": [
            "Height: 14-17 hh",
            "Weight: 800-1000 lbs"
        ],
        "img": "images/standardbred.webp",
        "type": "Light"
    },
    {
        "name": "Tennessee Walking Horse",
        "info": [
            "Subcategory: Light",
            "Origin: Tennessee, United States",
            "US Registry: Tennessee Walking Horse Breeders' and Exhibitors' Association"
        ],
        "stats": [
            "Height: 14.3-17 hh",
            "Weight: 900-1200 lbs"
        ],
        "img": "images/tennessee-walking.webp",
        "type": "Light"
    },
    {
        "name": "Thoroughbred",
        "img": "images/thoroughbred.webp",
        "info": [
            "Subcategory: Light",
            "Origin: England",
            "US Registry: The Jockey Club"
        ],
        "stats": [
            "Height: 15.2-17",
            "Weight: 900-1200 lbs"
        ],
        "type": "Light"
    },
    {
        "name": "Welsh Pony",
        "info": [
            "Subcategory: Pony",
            "Origin: Wales",
            "US Registry: Welsh Pony & Cob Society of America"
        ],
        "stats": [
            "Height: 11.2-15 hh",
            "Weight: 400-1100 lbs"
        ],
        "img": "images/welsh-pony.webp",
        "type": "Pony"
    }
]
const breedCards = document.querySelector('#breedsList');

const showBreeds = document.querySelector('#breedList');
const breedDialog = document.querySelector('#breedDialog');
const dialogTitle = document.querySelector('#dialogHead');
const closeDialog = document.querySelector('#closeDialog');
const breedStats = document.querySelector('#breedStats');
const breedInfo = document.querySelector('#breedInfo');

closeDialog.addEventListener("click", () => breedDialog.close());

createBreedCard(breeds);

const allBreeds = document.querySelector("#allBreeds");
allBreeds.addEventListener("click", () => {
    createBreedCard(breeds);
});

const lightBreeds = document.querySelector('#light');
lightBreeds.addEventListener("click", () => {
    createBreedCard(breeds.filter(breed => breed.type == "Light"));
});

const stockBreeds = document.querySelector('#stock');
stockBreeds.addEventListener("click", () => {
    createBreedCard(breeds.filter(breed => breed.type == "Stock"));
});

const draftBreeds = document.querySelector('#draft');
draftBreeds.addEventListener("click", () => {
    createBreedCard(breeds.filter(breed => breed.type == "Draft"));
});

const ponyBreeds = document.querySelector('#pony');
ponyBreeds.addEventListener("click", () => {
    createBreedCard(breeds.filter(breed => breed.type == "Pony" || breed.type == "Miniature"));
});

const warmbloodBreeds = document.querySelector('#warmblood');
warmbloodBreeds.addEventListener("click", () => {
    createBreedCard(breeds.filter(breed => breed.type == "Warmblood"));
});


function createBreedCard(filteredBreeds) {
    document.querySelector('.breedList').innerHTML = "";
    console.log(filteredBreeds);
    filteredBreeds.forEach(breed => {
        let card = document.createElement('section');
        let breedName = document.createElement('h3');
        let breedFig = document.createElement('figure');
        let breedImg = document.createElement('img');

        breedName.textContent = breed.name;
        breedImg.setAttribute('src', breed.img);

        breedFig.appendChild(breedImg);
        card.setAttribute('type', breed.type);

        breedFig.addEventListener('click', () => displayBreedInfo(breed));
        card.appendChild(breedName);
        card.appendChild(breedFig);

        card.addEventListener('click', () => displayBreedInfo(breed));
        showBreeds.appendChild(card);
        document.querySelector('.breedList').appendChild(card);
    });
}

function displayBreedInfo(breed) {
    breedDialog.showModal();
    dialogTitle.innerHTML = `${breed.name}`;

    breedInfo.innerHTML = ``;
    breedStats.innerHTML = ``;
    breed.info.forEach(data => {
        let breedData = document.createElement('li');
        breedData.innerHTML = data;
        breedInfo.appendChild(breedData);
    })
    breed.stats.forEach(stat => {
        let breedStat = document.createElement('li');
        breedStat.innerHTML = stat;
        breedStats.appendChild(breedStat);
    });
    breedImg.setAttribute('src', breed.img);
    breedImg.setAttribute('loading', 'lazy');
    breedImg.setAttribute('alt' `${breed.name}`);
}
