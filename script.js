var inputs=document.querySelectorAll(".input")
console.log(inputs);

function handleChange(e){
   var suffix=this.dataset.sizing || ""
   document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
   // The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block. 
}
inputs.forEach((input)=>{
    input.addEventListener("change",handleChange)
    input.addEventListener("mousemove",handleChange)
})
var obj={my:"vishal"}
console.log(obj.setProperty(my,"yash"))