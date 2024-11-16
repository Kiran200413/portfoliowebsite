var btn = document.getElementById("videobtn");
var vid = document.getElementById("myVideo");

function play() {
    // Open a new window
    var newWindow = window.open('', '_blank'); // Open a new tab or window

    // Create HTML content for the new window
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Video Player</title>
        </head>
        <body>
            <video width="80%" height="80%" controls  loop muted style="margin-left:10%">
                <source src="StudySphere.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </body>
        </html>
    `);

    // Close the document to finish loading
    newWindow.document.close();
}