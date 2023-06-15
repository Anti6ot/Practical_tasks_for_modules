const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
]

class CustomSelect {
    #currentSelectedOption

    constructor(id, options) {
        this.id = id
        this.options = options
        this.#currentSelectedOption = {}
    }

    get selectedValue() {
        return this.#currentSelectedOption
    }

    #createDropdown(container) {
        const dropdownBlock = document.createElement('div')
        dropdownBlock.className = `select-dropdown select-dropdown--${this.id}`
        container.append(dropdownBlock)

        const btn = document.createElement('button')
        btn.className = `select-dropdown__button select-dropdown__button--${this.id}`
        dropdownBlock.append(btn)

        const span = document.createElement('span')
        span.className = `select-dropdown__text select-dropdown__text--${this.id}`
        span.textContent = 'Выберите элемент'
        btn.append(span)

        const List = document.createElement('ul')
        List.className = `select-dropdown__list select-dropdown__list--${this.id}`
        dropdownBlock.append(List)

        this.options.forEach(item => {
            const Item = document.createElement('li')
            Item.className = 'select-dropdown__list-item'
            Item.dataset.value = item.value
            Item.textContent = item.text
            List.append(Item)
        })
    }

    #selectingItem() {
        const dropdownBtnDOM = document.querySelector(
            '.select-dropdown__button'
        )
        const dropdownListDOM = document.querySelector('.select-dropdown__list')

        dropdownBtnDOM.addEventListener('click', () => {
            dropdownListDOM.classList.toggle('active')
        })

        dropdownListDOM.addEventListener('click', event => {
            const isListItem = event.target.closest('.select-dropdown__list-item')
            if (isListItem) {
                const currentValue = Number(event.target.dataset.value)
                const obj = options.find(item => item.value === currentValue)
                this.#currentSelectedOption = obj

                const dropdownText = document.querySelector('.select-dropdown__text')
                dropdownText.textContent = obj.text

                const allItems = document.querySelectorAll(
                    '.select-dropdown__list-item'
                )
                allItems.forEach(item => item.classList.remove('selected'))
                event.target.classList.add('selected')
            }
        })
    }

    render(container) {
        this.#createDropdown(container)
        this.#selectingItem()
    }
}


const customSelect = new CustomSelect('123', options)
const mainContainer = document.querySelector('#container')
customSelect.render(mainContainer)