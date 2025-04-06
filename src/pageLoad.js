export const onPageLoad = () => {
    
    const content = document.getElementById('content');
    addRestaurantHeading(content);
    addStoreHours(content);
    addLocation(content);
    
}

const addRestaurantHeading = (content) => {
    const h1Elem = document.createElement('h1');
    const h1Text = document.createTextNode("Mini's Restaurant");
    h1Elem.appendChild(h1Text);
    content.appendChild(h1Elem);
}

const addStoreHours = (content) => {
    const heading = document.createElement('h2');
    const headingText = document.createTextNode("Restaurant Hours");
    heading.appendChild(headingText);
    content.appendChild(heading);
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    for (let i = 0; i < 7; i++) {
        addHours(content, daysArray[i])
    }
}

const addHours = (content, day) => {
    

    const pElem = document.createElement('p');
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            const text = document.createTextNode(day + ": 9am - 9pm");
            pElem.appendChild(text);
            
            break;
        case 'Saturday':
        case 'Sunday':
            const sunText = document.createTextNode(day + ": 9am - 10pm");
            pElem.appendChild(sunText);
            break;
        case 'default':
            break;
    }
    content.appendChild(pElem);

}

const addLocation = (content) => {
    const h2Loc = document.createElement('h2');
    const locHeading = document.createTextNode('Restaurant Location');
    h2Loc.appendChild(locHeading);
    content.appendChild(h2Loc);

    const h2TextEle = document.createElement('p');
    const locText = document.createTextNode('123 Century Ave, Billinghum ON');
    h2TextEle.appendChild(locText);
    content.appendChild(h2TextEle);
}