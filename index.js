const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    form = ev.target
    const personName = document.createElement('li')
    personName.textContent = personForm.personName.value

    const details = document.querySelector('.details')

    details.appendChild(personName)
}

personForm.addEventListener('submit', handleSubmit) 