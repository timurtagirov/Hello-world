document.addEventListener('DOMContentLoaded', function() {
    // Change the background color of the body to orange
    document.body.style.backgroundColor = 'orange';
    
    // Set the text content to "Hello world"
    var contentDiv = document.getElementById('content');
    contentDiv.textContent = 'Hello world';

    contentDiv.style.fontSize = '3em';
    contentDiv.style.color = 'black';
    contentDiv.style.position = 'absolute';
    contentDiv.style.top = '100px';
    contentDiv.style.left = '40%';
});
