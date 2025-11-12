// Love letter text - EXACT TEXT as provided
const letterText = `From the first time I saw you, something in me changed — quietly, completely.
You became my calm and my chaos, my smile in the middle of a long day,
my reason to believe in love's quiet miracles.

Every moment with you — even through distance — feels infinite.
I fall for your voice, your kindness, your strength, and the way your heart feels like home.

You're my first crush, my first love, and the only one I'll ever need.
On your birthday, I just want you to know:
you are my heart's favorite story.
Happy birthday thangame :) 
wishing to celebrate with you irl ;)


மனதை
மயிலிடம் இழந்தேனே
மயங்கி தினம்
தினம் விழுந்தேனே


உன் பார்வையில்
ஓராயிரம் கவிதை நான்
எழுதுவேன் காற்றில் நானே
நிதமும் உன்னை நினைக்கிறேன்
நினைவினாலே அணைக்கிறேன்


Listening to our favourite song
I have faith in what i see and i know i've met an angel in person and 
SHE LOOKS PERFECT ALWAYS ❤️`;

// Audio element
const letterMusic = document.getElementById('letterMusic');
const musicIndicator = document.getElementById('musicIndicator');
const manualPlayBtn = document.getElementById('manualPlayBtn');

// Fade in audio
function fadeInAudio(audio, duration = 3000) {
    audio.volume = 0;
    audio.play().then(() => {
        musicIndicator.classList.remove('hidden');
        const steps = 50;
        const stepDuration = duration / steps;
        const volumeIncrement = 1 / steps;
        
        let currentStep = 0;
        const fadeInterval = setInterval(() => {
            if (currentStep < steps) {
                audio.volume = Math.min(1, audio.volume + volumeIncrement);
                currentStep++;
            } else {
                clearInterval(fadeInterval);
                audio.volume = 1;
            }
        }, stepDuration);
    }).catch((error) => {
        // Autoplay blocked - show manual play button
        console.log('Autoplay blocked, showing manual play button');
        manualPlayBtn.classList.remove('hidden');
    });
}

// Manual play button handler
manualPlayBtn?.addEventListener('click', () => {
    fadeInAudio(letterMusic);
    manualPlayBtn.classList.add('hidden');
    loveLetter.classList.add('music-playing');
});

// Reveal letter button
const revealLetterBtn = document.getElementById('revealLetterBtn');
const loveLetter = document.getElementById('loveLetter');
const videoSection = document.getElementById('videoSection');

revealLetterBtn?.addEventListener('click', () => {
    // Hide button with fade
    revealLetterBtn.style.opacity = '0';
    revealLetterBtn.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        revealLetterBtn.style.display = 'none';
        
        // Show letter
        loveLetter.classList.remove('hidden');
        loveLetter.classList.add('music-playing');
        
        // Try to play music with fade-in
        fadeInAudio(letterMusic);
        
        // Dim background slightly
        document.body.style.filter = 'brightness(0.95)';
        
        // Start typewriter effect
        setTimeout(() => {
            typeWriter();
        }, 800);
    }, 400);
});

// Typewriter effect
let i = 0;
const speed = 30; // Typing speed in milliseconds

function typeWriter() {
    const letterBody = document.getElementById('letterText');
    
    if (i < letterText.length) {
        const char = letterText.charAt(i);
        
        // Check if we need to start a new paragraph
        if (char === '\n') {
            // Check for special line patterns
            const currentText = letterBody.textContent;
            
            // Wrap Tamil sections
            if (currentText.includes('மனதை') || currentText.includes('உன் பார்வையில்')) {
                const lastP = letterBody.lastElementChild;
                if (lastP && lastP.tagName === 'P') {
                    lastP.classList.add('tamil-text');
                }
            }
            
            // Highlight special lines
            if (currentText.includes('Happy birthday thangame')) {
                const lastP = letterBody.lastElementChild;
                if (lastP && lastP.tagName === 'P') {
                    lastP.classList.add('birthday-greeting');
                }
            }
            
            // Perfect line
            if (currentText.includes('SHE LOOKS PERFECT')) {
                const lastP = letterBody.lastElementChild;
                if (lastP && lastP.tagName === 'P') {
                    lastP.classList.add('perfect-line');
                }
            }
            
            // Poetic lines
            if (currentText.includes('quietly, completely') || 
                currentText.includes('heart feels like home') ||
                currentText.includes("heart's favorite story")) {
                const lastP = letterBody.lastElementChild;
                if (lastP && lastP.tagName === 'P') {
                    lastP.classList.add('poetic-line');
                }
            }
            
            letterBody.innerHTML += '<br>';
        } else {
            letterBody.innerHTML += char;
        }
        
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Typing complete - apply final styling
        const allPs = letterBody.querySelectorAll('p');
        allPs.forEach((p, index) => {
            p.style.animationDelay = `${index * 0.2}s`;
        });
        
        // Show video section - REDUCED DELAY from 1500ms to 500ms
        setTimeout(() => {
            videoSection.classList.remove('hidden');
            videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }
}

// Video lightbox controls
const playVideoBtn = document.getElementById('playVideoBtn');
const videoLightbox = document.getElementById('videoLightbox');
const closeLightbox = document.getElementById('closeLightbox');
const messageVideo = document.getElementById('messageVideo');

playVideoBtn?.addEventListener('click', () => {
    // Pause letter music
    if (letterMusic && !letterMusic.paused) {
        letterMusic.pause();
        musicIndicator.classList.add('hidden');
    }
    
    videoLightbox.classList.remove('hidden');
    messageVideo.play();
    
    // Request fullscreen
    if (messageVideo.requestFullscreen) {
        messageVideo.requestFullscreen();
    } else if (messageVideo.webkitRequestFullscreen) { // Safari
        messageVideo.webkitRequestFullscreen();
    } else if (messageVideo.mozRequestFullScreen) { // Firefox
        messageVideo.mozRequestFullScreen();
    } else if (messageVideo.msRequestFullscreen) { // IE/Edge
        messageVideo.msRequestFullscreen();
    }
});

closeLightbox?.addEventListener('click', () => {
    // Exit fullscreen if active
    if (document.fullscreenElement || document.webkitFullscreenElement || 
        document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
    
    videoLightbox.classList.add('hidden');
    messageVideo.pause();
    messageVideo.currentTime = 0;
});

// Close lightbox on overlay click
videoLightbox?.querySelector('.lightbox-overlay')?.addEventListener('click', () => {
    // Exit fullscreen if active
    if (document.fullscreenElement || document.webkitFullscreenElement || 
        document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
    
    videoLightbox.classList.add('hidden');
    messageVideo.pause();
    messageVideo.currentTime = 0;
});

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !videoLightbox.classList.contains('hidden')) {
        videoLightbox.classList.add('hidden');
        messageVideo.pause();
        messageVideo.currentTime = 0;
    }
});

// Handle fullscreen exit (when user exits manually)
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && !document.msFullscreenElement) {
        // User exited fullscreen - close lightbox
        if (!videoLightbox.classList.contains('hidden')) {
            videoLightbox.classList.add('hidden');
            messageVideo.pause();
            messageVideo.currentTime = 0;
        }
    }
}

// Fade-in animations for sections
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in-section').forEach(section => {
    fadeInObserver.observe(section);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (letterMusic && !letterMusic.paused) {
        letterMusic.pause();
    }
});
