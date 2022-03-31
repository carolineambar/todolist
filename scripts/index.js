const list = document.querySelector('[data-ul]')
const form = document.querySelector('[data-form]')
const input = document.querySelector('[data-input]')
// quando o formulário for submetido
form.addEventListener('submit', function(event){ 
    // impedir de recarregar a página
    event.preventDefault()
    // cria um novo elemento da lista
    const item = document.createElement('li')
    // adiciona a classe item (html) ao elemento
    item.classList.add('item')
    // adiciona os demais elementos (filhos) do item 
    item.innerHTML = `
        <input type="checkbox" id="${input.value}" class="item__input">
        <label class="item__label" for="${input.value}">
            <i class="item__check"></i>
            ${input.value}
        </label>
        <button class="item__button">
            <img class="item__button-image" src="./assets/7133351.png" alt="Ícone de lixeira para deletar item">
        </button>
    `
    // cria um novo item na lista
    list.appendChild(item)
    // resetar o valor
    input.value = ''
})
