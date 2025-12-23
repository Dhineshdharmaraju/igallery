 var gallery = [
    { src: "Ballerina Cappuccina.jpg" },
    { src: "Bombardiro Crocodilo.jpg" },
    { src: "Bombombini Gusini.jpg" },
    { src: "Capuchino Assassino.jpg" },
    { src: "Chimpanzini Bananini.jpg" },
    { src: "Lirili Larila.jpg" },
    { src: "Brr Brr Patapim.jpg" },
    { src: "Tralalerlo Tralala.jpg" },
    { src: "Tung Tung Tung Sahur.jpg" },

];

var index = 0;
var imgElement = document.getElementById("gallery-img");

var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

function updateGallery() {
    imgElement.src = gallery[index].src;
}

nextBtn.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

prevBtn.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();