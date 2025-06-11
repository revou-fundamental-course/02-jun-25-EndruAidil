console.log("Script loaded");
// wellcome message 
var name = prompt("Masukkan nama Anda:");
document.getElementById("nama").innerText = name

// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// from
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // mencegah reload atau scroll

        const nama = document.getElementById('nama').value;
        const tgl = document.getElementById('tgl').value;
        const gender = document.getElementById('gender').value;
        const pesan = document.getElementById('pesan').value;

        document.getElementById('outNama').textContent = nama;
        document.getElementById('outTgl').textContent = tgl;
        document.getElementById('outGender').textContent = gender;
        document.getElementById('outPesan').textContent = pesan;
    });
});



