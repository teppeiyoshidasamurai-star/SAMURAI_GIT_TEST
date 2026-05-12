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


const text2 = "WORKS";
const title2 = document.getElementById('title2');

let index = 0;

function typing2 () {
    if (index < text2.length) {
        title2.textContent += text2[index];
        index++;
        setTimeout(typing2,150);
    }
}

typing2();