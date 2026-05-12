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

const text = "MY PROFILE";
const title = document.getElementById('title1');


let index = 0;

function typing () {
    if (index < text.length) {
        title.textContent += text[index]; //次の文字を1文字ずつ足していく
        index++;
        setTimeout(typing,150); //150ミリ秒後に文字追加
    }
}

typing();
