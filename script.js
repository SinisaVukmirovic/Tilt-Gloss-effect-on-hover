const card = document.querySelector('[data-card]');

// rotate3D property explanation - https://youtu.be/zAxXE9vZWPo?t=177
card.addEventListener('mousemove', (e) => {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    // clientX and clientY properties define the coordinates of the mouse pointer, relative to the browser's visible viewport

    const cardRect = card.getBoundingClientRect();
    // getBoundingClientRect method return an object of card(in this case) properties, like width and height, top and left, which we need for futher calculations
    
    const halfWidth = cardRect.width / 2;
    const halfHeight = cardRect.height / 2;

    const cardCenterX = cardRect.left + halfWidth;
    const cardCenterY = cardRect.top + halfHeight;

    console.log(cardCenterX,cardCenterY)
});

card.addEventListener('mouseleave', () => {});


// console.log(card)