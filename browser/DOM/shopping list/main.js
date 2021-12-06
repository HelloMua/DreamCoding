const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    // 2. 새로운 item을 만듦 (텍스트 + 삭제 버튼)
    const item = createItem(text);

    // 3. items 컨테이너 안에 새로 만든 item을 추가함
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center' });

    // 5. 인풋을 초기화 함
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const itemDivier = document.createElement('div');
    itemDivier.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivier);
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});