const images = ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" ,
"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" , 
"https://plus.unsplash.com/premium_photo-1661865088520-b99c8e7add91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" , 
"https://plus.unsplash.com/premium_photo-1682148095368-15f913e0012f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" ,
"https://images.unsplash.com/photo-1536565206219-37a3cf48b2d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80",
];

const image = document.getElementById("image-box");

for(let i = 0 ; i < images.length ; i++){
    var img = document.createElement('img');
    img.src = images[i];
    img.alt = `image${i}`;
    image.appendChild(img);
}

let k = 0;
const right = document.getElementById("text-overlay2");
const left = document.getElementById("text-overlay");

const aut = () => {
    k = (k + 1) % images.length;
    let z = -550 * k;
    image.style.transform = `translateX(${z}px)`;
};

// setInterval(aut , 2000);

right.addEventListener('click' , () => {
    k = (k + 1) % images.length;
    let z = -550 * k;
    image.style.transform = `translateX(${z}px)`;

    // const audio = new Audio('https://open.spotify.com/track/5FJXrZeSKCF0aX93q1A3tb?si=92a14de996284d9c');
    // audio.play();
});

left.addEventListener('click' , () => {
    k = (k - 1 + images.length) % images.length;
    let z = -550 * k;
    image.style.transform = `translateX(${z}px)`;
});