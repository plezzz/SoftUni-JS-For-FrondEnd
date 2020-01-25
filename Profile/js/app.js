function solve() {
    const teamsPositions = {
        support: ['Tech Support', 'Medical Support', 'Assistant Support'],
        crm: ['Community Manager', 'Customer Care Manager', 'Lead Administrative Officer'],
        marketing: ['PR Manager', 'Social Media Manager', 'Marketing Specialist'],
        development: ['Junior Developer', 'Regular Developer', 'Senior Developer'],
        other: ['Team Lead', 'Regular Employee', 'Intern']
    };

    const defaultValue = ['Pesho', 'Peshov', '555-333-4545', '9311124003'];

    let inputField = document.querySelectorAll('#personal-info p');
    inputField.forEach(el =>
        el.addEventListener('click', updateField)
    );

    function updateField() {
        let value = this.textContent;
        this.setAttribute("class", 'd-none');
        let input = document.createElement('input');
        input.classList.add('form-control');
        input.value = value;
        if (this.parentElement.children[0].textContent === 'UCL')
            input.setAttribute('type', 'number');
        this.parentElement.appendChild(input);
        input.addEventListener('keypress', saveChanges);
    }

    function saveChanges(e) {
        if (e.key === 'Enter') {
            this.parentElement.children[1].setAttribute('class', 'text-dark');
            this.parentElement.children[1].textContent = this.value;
            this.parentElement.removeChild(this)
        }
    }

    let section = document.getElementById('team-and-position');
    section.addEventListener('click', updatePosition);

    function updatePosition() {
        let team = document.querySelector('input[name="team"]:checked').value;
        let radios = document.getElementsByName('position');
        radios.forEach((el, i) => {
            el.nextSibling.textContent = teamsPositions[team][i]
        })
    }

    let button = document.getElementById('btn');
    button.addEventListener('click', reset);

    function reset() {
        inputField.forEach((el, i) => {
            el.textContent = defaultValue[i]
        })
    }
}
