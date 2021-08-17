let plant_section = document.getElementById('plants');


plants.forEach( item => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let innerDiv = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    img.setAttribute('src',item.src);
    img.setAttribute('alt',item.alt);

    div.classList.add('item');
    innerDiv.classList.add('item-info','flex');

    h3.innerText = item.name;
    p.innerText = item.price;

    innerDiv.appendChild(h3);
    innerDiv.appendChild(p);

    div.appendChild(img);
    div.appendChild(innerDiv);

    plant_section.appendChild(div);

});

