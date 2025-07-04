// script.js
document.addEventListener("DOMContentLoaded", function () {
  // 1. Load header.html ke dalam #header-container
  fetch("header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;

      // Setelah header dimuat, aktifkan tombol hamburger
      setupHamburgerToggle();
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