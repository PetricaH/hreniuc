var modal = document.getElementById("image-modal");
var modalImage = document.getElementById("modal-image");
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

var galleryImages = document.querySelectorAll(".work-gallery img");
var currentIndex = 0;

function updateModalImage() {
    modalImage.src = galleryImages[currentIndex].src;
    modalImage.alt = galleryImages[currentIndex].alt;
}

function showModal() {
    modal.style.display = "flex"; // Display as flex to center it
    updateModalImage();
}

function closeModal() {
    modal.style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateModalImage();
}

galleryImages.forEach(function (image, index) {
    image.addEventListener("click", function () {
        currentIndex = index;
        showModal();
    });
});

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
