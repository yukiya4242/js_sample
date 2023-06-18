let a = ["sanday", "monday", "tuesday", 7];
a.forEach(function(element) {
  console.log(element);
})

let soliloquy = "sanday, monday, tuesday, wednesday";
Array.from(soliloquy).forEach(function(character){
  console.log(character);
});
