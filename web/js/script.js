
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.style.opacity = window.pageYOffset > 300 ? '1' : '0';
    });
    backToTopBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Заполните все поля!');
            return;
        }
        
if (email.includes('@') && email.includes('.')) {
   
}
        
        alert('Спасибо! Мы свяжемся с вами. 🐾');
        this.reset();
    });
}


function initImageZoom() {
    document.querySelectorAll('.gallery-item img, .breed-card img, .nav-card img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = () => {
            const overlay = document.createElement('div');
            overlay.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;justify-content:center;align-items:center;z-index:2000;`;
            
            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            bigImg.style.cssText = `max-width:90%;max-height:90%;border-radius:10px;`;
            
            overlay.onclick = () => overlay.remove();
            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);
            
            document.onkeydown = (e) => e.key === 'Escape' && overlay.remove();
        };
    });
}


function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {threshold: 0.1});
    
    document.querySelectorAll('.nav-card, .breed-card, .tip-card, .fact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initImageZoom();
    initScrollAnimations();

});
