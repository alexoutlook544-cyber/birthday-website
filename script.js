// Photo paths - Add all your photos here
const photos = [
    'ab/IMG-20251107-WA0007.jpg',
    'ab/IMG-20251107-WA0010.jpg',
    'ab/IMG-20251107-WA0014.jpg',
    'ab/IMG-20251107-WA0015.jpg',
    'ab/IMG-20251107-WA0008.jpg',
    'ab/IMG-20251107-WA0009.jpg'
];

// Photo captions
const photoCaptions = [
    "This smile still makes my day 💕",
    "The moment I knew I never wanted to lose you 🌸",
    "Every click holds a heartbeat 💫",
    "You make every moment magical ✨",
    "This memory lives in my heart forever 💖"
];

// Enhanced Reasons I Love You
const allReasons = [
    { icon: '💕', text: "You're my first crush and my first love" },
    { icon: '🌍', text: 'You make distance feel like nothing' },
    { icon: '✨', text: 'You understand me even in silence' },
    { icon: '☀️', text: 'Your smile could start a thousand sunrises' },
    { icon: '💫', text: 'You made me believe in love — not the movie kind, the real one' },
    { icon: '😳', text: 'Every time you say my name, my heart forgets how to behave' },
    { icon: '🌧️', text: "You're my peace after chaos, my calm after storms" },
    { icon: '🌅', text: 'You somehow make my bad days feel like soft sunsets' },
    { icon: '✨', text: 'You make ordinary moments feel like magic' },
    { icon: '💌', text: "You're my favorite notification" },
    { icon: '💖', text: 'You make love look effortless' },
    { icon: '💞', text: 'Every "I love you" from you rewires my world' },
    { icon: '🦋', text: 'You still give me butterflies, every single time' },
    { icon: '📖', text: 'You are the most beautiful chapter in my story' },
    { icon: '💫', text: 'Even your silence speaks love I can feel' }
];

// Special "You." reason
const youReason = {
    icon: '💖',
    text: 'You.',
    subtext: 'Because in the end, all the reasons lead back to you. 💖',
    special: true
};

// Shuffle function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create reasons array with 5 "You." entries randomly placed
function createReasonsArray() {
    const shuffledReasons = shuffleArray(allReasons);
    const finalReasons = [];
    const youPositions = new Set();
    
    // Generate 5 random positions for "You."
    while (youPositions.size < 5) {
        youPositions.add(Math.floor(Math.random() * 20));
    }
    
    let regularIndex = 0;
    for (let i = 0; i < 20; i++) {
        if (youPositions.has(i)) {
            finalReasons.push({ ...youReason });
        } else {
            finalReasons.push(shuffledReasons[regularIndex % shuffledReasons.length]);
            regularIndex++;
        }
    }
    
    return finalReasons;
}

const reasons = createReasonsArray();
let currentReasonIndex = 0;

// Animation types
const animations = ['fade', 'slide-up', 'slide-down', 'zoom', 'bounce', 'rotate'];

function getRandomAnimation() {
    return animations[Math.floor(Math.random() * animations.length)];
}

// Create floating particles
function createParticles() {
    const container = document.querySelector('.particles-container');
    const particles = ['✨', '💫', '⭐', '💛', '🌟'];
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.fontSize = (Math.random() * 15 + 12) + 'px';
        container.appendChild(particle);
    }
}

// Create stars
function createStars() {
    const container = document.querySelector('.stars-container');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}

// Create floating hearts for reasons section
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts-bg');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💓'];
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.opacity = '0.4';
        heart.style.animation = `floatHeart ${Math.random() * 5 + 5}s ease-in-out infinite`;
        heart.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(heart);
    }
    
    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatHeart {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(10deg); }
        }
    `;
    document.head.appendChild(style);
}

// Create sparkle particles for birthday section
function createSparkleParticles() {
    const container = document.querySelector('.sparkle-particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '3px';
        sparkle.style.height = '3px';
        sparkle.style.background = '#ffd700';
        sparkle.style.borderRadius = '50%';
        sparkle.style.boxShadow = '0 0 10px #ffd700';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.bottom = '0';
        sparkle.style.animation = `riseSparkle ${Math.random() * 4 + 3}s ease-out infinite`;
        sparkle.style.animationDelay = Math.random() * 5 + 's';
        sparkle.style.opacity = '0';
        container.appendChild(sparkle);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes riseSparkle {
            0% {
                transform: translateY(0) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-600px) scale(1.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all animations
createParticles();
createStars();
createFloatingHearts();
createSparkleParticles();

// Music control
const playMusicBtn = document.getElementById('playMusicBtn');
const bgMusic = document.getElementById('bgMusic');
const scrollIndicator = document.getElementById('scrollIndicator');

playMusicBtn.addEventListener('click', () => {
    bgMusic.play();
    bgMusic.volume = 0;
    
    // Fade in music
    let volume = 0;
    const fadeIn = setInterval(() => {
        if (volume < 0.25) {
            volume += 0.02;
            bgMusic.volume = volume;
        } else {
            clearInterval(fadeIn);
        }
    }, 100);
    
    // Show scroll indicator
    scrollIndicator.classList.remove('hidden');
    playMusicBtn.style.opacity = '0';
    playMusicBtn.style.pointerEvents = 'none';
});

// Intro Scene
const introScene = document.getElementById('introScene');
const beginBtn = document.getElementById('beginBtn');
const mainSite = document.getElementById('mainSite');

// Create intro hearts
function createIntroHearts() {
    const container = document.querySelector('.intro-hearts');
    const hearts = ['💖', '💕', '💗', '💓'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.opacity = '0.6';
        heart.style.animation = `floatUp ${Math.random() * 8 + 8}s ease-out infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

