"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Başlangıç zamanı
  let seconds = 10;
  let minutes = 0;
  let hours = 0;
  let days = 0;

  function updateCounter() {
    // Saniyeyi her dakika düşür
    if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
    }

    // Dakikayı her saat düşür
    if (minutes === 0 && hours > 0) {
      hours--;
      minutes = 59;
    }

    // Saati her gün düşür
    if (hours === 0 && days > 0) {
      days--;
      hours = 23;
    }

    // Ekrana güncellenmiş değerleri yazdır
    document.querySelector(".box p").textContent = seconds;
    document
      .querySelectorAll(".fourPieces .piece")[0]
      .querySelector("p").textContent = days;
    document
      .querySelectorAll(".fourPieces .piece")[1]
      .querySelector("p").textContent = hours;
    document
      .querySelectorAll(".fourPieces .piece")[2]
      .querySelector("p").textContent = minutes;
    document
      .querySelectorAll(".fourPieces .piece")[3]
      .querySelector("p").textContent = seconds;

    // Zamanı sıfırlandığında durumu kontrol et
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timerInterval); // Zamanlayıcıyı durdur
      // İstenen işlemleri burada yapabilirsiniz
    } else {
      // Zamanlayıcıyı her saniyede bir güncelle
      seconds--;
    }
  }

  // Zamanlayıcıyı başlat
  const timerInterval = setInterval(updateCounter, 1000);
});
