// JavaScript for zoom functionality
document.addEventListener('DOMContentLoaded', function() {
    const mindMapImg = document.querySelector('.mind-map img');
    const mindMapContainer = document.querySelector('.mind-map-container');

    // Function to toggle zoom on image click
    function toggleZoom() {
        mindMapImg.classList.toggle('zoomed');
    }

    // Add click event listener to the image
    mindMapImg.addEventListener('click', toggleZoom);

    // Add event listener to reset zoom when clicking outside the image
    document.addEventListener('click', function(event) {
        if (!mindMapContainer.contains(event.target)) {
            mindMapImg.classList.remove('zoomed');
        }
    });
});
