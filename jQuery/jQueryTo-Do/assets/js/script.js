$(document).ready(function(){
  // line-through the task
  $('ul').on("click", "li", function() {
    $(this).toggleClass("completed");
  })


// remove the certain task from the database. 
  $('ul').on("click", "span", function(e) {
    $(this).parent().fadeOut(1000, function(){
      $(this).remove()
    })
    // stop from selecting other element other than span.
    e.stopPropagation();
  });

  //  delete all to-dos by pressing the button
  $('#delete').on("click", function() {
    $("li").fadeOut(1000, function(){
      $(this).remove()
    })
  });

  
  // Add New To-Do via button

  $("#add").on("click", function() {
      const todoText = $("input[type='text']").val();
     $("input[type='text']").val("");
     // create a new li and add to ul
     $("ul").append("<li><span><i class='fa-solid fa-trash-can'></i></span> " + todoText + "</li>")
    })

// Add New To-Do via enter button
  $("input[type='text']").on("keypress", function(e){
    if(e.which === 13) {
     const todoText = $(this).val();
     $(this).val("");
     // create a new li and add to ul
     $("ul").append("<li><span><i class='fa-solid fa-trash-can'></i></span> " + todoText + "</li>")
    }
    
     
})
 // hide "TO-DO LIST" text and slide-down by "ADD NEW TO-DO"
  // Pressing "ADD NEW TO-DO"
  $("#addnewTodo").on("click", function() {
    $("input[type='text']").fadeToggle(500);
    $("#add").fadeToggle(500);
  })
})