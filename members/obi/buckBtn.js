const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
    const scrollValue = document.scrollingElement.scrollTop;
    if (scrollValue >= 300) {
        backBtn.style.display = 'inline';
    }
    else {
        backBtn.style.display = 'none';
    }
});

const hako = document.querySelectorAll(".hako");

window.addEventListener("scroll", () => {
    hako.forEach((item) => {
        const position = item.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
});