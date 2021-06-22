// ////Part 1
//document.write("<h1>Welcome to the DOM Manipulation!</h1>");

// // ////Part 2
// // Display the Names of Programming Languages in UL

// //. Java
// //. Python
// //. C#
// //. SQL
// //. HTML

// //1. Create UL element
// const ul=document.createElement("ul");
// //2. Create li element
// const li1=document.createElement("li");
// const li2=document.createElement("li");
// const li3=document.createElement("li");
// const li4=document.createElement("li");
// const li5=document.createElement("li");
// const li6=document.createElement("li");
// //3. Add value to li
// li1.innerHTML="Java";
// li2.innerHTML="Python";
// li3.innerHTML="C#";
// li4.innerHTML="Html";
// li5.innerHTML="SQL";
// li6.innerHTML="PHP";
// //4. add child element to UL
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// ul.appendChild(li5);
// ul.appendChild(li6);
// //5.append Ul on index.html
// const root=document.getElementById("root");
// root.appendChild(ul);

// // ////Part 3
// // Display the Names of Programming Languages in UL

// //. Java
// //. Python
// //. C#
// //. SQL
// //. HTML
// //. PHP

// // //1. Create UL element
// const ul=document.createElement("ul");
// // //2. Create li element
// // //3. Add value to li
// // //4. add child element to UL
// const languages=["Java","Python","C#","SQL","HTML","PHP"];
// for(i in languages){
//     const li=document.createElement("li");// step2
//     li.innerText=languages[i];//step 3
//     ul.appendChild(li);//step 4
// }
// // //5.append Ul on index.html
// const root=document.getElementById("root");
// root.appendChild(ul);

//Part 4
const languages = new Array();
const ul = document.createElement("ul");
function onClick(event) {
    const language = document.getElementById("language").value;
    languages.push(language);
    console.log(languages);
    updateList(languages.length-1);
}

function updateList(i){
    const li = document.createElement("li");// step2
    li.innerText = languages[i];//step 3
    ul.appendChild(li);//step 4    
// // //5.append Ul on index.html
    const root=document.getElementById("root");
    root.appendChild(ul);
}
