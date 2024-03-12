// Handle file input change event
document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageDataURL = e.target.result;
            document.getElementById("previewImage").src = imageDataURL;
            updateAndStoreUserImage(imageDataURL); // Update and store user image
        };
        reader.readAsDataURL(file);
    }
});

// Function to update and store user image
function updateAndStoreUserImage(imageURL) {
    document.getElementById("userImage").src = imageURL; // Update user image
    localStorage.setItem("userImage", imageURL); // Store image in local storage
}
