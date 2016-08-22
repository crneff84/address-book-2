// Backend
function Contact(first, last, address, city){
  this.firstName =first;
  this.lastName = last;
  this.address=address;
  this.city = city;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;

}

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("#new-first-name").val();
    var inputLastName = $("#new-last-name").val();
    var inputAddress = $("#new-address").val();
    var inputCity = $("#new-city").val();

    var newContact = new Contact(inputFirstName,inputLastName,inputAddress,inputCity);
    $("ul#contacts").append("<li><span class='contact'>" +newContact.fullName()+"</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-city").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $(".city").text(newContact.city);
    });
  })


})
