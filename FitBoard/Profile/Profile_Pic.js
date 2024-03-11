document.getElementById("fileInput").onchange = function (e) {
    var reader = new FileReader();
    reader.onload = function () {
        var preview = document.getElementById("previewImage");
        preview.src = reader.result;

        var userImage = document.getElementById("userImage");
        userImage.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
};