// Check if there's a stored image and update the user image and previewImage
document.addEventListener("DOMContentLoaded", function() {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
        document.getElementById("userImage").src = storedImage;
        document.getElementById("previewImage").src = storedImage;
    }
});
