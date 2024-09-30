

document.getElementById("btn-qrcode").addEventListener("click", function(){
    const example = document.getElementById("example").value;
    const qrcodeImage = document.querySelector(".qrcode-image");
    const uri = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(example)}`;
    // console.log(uri);
    document.querySelector("#result").setAttribute("hidden", true);
    qrcodeImage.src = "";

    setTimeout(() => {
        fetch(uri)
        .then(response => response.blob())
        .then(blob => {
            // console.log(blob);
            const url = URL.createObjectURL(blob);
     
            document.querySelector("#result").removeAttribute("hidden");
            qrcodeImage.src = url;
            qrcode.onload = function(){
                URL.revokeObjectURL(url);
            }
        })
        .catch(error => console.log("Error message: " + error.message));
    }, 500);
});
