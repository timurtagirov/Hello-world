document.addEventListener('DOMContentLoaded', function() {
    // Change the background color of the body to orange
    document.body.style.backgroundColor = 'orange';
    
    // Set the text content to "Hello world"
    var contentDiv = document.getElementById('content');
    contentDiv.textContent = 'Hello world';

 // Style the content div
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    
    contentDiv.style.fontSize = '3em';
    contentDiv.style.color = 'black';
});
