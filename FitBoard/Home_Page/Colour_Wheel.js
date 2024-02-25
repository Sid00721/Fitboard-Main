document.addEventListener('DOMContentLoaded', function () {
    const colorWheel = document.getElementById('color-wheel');
    const container = document.getElementById('top-bar');

    // Get the angle of the mouse relative to the center of the color wheel
    function getAngle(event) {
        const rect = colorWheel.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        return Math.atan2(y, x) + Math.PI / 2;
    }

    // Set container background color based on angle
    function setBackgroundColor(angle) {
        let hue = (angle * 180 / Math.PI) % 360;
        hue = hue < 0 ? 360 + hue : hue; // Ensure hue is within 0-360 range
        container.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }

    // Update color when user drags the mouse
    let dragging = false;
    colorWheel.addEventListener('mousedown', function (event) {
        dragging = true;
        setBackgroundColor(getAngle(event));
    });

    colorWheel.addEventListener('mousemove', function (event) {
        if (dragging) {
            setBackgroundColor(getAngle(event));
        }
    });

    document.addEventListener('mouseup', function () {
        dragging = false;
    });
});