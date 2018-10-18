var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    // esse comando exclui todos os valores que ja tem na lista para não duplicar os dados que já tem, sempre que adicionar um item novo.
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }

}

renderTodos();

// Adiciona um novo item na lista
function addTodo() {
    var todoText = inputElement.value;

    // Push adicona um novo item no final da lista
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

// Adiciona um novo item ao clica no botão 'Adicionar'
 buttonElement.onclick = addTodo;

 function deleteTodo(pos){
     // O método Splice remove uma quantidade de item no array baseado numa quantidade passada
     todos.splice(pos, 1);
     renderTodos();
 }