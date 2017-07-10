function tax() {
  var value = $(".price").val();
  var tax = 0.08;
  return value * tax;
}