// Add floatUp animation dynamically if not in CSS
const floatUpStyle = document.createElement('style');
floatUpStyle.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -50px;
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            bottom: 100vh;
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatUpStyle);

createIntroHearts();

// Show begin button after a short delay
setTimeout(() => {
    if (beginBtn) {
        beginBtn.classList.remove('hidden');
    }
}, 3500); // Show after intro text animations

// Begin button click handler
beginBtn?.addEventListener('click', () => {
    introScene.classList.add('fade-out');
    setTimeout(() => {
        introScene.style.display = 'none';
        mainSite.classList.remove('hidden');
        mainSite.style.display = 'block';
        setTimeout(() => {
            mainSite.classList.add('visible');
        }, 50);
    }, 1500);
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.cursor-trail');

if (cursor && cursorTrail) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 100);
    });

    // Cursor hover effect on interactive elements
    document.querySelectorAll('button, a, input, textarea').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Floating Hearts on Click
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'click-heart';
    heart.textContent = ['💖', '💕', '💗', '💓', '💞'][Math.floor(Math.random() * 5)];
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
});

// Enhanced Photo Carousel with Captions
let currentPhotoIndex = 0;

function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const dotsContainer = document.querySelector('.carousel-dots');
    const captionElement = document.querySelector('.carousel-caption');
    
    // Clear existing slides
    const existingSlides = container.querySelectorAll('.photo-slide');
    existingSlides.forEach((slide, index) => {
        if (index > 0) slide.remove();
    });
    
    // Update first slide
    const firstSlide = container.querySelector('.photo-slide');
    if (firstSlide) {
        const firstImg = firstSlide.querySelector('.carousel-photo');
        if (firstImg) {
            firstImg.src = photos[0];
        }
    }
    
    // Create remaining slides
    photos.forEach((photo, index) => {
        if (index === 0) return;
        
        const slide = document.createElement('div');
        slide.className = 'photo-slide';
        slide.innerHTML = `
            <div class="photo-glow"></div>
            <img src="${photo}" alt="Our Memory" class="carousel-photo">
        `;
        container.appendChild(slide);
    });
    
    // Create dots
    dotsContainer.innerHTML = '';
    photos.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Update caption
    if (captionElement) {
        captionElement.textContent = photoCaptions[0];
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.photo-slide');
    const dots = document.querySelectorAll('.dot');
    const captionElement = document.querySelector('.carousel-caption');
    
    slides[currentPhotoIndex].classList.remove('active');
    dots[currentPhotoIndex].classList.remove('active');
    
    currentPhotoIndex = index;
    
    slides[currentPhotoIndex].classList.add('active');
    dots[currentPhotoIndex].classList.add('active');
    
    // Update caption
    if (captionElement) {
        captionElement.style.opacity = '0';
        setTimeout(() => {
            captionElement.textContent = photoCaptions[currentPhotoIndex % photoCaptions.length];
            captionElement.style.opacity = '1';
        }, 300);
    }
}

function nextSlide() {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    goToSlide(prevIndex);
}

// Carousel controls
document.querySelector('.next-btn')?.addEventListener('click', nextSlide);
document.querySelector('.prev-btn')?.addEventListener('click', prevSlide);

// Auto-play carousel (pause on hover)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopAutoPlay);
document.querySelector('.carousel-container')?.addEventListener('mouseleave', startAutoPlay);

startAutoPlay();
initCarousel();

