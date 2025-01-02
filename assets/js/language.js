document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk memuat file JSON
  function loadLanguage(lang) {
    const url = `assets/js/lang-${lang}.json`; // Lokasi file JSON
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading ${lang} file`);
        }
        return response.json();
      })
      .then((data) => {
        updateText(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Fungsi untuk mengganti teks di halaman
  function updateText(translations) {
    Object.keys(translations).forEach((key) => {
      const element = document.querySelector(`[data-lang-key="${key}"]`);
      if (element) {
        element.textContent = translations[key];
      }
    });
  }

  // Event listener untuk tombol bahasa
  document.getElementById("lang-english").addEventListener("click", function (e) {
    e.preventDefault();
    loadLanguage("en");
  });

  document.getElementById("lang-indonesia").addEventListener("click", function (e) {
    e.preventDefault();
    loadLanguage("id");
  });
});
