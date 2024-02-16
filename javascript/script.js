function scrollToSection() {
    var targetSection = document.getElementById('services');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function smoothScrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    function scrollToTop(timestamp) {
        var duration = 500;
        var easing = function (t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        var elapsed = Math.min(1, (timestamp - start) / duration);
        var easedProgress = easing(elapsed);

        document.documentElement.scrollTop = currentScroll * (1 - easedProgress);
        document.body.scrollTop = currentScroll * (1 - easedProgress);

        if (elapsed < 1) {
            window.requestAnimationFrame(scrollToTop);
        }
    }

    var start = performance.now();
    window.requestAnimationFrame(scrollToTop);
}

window.onscroll = function () {
    var scrollBtn = document.querySelector('.scroll-up-btn');
    
    var scrollTrigger = 300;

    if (document.body.scrollTop > scrollTrigger || document.documentElement.scrollTop > scrollTrigger) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const orderSection = document.getElementById('orderSection');
    const loginBtn = document.getElementById('home-btn');

    loginBtn.addEventListener('click', function () {
        orderSection.classList.toggle('hidden');
    });

    signupBtn.addEventListener('click', function () {
        orderSection.classList.toggle('hidden');
    });
});