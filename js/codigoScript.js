// Página 01laBachata.html
if (document.body.contains(document.getElementById("btnColor"))) {
    const btnColor = document.getElementById("btnColor");
    const btnToggleText = document.getElementById("btnToggleText");
    const btnChangeContent = document.getElementById("btnChangeContent");
    const pExplication = document.getElementById("pExplication");

    btnColor.addEventListener("click", cambiarColorFondo);
    btnToggleText.addEventListener("click", alternarTexto);
    btnChangeContent.addEventListener("click", cambiarContenido);

    function cambiarColorFondo() {
        if (document.body.style.backgroundColor === "lightblue") {
            document.body.style.backgroundColor = "blanchedalmond";
        } else {
            document.body.style.backgroundColor = "lightblue";
        }
    }

    function alternarTexto() {
        if (pExplication.style.display === "none") {
            pExplication.style.display = "block";
        } else {
            pExplication.style.display = "none";
        }
    }

    function cambiarContenido() {
        pExplication.textContent =
            "¡El contenido ha cambiado! La bachata es pasión y movimiento.";
    }
}

// Página 03bachata2024.html
if (document.body.contains(document.getElementById("btnRomeo"))) {
    const btnRomeo = document.getElementById("btnRomeo");
    const btnAventura = document.getElementById("btnAventura");
    const btnPrinceRoyce = document.getElementById("btnPrinceRoyce");
    const btnFrankReyes = document.getElementById("btnFrankReyes");
    const btnRaulin = document.getElementById("btnRaulin");
    const btnGrupoExtra = document.getElementById("btnGrupoExtra");
    const artistImage = document.getElementById("artistImage");

    function showImage(src) {
        artistImage.src = src;
        artistImage.style.display = "block";
    }

    btnRomeo.addEventListener("click", function () {
        showImage("https://www.lavoz.com.ar/resizer/v2/WWJ5UKIKOJDUJKSTJ6F465P43U.jpg?quality=75&smart=true&auth=b030cd965bfe214e2c7737829be1d5410da64af02312c52cf660fdb4cfe9f58f&width=980&height=640");
    });

    btnAventura.addEventListener("click", function () {
        showImage("https://www.clarin.com/img/2024/06/12/uOc0RCn4D_1256x620__2.jpg");
    });

    btnPrinceRoyce.addEventListener("click", function () {
        showImage("https://www.hola.com/horizon/original_aspect_ratio/8b7254fc5005-prince-royce.jpg?im=Resize=(640),type=downsize");
    });

    btnFrankReyes.addEventListener("click", function () {
        showImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Frank_Reyes.jpg/220px-Frank_Reyes.jpg");
    });

    btnRaulin.addEventListener("click", function () {
        showImage("https://i.scdn.co/image/ab6761610000e5eb4da10df2db804d0fa6515b85");
    });

    btnGrupoExtra.addEventListener("click", function () {
        showImage("https://cdn.wegow.com/media/artists/grupo-extra/grupo-extra-1531410008.49.jpg");
    });
}
