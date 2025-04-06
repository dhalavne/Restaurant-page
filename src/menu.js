export const menu = () => {
    const content = document.getElementById('content');
    const contentEle = document.createElement('div');
    contentEle.id = 'childDiv';
    content.appendChild(contentEle);

    addMenuHeading(contentEle);
    displayBeverages(contentEle);
}

const addMenuHeading = (content) => {
    const h1Ele = document.createElement('h1');
    const h1text = document.createTextNode('Menu');
    h1Ele.appendChild(h1text);
    content.appendChild(h1Ele);

}

const displayBeverages = (content) => {
    const bevDiv = document.createElement('div');
    bevDiv.className = 'bev';
    const item = document.createElement('h2');
    const coffee = document.createTextNode('Coffee');
    item.id = 'coffeeHeading';
    item.appendChild(coffee);
    const bevDesc = document.createElement('div');
    bevDesc.id = 'coffee';
    const bevPara = document.createElement('p');
    const desc = document.createTextNode('A warm, sweet coffee made with the highest quality honey and a bit of lemon to start your day off right!');
    bevPara.appendChild(desc);
    const bevPrice = document.createElement('p');
    const price = document.createTextNode('$6.50');
    bevPrice.appendChild(price); 
    bevDesc.appendChild(bevPara);
    bevDesc.appendChild(price);
    bevDiv.appendChild(item);
    bevDiv.appendChild(bevDesc);
    content.appendChild(bevDiv);

}