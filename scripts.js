const hamMenu = document.querySelector(".ham-menu");

const animation = lottie.loadAnimation({
    container: document.getElementById('connector-animation'), // where to render
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'icons/Frame 3.json' // JSON file path
});

// Function to update animation based on scroll
window.addEventListener('scroll', function() {
    const animationElement = document.getElementById('connector-animation');
    const elementTop = animationElement.getBoundingClientRect().top;
    const elementHeight = animationElement.offsetHeight;
    const screenHeight = window.innerHeight;

    // Calculate scroll progress as a value between 0 and 1
    let scrollProgress = (screenHeight - elementTop) / (screenHeight + elementHeight);

    // Clamp scrollProgress to ensure it's between 0 and 1
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    // Convert scrollProgress to a frame in the animation
    const maxFrames = animation.totalFrames;
    const currentFrame = scrollProgress * maxFrames;

    // Update animation frame
    animation.goToAndStop(currentFrame, true);
});






// Options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when 10% of the caption is visible
};

// Callback function for Intersection Observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when in view
            observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
    });
};

// Initialize the Intersection Observer with the callback and options
const observer = new IntersectionObserver(callback, options);

// Select all elements with the class 'caption' and observe them
document.querySelectorAll('.caption').forEach(caption => {
    observer.observe(caption);
});

// Navigation button for "back" page
const backButton = document.getElementById("back");
if (backButton) {
    backButton.onclick = () => {
        window.location.href = "main.html";
    };
} else {
    console.error('Element with id "back" not found');
}

// Navigation button for "hot-bar" page
const hotBarButton = document.getElementById("hot-bar");
if (hotBarButton) {
    hotBarButton.onclick = () => {
        window.location.href = "hot-bar.html";
    };
} else {
    console.error('Element with id "hot-bar" not found');
}

const iceCoffeebtn = document.getElementById("ice-coffee");
if (iceCoffeebtn) {
    iceCoffeebtn.onclick = () => {
        window.location.href = "ice-coffee.html";
    };
} else {
    console.error('Element with id "ice-coffee" not found');
}

const coldbar = document.getElementById("coldbar");
if (coldbar) {
    coldbar.onclick = () => {
        window.location.href = "coldbar.html";
    };
} else {
    console.error('Element with id "coldbar" not found');
}

const tea = document.getElementById("tea");
if (tea) {
    tea.onclick = () => {
        window.location.href = "tea.html";
    };
} else {
    console.error('Element with id "tea" not found');
}

const shake = document.getElementById("shake");
if (shake) {
    shake.onclick = () => {
        window.location.href = "shake.html";
    };
} else {
    console.error('Element with id "shake" not found');
}

const cake = document.getElementById("cake");
if (cake) {
    cake.onclick = () => {
        window.location.href = "cake.html";
    };
} else {
    console.error('Element with id "cake" not found');
}

const salad = document.getElementById("salad");
if (salad) {
    salad.onclick = () => {
        window.location.href = "salad.html";
    };
} else {
    console.error('Element with id "salad" not found');
}

const sandwich = document.getElementById("sandwich");
if (sandwich) {
    sandwich.onclick = () => {
        window.location.href = "sandwich.html";
    };
} else {
    console.error('Element with id "sandwich" not found');
}

const drinks = document.getElementById("drinks");
if (drinks) {
    drinks.onclick = () => {
        window.location.href = "drinks.html";
    };
} else {
    console.error('Element with id "drinks" not found');
}