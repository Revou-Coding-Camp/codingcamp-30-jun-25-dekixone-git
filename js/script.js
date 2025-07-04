// script.js
document.addEventListener("DOMContentLoaded", function () {
  // 1. Load header.html ke dalam #header-container
  fetch("header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;

      // Setelah header dimuat, aktifkan tombol hamburger
      setupHamburgerToggle();
      // Setelah header dimuat, aktifkan tombol hamburger
      openPromoModal();

    });
  

  // Tampilkan waktu awal (jika ada elemen #currentTime)
  showCurrentTime();
});

// Fungsi toggle menu di mobile
function setupHamburgerToggle() {
  const navToggle = document.getElementById("nav-toggle");
  const navDropdown = document.getElementById("nav-dropdown");

  if (navToggle && navDropdown) {
    navToggle.addEventListener("click", function () {
      navDropdown.classList.toggle("hidden");
    });
  }
}

//  Alert banner saat akses home website

      // Fungsi buka & tutup modal
      function openPromoModal() {
        document.getElementById("promoModal").classList.remove("hidden");
      }

      function closePromoModal() {
        document.getElementById("promoModal").classList.add("hidden");
      }

      // Event klik menu Home
      document.addEventListener("DOMContentLoaded", function () {
        const homeMenu = document.getElementById("menuHome");
        if (homeMenu) {
          homeMenu.addEventListener("click", function (e) {
            e.preventDefault(); // Mencegah navigasi langsung
            openPromoModal();
          });
        }
      });

// Scroll Up 
      const scrollBtn = document.getElementById("scrollToTopBtn");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollBtn.classList.remove("hidden");
        } else {
          scrollBtn.classList.add("hidden");
        }
      });

      scrollBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });



// Tampilkan waktu sekarang (dipanggil saat DOM ready)
function showCurrentTime() {
  const timeSpan = document.getElementById("currentTime");
  if (timeSpan) {
    const now = new Date().toLocaleString();
    timeSpan.textContent = now;
  }
}



// Form Menu Message Us
document.getElementById("formInput").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;

  const tableBody = document.getElementById("tableBody");
  // Tampilkan nama di header "Hi, ..."
  const userNameSpan = document.getElementById("userName");
  if (userNameSpan) {
    userNameSpan.textContent = name;
  }

  const row = document.createElement("tr");

  row.innerHTML = `
        <td class="border px-3 py-2">${name}</td>
        <td class="border px-3 py-2">${new Date(dob).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })}</td>
        <td class="border px-3 py-2">${gender}</td>
        <td class="border px-3 py-2">${message}</td>
        <td class="border px-3 py-2 text-blue-600 underline"><a href="#">Klik Disini</a></td>
        <td class="border px-3 py-2 text-center text-red-600"><button onclick="this.closest('tr').remove()">🗑️</button></td>
      `;

      // ✅ Tampilkan SweetAlert2 setelah submit
  Swal.fire({
    icon: 'success',
    title: 'Sukses!',
    text: 'Data anda berhasil di input',
    confirmButtonColor: '#3085d6'
  });

  tableBody.appendChild(row);

  // Reset form setelah submit
  this.reset();
});



// Fungsi submit form Landing Page

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('messageText').value;

  document.getElementById('outputName').textContent = name;
  document.getElementById('outputDob').textContent = dob;
  document.getElementById('outputGender').textContent = gender;
  document.getElementById('outputMessage').textContent = message;

  // Tampilkan nama di header "Hi, ..."
  const userNameSpan = document.getElementById("userName");
  if (userNameSpan) {
    userNameSpan.textContent = name;
  }

  const now = new Date().toLocaleString();
  document.getElementById('currentTime').textContent = now;

  // ✅ Tampilkan SweetAlert2 setelah submit
  Swal.fire({
    icon: 'success',
    title: 'Sukses!',
    text: 'Data anda berhasil di input',
    confirmButtonColor: '#3085d6'
  });

  return false;
}


    
     



    
// Fireworks JS dan CSS
function randomBetween(a, b) {
        return a + Math.random() * (b - a);
      }

      function showFireworks(e, el) {
        const container = el.parentElement.querySelector(
          ".fireworks-container"
        );
        for (let i = 0; i < 15; i++) {
          const particle = document.createElement("div");
          const angle = (2 * Math.PI * i) / 15;
          const distance = randomBetween(40, 80);
          const color = `hsl(${randomBetween(0, 360)}, 80%, 50%)`;
          particle.className = "firework-particle pointer-events-none";
          particle.style.left = "50%";
          particle.style.top = "50%";
          particle.style.background = color;
          particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
          particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
          container.appendChild(particle);

          setTimeout(() => {
            particle.style.opacity = 0;
            particle.style.transform = `translate(var(--dx), var(--dy)) scale(0.6)`;
          }, 10);

          setTimeout(() => {
            particle.remove();
          }, 800);
        }
      }