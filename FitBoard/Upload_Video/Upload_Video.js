function openFileExplorer() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
}

document.getElementById('fileInput').addEventListener('change', function () {
    const fileInfo = document.getElementById('fileInfo');
    const selectedFile = this.files[0];
    if (selectedFile) {
        const fileName = selectedFile.name;
        fileInfo.innerText = 'Selected File: ' + fileName;
        if (fileName.endsWith('.mp4')) {
            button1.innerText = 'Uploaded';
            button1.style.color = 'white';
            button1.style.background = '#04AA6D';
            fileInfo.style.color = 'green';
            fileInfo.innerText += ' (Accepted)';
            document.getElementById('displayVideoButton').style.display = 'inline-block';
        } else {
            fileInfo.style.color = 'red';
            fileInfo.innerText += ' (Error: Only .mp4 files are accepted)';
            document.getElementById('displayVideoButton').style.display = 'none';
        }
    } else {
        fileInfo.innerText = '';
        document.getElementById('displayVideoButton').style.display = 'none';
    }
});

function displayVideo() {
const selectedFile = document.getElementById('fileInput').files[0];
const fileName = selectedFile.name;
const filePath = URL.createObjectURL(selectedFile);

const videoListContainer = document.querySelector('.video_list');

// Create a new div element for the uploaded video
const newVideoDiv = document.createElement('div');
newVideoDiv.classList.add('vid');

// Create a video element and set its attributes
const newVideo = document.createElement('video');
newVideo.src = filePath;
newVideo.controls = true;
newVideo.muted = true;

// Create a title element for the video
const newTitle = document.createElement('h3');
newTitle.classList.add('title');
newTitle.textContent = fileName;

// Append video and title elements to the new div
newVideoDiv.appendChild(newVideo);
newVideoDiv.appendChild(newTitle);

// Append the new div to the video list container
videoListContainer.appendChild(newVideoDiv);

// Add click event listener to the new video div
newVideoDiv.addEventListener('click', function() {
// Set the clicked video as the main video
mainVideo.src = newVideo.src;
title.textContent = fileName;

// Remove 'active' class from all videos and add it to the clicked one
listVideo.forEach(video => video.classList.remove('active'));
newVideoDiv.classList.add('active');
});
}





// JavaScript to enable dark mode
document.addEventListener('DOMContentLoaded', function () {
const body = document.getElementById('body');
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
body.classList.add('dark');
}
});
