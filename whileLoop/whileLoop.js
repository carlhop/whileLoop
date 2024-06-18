//newFunk is called when the submit button is clicked in the HTML document
function newFunk(){
  let text = "";
  let num = document.getElementById('input1').value
  let i = 0;
  while (num < 100) {
    text += "<br>You owe $" + num + " per hour total";
    num++;
  }
  document.getElementById("workout").innerHTML = text;
}
