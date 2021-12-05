const vertical = document.querySelector('.vertical');           // 세로축
const horizontal = document.querySelector('.horizontal');       // 가로축
const target = document.querySelector('.target');               // 이미지
const tag = document.querySelector('.tag');                     // 글자

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    console.log(targetRect);
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;


    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x}, ${y}`);

        // left와 top은 layout부터 paint, composition이 발생하기 때문에 비효율적임
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;

        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;
        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;

        tag.innerHTML = `${x}px, ${y}px`;
    })
});