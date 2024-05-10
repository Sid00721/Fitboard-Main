// Handle file input change event
document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageDataURL = e.target.result;
            openCenteredDialog(imageDataURL); // Open centered dialog with the selected image
            updateAndStoreUserImage(imageDataURL); // Update and store user image
        };
        reader.readAsDataURL(file);
    }
});

// Function to open a centered modal dialog with the selected image
function openCenteredDialog(imageURL) {
    const modal = document.getElementById("modalDialog");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageURL;

    // Close the modal when clicking on the close button
    const closeButton = document.querySelector(".close");
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Initialize Cropper.js instance
    const cropper = new Cropper(modalImage, {
        aspectRatio: 1, // Aspect ratio for the crop area (1:1 for a circular crop)
        viewMode: 1, // Restricts the crop box to always fit within the canvas
        autoCropArea: 1, // Automatically creates a crop box that fills the canvas
        responsive: true, // Enables responsive mode
        cropBoxResizable: true, // Allow crop box to be resized
        cropBoxMovable: true, // Allow crop box to be moved
        guides: false, // Hide the crop guides for a cleaner UI
        center: true, // Show the center indicator for the crop area
        background: false, // Do not show the background of the container
        highlight: false, // Do not show the overlay on the cropped area
        rotatable: false // Disable image rotation
    });

    // Handle crop button click event
    const cropButton = document.getElementById("btnCrop");
    cropButton.onclick = function() {
        // Get the cropped canvas
        const canvas = cropper.getCroppedCanvas({
            width: 200, // Set a fixed width for the cropped image
            height: 200 // Set a fixed height for the cropped image
        });

        // Convert canvas to data URL and update user image
        const croppedImageURL = canvas.toDataURL();
        document.getElementById("userImage").src = croppedImageURL;

        // Close the modal
        modal.style.display = "none";

        // Optional: Store cropped image URL in local storage
        localStorage.setItem("userImage", croppedImageURL);
    };
}

// Function to update and store user image
function updateAndStoreUserImage(imageURL) {
    document.getElementById("userImage").src = imageURL; // Update user image
    localStorage.setItem("userImage", imageURL); // Store image in local storage
    document.getElementById("previewImage").src = imageURL; // Update user image
    localStorage.setItem("previewImage", imageURL); // Store image in local storage
}
