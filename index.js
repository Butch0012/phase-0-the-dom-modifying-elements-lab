// Write your code here!
const element = document.createElement("div");//CREATING ELEMENTS AND APPENDING THEM
document.body.append(element);
 const ul =document.createElement("ul");
 for (i=0;i<3;i++){
    const li= document.createElement("li");
    li.textContent =(i+1).toString();
    ul.append(li)
 }
 element.append(ul)

 const element2 = document.getElementById("main");//changing the element's properties using DOM
element2.style.height = "300px";
element2.style.backgroundColor = "#27647B";

element2.textContent = "You've changed what's on the screen!";//changing the element's properties using DOM
element2.style.fontSize = "24px";
element2.style.marginLeft = "30px";
element2.style.lineHeight = 2;

//CHANGING THE CLASS USING CLASSNAME
element2.className = "pet-listing dog";

element2.remove();//remove main element


const newHeader=document.createElement("h1");// Create a new h1 element
newHeader.id="victory";
newHeader.innerHTML="Elnathan Mburu is the champion"// Set the innerHTML of the new h1 element
document.body.append(newHeader);// Append the new h1 element to the document's body


