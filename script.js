const card = document.querySelector('[data-card]');
const gloss = document.querySelector('[data-gloss]');

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

    // calculating the distance from the center with pythagor theorim
    const distanceFromCenter = Math.sqrt(Math.pow(deltaX, 2) + (Math.pow(deltaY, 2)));
    // calculating the maximum distance from the center and the furthest edge
    const maximumDistance = Math.max(halfWidth, halfHeight);
    // calculating the dynamic degree of the rotation angle
    const degrees = (distanceFromCenter * 10) / maximumDistance;
    // we multiply by 10 to get at least 10 degree angle, since without the value could be very small

    card.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, ${degrees}deg)`;

    // gloss effect
    gloss.style.transform = `translate(${-ry * 100}, ${-rx * 100}) scale(2.4)`;
    // we use ry for X and rx for Y values because we want gloss effect to mirror the mouse movement
    gloss.style.opacity = (distanceFromCenter * 0.6) / maximumDistance;
});

card.addEventListener('mouseleave', () => {
    card.style = null;
    // reseting the applied styles when the mouse leaves card

    gloss.style.opacity = null;
});


// console.log(card)