// Update reason with animation
function updateReason() {
    const iconElement = document.querySelector('.reason-icon-dynamic');
    const textElement = document.querySelector('.reason-text-dynamic');
    const subtextElement = document.querySelector('.reason-subtext');
    const counterElement = document.querySelector('.reason-counter');
    const card = document.querySelector('.reason-card-dynamic');
    const contentWrapper = document.querySelector('.reason-content-wrapper');
    const reasonsSection = document.getElementById('reasons');
    const nextBtn = document.getElementById('nextReasonBtn');
    const finalMessage = document.getElementById('finalReasonMessage');
    
    const currentReason = reasons[currentReasonIndex];
    
    // Remove all animation classes
    contentWrapper.className = 'reason-content-wrapper';
    
    // Fade out
    contentWrapper.style.opacity = '0';
    
    setTimeout(() => {
        // Check if it's a special "You." moment
        if (currentReason.special) {
            // Special "You." styling
            iconElement.textContent = currentReason.icon;
            iconElement.classList.add('you-icon');
            textElement.textContent = currentReason.text;
            textElement.classList.add('you-special');
            subtextElement.textContent = currentReason.subtext;
            subtextElement.classList.remove('hidden');
            
            // Brighten background
            reasonsSection.classList.add('you-moment');
            
            // Optional: Play heartbeat sound (if you add audio file)
            // new Audio('heartbeat.mp3').play();
            
        } else {
            // Regular reason styling
            iconElement.textContent = currentReason.icon;
            iconElement.classList.remove('you-icon');
            textElement.textContent = currentReason.text;
            textElement.classList.remove('you-special');
            subtextElement.textContent = '';
            subtextElement.classList.add('hidden');
            
            // Reset background
            reasonsSection.classList.remove('you-moment');
        }
        
        // Update counter
        counterElement.textContent = `${currentReasonIndex + 1} of ${reasons.length}`;
        
        // Apply random animation
        const animation = getRandomAnimation();
        contentWrapper.classList.add(`animate-${animation}`);
        
        // Fade in
        contentWrapper.style.opacity = '1';
        
        // Check if last reason
        if (currentReasonIndex === reasons.length - 1) {
            nextBtn.textContent = 'Start Over ❤️';
        }
        
    }, 400);
}

// Next reason button
document.getElementById('nextReasonBtn')?.addEventListener('click', () => {
    const finalMessage = document.getElementById('finalReasonMessage');
    
    if (currentReasonIndex === reasons.length - 1) {
        // Show final message
        finalMessage.classList.remove('hidden');
        
        // Reset after showing final message
        setTimeout(() => {
            currentReasonIndex = 0;
            finalMessage.classList.add('hidden');
            updateReason();
            document.getElementById('nextReasonBtn').textContent = 'Next Reason ❤️';
        }, 5000);
    } else {
        currentReasonIndex++;
        updateReason();
    }
});

// Auto-rotate reasons (optional - uncomment to enable)
/*
let autoRotateInterval = setInterval(() => {
    if (currentReasonIndex < reasons.length - 1) {
        currentReasonIndex++;
        updateReason();
    } else {
        clearInterval(autoRotateInterval);
        document.getElementById('finalReasonMessage').classList.remove('hidden');
    }
}, 7000);
*/

// Scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// Parallax effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Parallax for particles
    document.querySelectorAll('.particle').forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.15;
        particle.style.transform = `translateY(${scrollTop * speed}px)`;
    });
    
    // Slight motion blur effect
    const scrollDelta = scrollTop - lastScrollTop;
    if (Math.abs(scrollDelta) > 5) {
        document.body.style.filter = 'blur(0.5px)';
        setTimeout(() => {
            document.body.style.filter = 'blur(0px)';
        }, 100);
    }
    
    lastScrollTop = scrollTop;
});

// Create Ending Hearts
function createEndingHearts() {
    const container = document.querySelector('.ending-hearts');
    if (!container) return;
    
    const hearts = ['💖', '💕', '💗', '💓', '💞'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'ending-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
    }
}

// Create Ending Stars
function createEndingStars() {
    const container = document.querySelector('.ending-stars');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}

createEndingHearts();
createEndingStars();

// LocalStorage for Form
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

// Restore form data
if (nameInput && messageInput) {
    const savedName = localStorage.getItem('mejula_form_name');
    const savedMessage = localStorage.getItem('mejula_form_message');
    
    if (savedName) nameInput.value = savedName;
    if (savedMessage) messageInput.value = savedMessage;
    
    // Save on input
    nameInput.addEventListener('input', () => {
        localStorage.setItem('mejula_form_name', nameInput.value);
    });
    
    messageInput.addEventListener('input', () => {
        localStorage.setItem('mejula_form_message', messageInput.value);
    });
}

// Contact form
const confirmationMessage = document.getElementById('confirmationMessage');
const envelopeAnimation = document.getElementById('envelopeAnimation');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Show envelope animation
    envelopeAnimation.classList.remove('hidden');
    
    setTimeout(() => {
        const subject = encodeURIComponent(`Birthday Message from ${name}`);
        const body = encodeURIComponent(`From: ${name}\n\nMessage:\n${message}`);
        
        window.location.href = `mailto:alex@example.com?subject=${subject}&body=${body}`;
        
        confirmationMessage.classList.remove('hidden');
        contactForm.reset();
        
        // Clear localStorage
        localStorage.removeItem('mejula_form_name');
        localStorage.removeItem('mejula_form_message');
        
        setTimeout(() => {
            envelopeAnimation.classList.add('hidden');
            confirmationMessage.classList.add('hidden');
        }, 6000);
    }, 1500);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
