const vertical = document.querySelector('.vertical');           // 세로축
const horizontal = document.querySelector('.horizontal');       // 가로축
const target = document.querySelector('.target');               // 이미지
const tag = document.querySelector('.tag');                     // 글자

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y}`);

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;

    tag.innerHTML = `${x}px, ${y}px`;
})