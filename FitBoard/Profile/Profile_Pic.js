let cropper; // Store the cropper instance globally

// Handle file input change event
document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageDataURL = e.target.result;
            updateSelectedImage(imageDataURL); // Update image on the left side of the modal
            openCenteredDialog(imageDataURL); // Open centered dialog and set the image
        };
        reader.readAsDataURL(file);
    }
});

// Function to update the selected image on the left side of the modal
function updateSelectedImage(imageURL) {
    document.getElementById("selectedImage").src = imageURL;
}

// Function to open a centered modal dialog and set the image
function openCenteredDialog(imageURL) {
    const modal = document.getElementById("modalDialog");
    modal.style.display = "block";

    const cropperImage = document.getElementById("cropperImage");
    cropperImage.src = imageURL;

    // Hide the selected image when the modal is opened
    document.getElementById("selectedImage").style.display = "none";

    // Initialize Cropper.js instance or reset it if already exists
    if (cropper) {
        cropper.replace(imageURL);
    } else {
        cropper = new Cropper(cropperImage, {
            aspectRatio: 1, // Aspect ratio for the crop area (1:1 for a circular crop)
            viewMode: 1, // Restricts the crop box to always fit within the canvas
            autoCropArea: 1, // Automatically creates a crop box that fills the canvas
            responsive: true, // Enables responsive mode
            cropBoxResizable: true, // Allow crop box to be resized
            cropBoxMovable: true, // Allow crop box to be moved
            guides: true, // Hide the crop guides for a cleaner UI
            center: true, // Show the center indicator for the crop area
            background: false, // Do not show the background of the container
            highlight: true, // Do not show the overlay on the cropped area
            rotatable: true, // Disable image rotation
            zoomable: false, // Disable zooming
        });
    }

    // Close the modal when clicking on the close button
    const closeButton = document.querySelector(".close");
    closeButton.onclick = function() {
        modal.style.display = "none";
        // Show the selected image again
        document.getElementById("selectedImage").style.display = "block";
        window.location.reload()
    };

    // Handle crop button click event
    const cropButton = document.getElementById("btnCrop");
    cropButton.onclick = function() {
        // Get the cropped canvas
        const canvas = cropper.getCroppedCanvas({
            width: 200, // Set a fixed width for the cropped image
            height: 200 // Set a fixed height for the cropped image
        });

        // Convert canvas to data URL and update previewImage and userImage
        const croppedImageURL = canvas.toDataURL();
        document.getElementById("previewImage").src = croppedImageURL;
        document.getElementById("userImage").src = croppedImageURL;

        window.location.reload()

        // Close the modal
        modal.style.display = "none";

        // Optional: Store cropped image URL in local storage
        localStorage.setItem("userImage", croppedImageURL);
        localStorage.setItem("previewImage", croppedImageURL);

        // Show the selected image again
        document.getElementById("selectedImage").style.display = "block";
    };
}

// Check if there's a stored image and update the user image and previewImage
document.addEventListener("DOMContentLoaded", function() {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
        document.getElementById("userImage").src = storedImage;
        document.getElementById("previewImage").src = storedImage;
    }
});

// Function to update the size of the resize handles based on the crop area dimensions
function updateHandleSize() {
    const cropBox = document.querySelector('.cropper-crop-box');
    const handleSize = Math.min(cropBox.offsetWidth, cropBox.offsetHeight) * 0.1; // Adjust the handle size as a percentage of the crop box size

    const resizeHandles = document.querySelectorAll('.cropper-point');
    resizeHandles.forEach(handle => {
        handle.style.width = handleSize + 'px';
        handle.style.height = handleSize + 'px';
    });
}



