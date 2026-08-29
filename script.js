/* =====================================================
   OPEN LETTER
===================================================== */

function openLetter() {

    const home = document.getElementById("home");
    const letter = document.getElementById("letter-page");

    home.style.display = "none";

    letter.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   GO BACK TO HOME
===================================================== */

function goHome() {

    const home = document.getElementById("home");
    const letter = document.getElementById("letter-page");
    const photos = document.getElementById("photos-page");

    letter.style.display = "none";

    photos.style.display = "none";

    home.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   OPEN PHOTOS
===================================================== */

function openPhotos() {

    const letter = document.getElementById("letter-page");
    const photos = document.getElementById("photos-page");

    letter.style.display = "none";

    photos.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   GO BACK TO LETTER
===================================================== */

function goLetter() {

    const letter = document.getElementById("letter-page");
    const photos = document.getElementById("photos-page");

    photos.style.display = "none";

    letter.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}