(() => {
    const getNotes = async () => {
        const resposta = await fetch('http://localhost:3000/notes')
        const notes = await resposta.json()
        return notes
    }

    const createNote = async (note) => {
        const request = await fetch('http://localhost:3000/notes', {
            headers: {
                'Content-Type': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(note)
        })
        const data = await request.json()
        return data
    }

    const deleteItem = (id) => {
        fetch(`http://localhost:3000/notes/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }, 
            method: 'DELETE',
        })
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
    
    const initTodo = async () => {
        const list = document.querySelector('[data-ul]')
        const form = document.querySelector('[data-form]')
        const input = document.querySelector('[data-input]')

        const notes = await getNotes()
        notes.forEach((note) => {
            const item = createItem(note.value, note.id)
            list.appendChild(item)
        })

        // quando o formulário for submetido
        form.addEventListener('submit', function(event){ 
            // impedir de recarregar a página
            event.preventDefault()
            const {id} = createNote({
                value: input.value
            })
            const item = createItem(input.value, id)
            
            // cria um novo item na lista
            list.appendChild(item)
            // resetar o valor
            input.value = ''
        })
    }
    initTodo()
})()
