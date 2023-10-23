//header
var swiper = new Swiper("#swiper", {
  // Konfigurasi Swiper lainnya
  navigation: {
    nextEl: "#nextSlideButton", // Gunakan ID dari elemen ikon "Next"
    prevEl: "#prevSlideButton", // Gunakan ID dari elemen ikon "Previous"
  },
  on: {
    slideChangeTransitionStart: function () {
      // Mengatur visibilitas ikon navigasi berdasarkan slide aktif
      if (swiper.isBeginning) {
        document.getElementById("prevSlideButton").style.display = "none"; // Sembunyikan ikon "Previous" pada slide pertama
      } else {
        document.getElementById("prevSlideButton").style.display = "block"; // Tampilkan ikon "Previous" pada slide selain pertama
      }
      if (swiper.isEnd) {
        document.getElementById("nextSlideButton").style.display = "none"; // Sembunyikan ikon "Next" pada slide terakhir
      } else {
        document.getElementById("nextSlideButton").style.display = "block"; // Tampilkan ikon "Next" pada slide selain terakhir
      }
    },
  },
});

//name transisi
// JavaScript untuk efek pengetikan
const text = "Octavia Simorangkir"; // Teks yang akan ditampilkan
const delay = 100; // Delay antara setiap huruf (ms)
const typedName = document.getElementById("typed-name");

function typeText(i) {
  if (i <= text.length) {
    typedName.innerHTML = text.substring(0, i);
    setTimeout(function () {
      typeText(i + 1);
    }, delay);
  } else {
    // Mulai efek pengetikan lagi setelah selesai
    setTimeout(function () {
      typedName.innerHTML = "";
      typeText(0);
    }, 1000); // Menunggu 1 detik sebelum memulai ulang
  }
}

// Memanggil fungsi untuk memulai efek pengetikan
typeText(0);

typeText(0);
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

//experience
// Function to open the modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Add a click event listener to each experience icon
const experienceIcons = document.querySelectorAll(".experience-icon");
experienceIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const modalId = e.currentTarget.getAttribute("data-modal-target");
    openModal(modalId);
  });
});

// Add a click event listener to each close button in the modals
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modalId = e.currentTarget.parentElement.parentElement.id;
    closeModal(modalId);
  });
});

// Close the modal when the user clicks anywhere outside the modal content
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    const modalId = event.target.id;
    closeModal(modalId);
  }
});

//More button portfolio
document.getElementById("moreButton").addEventListener("click", function () {
  // Membuka "portfolios.html" di laman baru dengan target "_blank"
  window.open("portfolios.html", "_blank");

  // Setelah membuka jendela baru, tidak perlu lagi menampilkan konten ke dalam div
});

//licensies
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  initialSlide: 2,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Mengambil elemen formulir
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  // Mencegah pengiriman formulir jika validasi gagal
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add("was-validated");
});
