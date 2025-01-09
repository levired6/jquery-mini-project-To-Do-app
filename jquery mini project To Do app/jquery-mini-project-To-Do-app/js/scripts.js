
function newItem() {

//javascript
 //1. Adding a new item to the list of items:
 let li = $('<li></li>');
 let inputValue = $('#input').val();
 li.append(inputValue);

 if (inputValue === '') {
    alert("You must write something!");
 } else {
    $('#list').append(li);
 }

 //2. Crossing out an item
 function crossOut() {
  li.toggleClass("strike");
 }

 li.on("dblclick", function crossOut(){
   li.toggleClass("strike");
 });

 //3. Adding a delete button "X":
 let crossOutButton = $('<crossOutButton></crossOutButton>');
 crossOutButton.append(document.createTextNode('X'));
 li.append(crossOutButton);

 crossOutButton.on("click", deleteListItem);
 function deleteListItem() {
    li.addClass("delete");
 }

 //4. Reordering the items:
 $('#list').sortable();
 
}

//enable entering while pressing "Enter"
$('#input').on('keypress', function(event){
   if(event.which === 13){
      event.preventDefault();
      newItem();
   }
});