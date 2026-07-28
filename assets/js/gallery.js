const galleryGrid = document.getElementById("galleryGrid");

const photoCount = 21;

let currentPhoto = 1;

// Создание галереи
for (let i = 1; i <= photoCount; i++) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    item.innerHTML = `
        <img src="assets/img/gallery/gallery-${i}.jpg" alt="Dirty Duck Trail ${i}">
    `;

    galleryGrid.appendChild(item);

}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

const images = document.querySelectorAll(".gallery-item img");

// открыть фото
images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentPhoto = index + 1;

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

    });

});

// закрыть
closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// закрыть по фону
lightbox.addEventListener("click", (e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

// предыдущая
prevButton.addEventListener("click", ()=>{

    currentPhoto--;

    if(currentPhoto<1){

        currentPhoto=photoCount;

    }

    lightboxImage.src=`assets/img/gallery/gallery-${currentPhoto}.jpg`;

});

// следующая
nextButton.addEventListener("click", ()=>{

    currentPhoto++;

    if(currentPhoto>photoCount){

        currentPhoto=1;

    }

    lightboxImage.src=`assets/img/gallery/gallery-${currentPhoto}.jpg`;

});
// Управление клавиатурой

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

    if (e.key === "ArrowRight") {

        nextButton.click();

    }

    if (e.key === "ArrowLeft") {

        prevButton.click();

    }

});