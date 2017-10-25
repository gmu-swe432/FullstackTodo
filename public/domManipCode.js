$('#new').click(function()
{
    $('#todoItems').append(
        '<div class="todoItem"><input type="text"/><button onclick="deleteItem(this.parentElement)">&#x2716;</button></div>'
    );
});

function deleteItem(divElem)
{
    divElem.parentElement.removeChild(divElem);
}


