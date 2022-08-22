

let btn = document.getElementById("btn");

btn.addEventListener('click', event => {
    myfunction();
  });

function myfunction() {

    const x = document.getElementById('mytexta').value;
    const splitlines = str => str.split(/\r?\n/);
    //const splitlines = str => str.split(' ');
    const pasting = splitlines(x)
    console.log(pasting)

    for(let i = 0 ; i < pasting.length; i++){
        
        const numConversion = Number(pasting[i])
       console.log(numConversion)
       console.log(typeof(numConversion))
       document.getElementById("demo").innerHTML= numConversion;
        var li = document.createElement("li");
        var text = document.createTextNode(pasting[i]);
        li.appendChild(text);
        document.getElementById("myUl").appendChild(li);
       
    }
   
    
    
    
    

    //console.log(pasting)
    
   // console.log(typeof(numConversion))
    


    


}