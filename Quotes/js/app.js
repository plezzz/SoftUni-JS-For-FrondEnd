function solve() {
    let addBtn = document.getElementById('btn');
    addBtn.addEventListener("click", addQuote);

    function addQuote() {
        let quote = document.getElementById('quote');
        if (quote.value !== "") {
            let author = document.getElementById('author');
            let image = document.getElementById('image');
            let add = document.querySelector("#quotes > div > div.col-6.border-right.border-dark");

            let divOne = htmlFabric('div', 'card mb-3');
            divOne.style = 'max-width: 540px;';
            let divTwo = htmlFabric('div', 'row no-gutters');
            let divThree = htmlFabric('div', 'col-md-4');
            let divFour = htmlFabric('div', 'col-md-8');
            let divFive = htmlFabric('div', 'card-body');
            let pOne = htmlFabric('p', 'card-text');
            pOne.textContent = quote.value;
            let pTwo = htmlFabric('p', 'font-italic text-secondary');
            pTwo.textContent = author.value;
            let btn = htmlFabric('button', 'btn btn-dark');
            btn.setAttribute('type', 'button');
            btn.textContent = '★';
            btn.addEventListener('click', move);

            let img = htmlFabric('img', 'card-img m-1');
            img.setAttribute('src', `${image.value}`);
            img.setAttribute('alt', '...');

            divThree.appendChild(img);
            divFive.append(pOne, pTwo, btn);
            divFour.appendChild(divFive);
            divTwo.append(divThree, divFour);
            divOne.appendChild(divTwo);
            add.appendChild(divOne);

            author.value = '';
            image.value = '';
        }
        quote.value = '';
    }

    function htmlFabric(arg, addClass) {
        let el = document.createElement(arg);
        el.className = addClass;
        return el
    }

    function move() {
        let quote = this.parentElement.parentElement.parentElement.parentElement;
        let add = document.getElementById('myFavorite');
        add.appendChild(quote);
    }
}
