import breedListInfo from '/final/scripts/breed-list.mjs';
import { createBreedCard } from './breed-list.mjs';

closeDialog.addEventListener("click", () => breedDialog.close());

createBreedCard(breedListInfo.breeds)

document.querySelector("#allBreeds").addEventListener("click", function () {
    createBreedCard(breedListInfo.breeds);
});

document.querySelector('#light').addEventListener("click", function () {
    createBreedCard(breedListInfo.breeds.filter(breed => breed.type == "Light"));
});

document.querySelector('#stock').addEventListener("click", function () {
    createBreedCard(breedListInfo.breeds.filter(breed => breed.type == "Stock"));
});
document.querySelector('#draft').addEventListener("click", function () {
    createBreedCard(breedListInfo.breeds.filter(breed => breed.type == "Draft"));
});
document.querySelector('#pony').addEventListener("click", function () {
    createBreedCard(breedListInfo.breeds.filter(breed => breed.type == "Pony" || breed.type == "Miniature"));
});

document.querySelector('#warmblood').addEventListener("click", function () {
    createBreedCard(breedListInfo.breeds.filter(breed => breed.type == "Warmblood"));
});

