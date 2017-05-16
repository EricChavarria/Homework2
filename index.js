const App = {  
    init() {
            const personForm = document.querySelector('form')
            personForm.addEventListener('submit', this.handleSubmit.bind(this))
        },    
    
    handleSubmit(ev) {
        ev.preventDefault()
        form = ev.target
        const nameForm = document.querySelector('form')
        const personName = document.createElement('li')
        personName.textContent = nameForm.personName.value
        const details = document.querySelector('.details')
        details.insertBefore(personName, details.firstChild)
        },
} 

App.init()