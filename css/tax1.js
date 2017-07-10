$(document).ready(function() {
  $(".car").click(function(){
    alert("Your tax on this car would be: $" + this.value * 0.08)
  });
});
