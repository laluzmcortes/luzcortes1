/*
$('li').on('mouseover', () => {
  $('li').addClass('highlighted')
})
$('li').on('mouseleave', () => {
  $('li').removeClass('highlighted')
})
*/


/*The following instructions give the same results than the previous ones-just different syntaxis*/

$('li').on('mouseover', function highlight(){ // notice: no arrow function!
  $(this).addClass('highlighted')
})
$('li').on('mouseleave', function highlight(){
  $(this).removeClass('highlighted')
})

/*Array to change the form to present the contact information in the website*/
var contactArray = ["Luz Cortes-Contact Form", "Email:","laluzmcortes@gmail.com", "&copy; Copyright 2018"]


function appendStrings{for (i = 0; i < contactArray.length; i++)) {
    $("#contact-list").append("<li>" + contactArray[i] + "</li>");)
  }}

/*for loop wk4mod4 that worked*/
for (i = 0; i < contactArray.length; i++) {
    $("#contact-list").append("<li>" + contactArray[i] + "</li>");
}
