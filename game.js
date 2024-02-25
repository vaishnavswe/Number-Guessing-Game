let min = 0;
let max = 10000
let value;
// <div id="input_div_id"><input type="text" id="input_id"></div>

document.getElementById("start_button_div").onclick = function() {
    document.getElementById("start_button_div").style.display = "none"
    document.getElementById("buttons_id").style.display = "block"
    value = (max + min)/2
    document.getElementById("output_id").innerHTML = Math.floor(value);
}

document.getElementById("smaller_id").onclick = function() {
   max = value;
   value = (max + min)/2
    document.getElementById("output_id").innerHTML = Math.floor(value);

}

document.getElementById("bigger_id").onclick = function() {
    min = value;
    value = (max + min)/2
    document.getElementById("output_id").innerHTML = Math.floor(value);
 
}


document.getElementById("correct_id").onclick = function() {
    document.getElementById("smaller_id").style.display = "none"
    document.getElementById("bigger_id").style.display = "none"
    document.getElementById("output_id").innerHTML = "Good Game!"
    document.getElementById("correct_id").style.display = "none"
    document.getElementById("reset_id").style.display = "block"
}


document.getElementById("resetBtn_id").onclick = function() {
    window.location.reload();
}