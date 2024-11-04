const card = document.querySelector('[data-card]');

// rotate3D(x, y, z, deg)
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

    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;
    // calculating the mouse cursor coordinates relative to the card center in deltaX and deltaY

    const rx = deltaY / halfHeight;
    const ry = deltaX / halfWidth;
    // calculating the dynamic values for the X and Y arguments of the rotate3D property
    // rotate3D(x, y, z, deg)

    card.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, 20deg)`;

    // console.log(rx,ry)
});

card.addEventListener('mouseleave', () => {});


// console.log(card)