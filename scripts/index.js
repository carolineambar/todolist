(() => {
    const deleteItem = (id) => {
        const item = document.querySelector(`[data-id="${id}"]`)
        item.remove()
    }
    
    const createItem = (value, id) => {
        // cria um novo elemento da lista
        const item = document.createElement('li')
        // adiciona a classe item (html) ao elemento
        item.classList.add('item')
        item.setAttribute('data-id', id)
        // adiciona os demais elementos (filhos) do item 
        item.innerHTML = `
            <input type="checkbox" id="${id}" class="item__input">
            <label class="item__label" for="${id}">
                <i class="item__check"></i>
                ${value}
            </label>
        `
        const button = document.createElement('button')
        button.classList.add('item__button')
        button.innerHTML = `
            <img class="item__button-image" src="./assets/7133351.png" alt="Ícone de lixeira para deletar item">
        `
        button.addEventListener('click', () => deleteItem(id))
        item.appendChild(button)

        return item
    }
    
    const initTodo = () => {
        const list = document.querySelector('[data-ul]')
        const form = document.querySelector('[data-form]')
        const input = document.querySelector('[data-input]')
        let count = 0
        // quando o formulário for submetido
        form.addEventListener('submit', function(event){ 
            // impedir de recarregar a página
            event.preventDefault()
            const item = createItem(input.value, count)
            count++
            
            // cria um novo item na lista
            list.appendChild(item)
            // resetar o valor
            input.value = ''
        })
    }
    initTodo()
})()
