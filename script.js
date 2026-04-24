let currentPage = 1;

function goToAnniversary() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
    currentPage = 3;
    
    // Typewriter effect
    const finalMsg = document.getElementById('final-message');
    const loveDecl = document.querySelector('.love-declaration');
    finalMsg.innerHTML = '';
    
    setTimeout(() => {
        typeWriter('I LOVE YOUUUUHHHH MY WIFEY! LOVEUUUU SO MUCH!', loveDecl, 0);
    }, 1000);
}

function restart() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    document.getElementById('photoContainer').style.display = 'none';
    document.getElementById('explosion').innerHTML = '';
    document.querySelector('.love-declaration').innerHTML = '';
    document.getElementById('final-message').textContent = 'At last, only want to convey that...';
    currentPage = 1;
    
    setTimeout(() => {
        const heart = document.getElementById('bigHeart');
        heart.style.transform = 'scale(1)';
        heart.style.animation = 'heartbeat 1.5s ease-in-out infinite';
    }, 100);

function enterHeart() {
    const heart = document.getElementById('bigHeart');
    heart.style.animation = 'none';
    heart.style.transform = 'scale(0)';
    
    setTimeout(() => {
        heartBoom();
    }, 500);
}

function heartBoom() {
    const explosion = document.getElementById('explosion');
    const emojis = ['💖', '💕', '💋', '😘', '❤️', '💗', '💝', '💞', '💓', '💘'];
    
    for(let i = 0; i < 100; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDelay = Math.random() * 0.5 + 's';
            explosion.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }, i * 50);
    }
    
    setTimeout(() => {
        showPhoto();
    }, 3000);
}

function showPhoto() {
    document.getElementById('photoContainer').style.display = 'block';
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

function goToAnniversary() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
    
    // Typewriter effect for final message
    const finalMsg = document.getElementById('final-message');
    const loveDecl = document.querySelector('.love-declaration');
    finalMsg.innerHTML = '';
    
    setTimeout(() => {
        typeWriter('I LOVE YOUUUUHHHH MY WIFEY! LOVEUUUU SO MUCH!', loveDecl, 0);
    }, 1000);
}

function typeWriter(text, element, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, element, i + 1), 100);
    }
}

function restart() {
    document.getElementById('page3').classList.remove('active');
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page1').classList.add('active');
    document.getElementById('photoContainer').style.display = 'none';
    document.getElementById('explosion').innerHTML = '';
    document.querySelector('.love-declaration').innerHTML = '';
    document.getElementById('final-message').textContent = 'At last, only want to convey that...';
    
    // Reset heart
    setTimeout(() => {
        const heart = document.getElementById('bigHeart');
        heart.style.transform = 'scale(1)';
        heart.style.animation = 'heartbeat 1.5s ease-in-out infinite';
    }, 100);
}
