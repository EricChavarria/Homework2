const App = {  
    init() {
            const personForm = document.querySelector('form')
            personForm.addEventListener('submit', this.handleSubmit.bind(this))
        },    

    removeButtonCreate() {
        const button = document.createElement("button")
        //button.id = nameForm.personName.value
        button.textContent = "Remove"
        button.addEventListener('click', this.removeName)
        return button
    },

    removeName(ev) { 
        const name = ev.target.parentNode 
        const details = document.querySelector('.details')
        details.removeChild(name)
    },

    promoteButtonCreate() {
        const button = document.createElement("button")
        button.textContent = "Promote"
        button.addEventListener('click', this.promote)
        return button
    },   

    promote(ev) {
        ev.target.parentNode.style.background = 'blue'
    }, 
    
    handleSubmit(ev) {
        ev.preventDefault()
        form = ev.target
        const nameForm = document.querySelector('form')
        const personName = document.createElement('li')
        personName.textContent = nameForm.personName.value + "    "
        const removeButton = this.removeButtonCreate(nameForm)
        personName.appendChild(removeButton)
        const promoteButton = this.promoteButtonCreate()
        personName.appendChild(promoteButton)
        const details = document.querySelector('.details')
        details.insertBefore(personName, details.firstChild)
        //document.getElementById(button.id).addEventListener('click', this.removeName(button.id))
        },
} 

App.init()