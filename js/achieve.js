function animateCounts() {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        let target = +counter.getAttribute('data-count');
        let count = 0;
        let increment = target / 100;
        let interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.textContent = Math.floor(count);
        }, 20);
    });
}

window.onload = animateCounts;