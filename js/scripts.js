function newItem(){

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.appendChild(inputValue);

  if (inputValue === '') {
    alert("You need to write something first!")
  } else {
    $('#list').appendChild(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dbclick", function crossOut() {
    li.toggleClass("strike");
  });

    let crossOutButton = $("<crossOutButton></crossOutButton");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
      function deleteListItem() {
        li.addClass("delete");
      }

      $('#list').sortable();
  }

  
// Javascript

// Adds new item to list of items

  /*
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

// Alert for not submitting writing

  if (inputValue === '') {
    alert("You need to write something first!");
  } else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  }

// Crosses out items

  function crossOut() {
    li.classList.toggle("strike");
  }

  li.addEventListener("dblclick",crossOut);

// Delete button

  let crossOutButton = document.createElement("crossOutButton");

  crossOutButton.appendChild(document.createTextNode("X"));
 	  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);

//Adding Class Delete

  function deleteListItem(){
    li.classList.add("delete")
  }

// Lets you reorder items
    $('#list').sortable();

}
*/
