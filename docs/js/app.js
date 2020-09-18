totalFrames = 152; // the number of images in the sequence of JPEG files (this could be calculated server-side by scanning the frames folder)

$(document).ready(function() {
    resizeAdjustments(); // adjust the size of video placeholder image to fit the screen and keep aspect ratio (zoom crop)
});

for(i = 1; i <= totalFrames; i++) { // loop for each image in sequence
    images[i] =  new Image(); // add image object to array
    images[i].src = "./assets/service2"+pad(i, 3)+".jpg"; // set the source of the image object
}