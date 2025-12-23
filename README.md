# Ex.07 Design of Interactive Image Gallery
## Date:23-12-2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
gallery.html
<html>

<head>
    <title>Gallery</title>
    <link rel="stylesheet" href="gallery.css">
    <script src="gallery.js" defer></script>

</head>

<body>
    <h1>Image Gallery</h1>
    <video autoplay loop muted>
        <source src="background.mp4" type="video/mp4">
    </video>




    <div class="gallery-container">
        <img id="gallery-img" src="Ballerina Cappuccina.jpg" alt="Gallery Image">

        <div class="button-group">
            <button id="prev-btn">Previous</button>
            <button id="next-btn">Next</button>
        </div>
    </div>
    <footer class="footer">
        <p>Dinesh D(25018449) &copy; 2025</p>
    </footer>

</body>

</html>

gallery.css

        *{
            margin: 0;
            padding: 0;
        }
        video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        body {
            font-family: Arial, sans-serif;
            background-clip: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        h1 {
            background-color: #000000;
            color: white;
            width: 100%;
            text-align: center;
            padding: 5px;
            margin-bottom: 20px;
            
        }

        .gallery-container {
            background-color: rgba(0, 0, 0, 0.595);
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(251, 249, 249, 0.64);
            text-align: center;
            width: 600px;
            max-width: 500px;

        }

        .gallery-container img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 20px;
            height: 300px;
        }


        .button-group {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        button {
            background-color: #000000;
            color: white;
            border: none;
            padding: 10px 30px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #4c4c62;
        }

        .footer {
       background-color: #000000;
            color: white;
            width: 100%;
            text-align: center;
            padding: 5px;
            margin-top: 150px;
            
        }
    
    gallery.js

    var gallery = [
        { src: "Ballerina Cappuccina.jpg" },
        { src: "Bombardiro Crocodilo.jpg" },
        { src: "Bombombini Gusini.jpg" },
        { src: "Capuchino Assassino.jpg" },
        { src: "Chimpanzini Bananini.jpg" },
        { src: "Lirili Larila.jpg" },
        { src: "Brr Brr Patapim.jpg" },
        { src: "Tralalerlo Tralala.jpg" },
        { src: "Tung Tung Tung Sahur.jpg" },

    ];

    var index = 0;
    var imgElement = document.getElementById("gallery-img");

    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");

    function updateGallery() {
        imgElement.src = gallery[index].src;
    }

    nextBtn.onclick = function() {
        index = (index + 1) % gallery.length;
        updateGallery();
    }

    prevBtn.onclick = function() {
        index = (index - 1 + gallery.length) % gallery.length;
        updateGallery();
    }

    updateGallery();
    
 ```

## OUTPUT:
![alt text](<dhinesh/galleryapp/static/Screenshot (43).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (44).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (45).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (46).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (47).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (48).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (49).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (50).png>)
![alt text](<dhinesh/galleryapp/static/Screenshot (51).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
