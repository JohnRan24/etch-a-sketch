for (i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.id = "div_id";
    div.className = "div_class";
    div.classList.add('div_class');
    div.style = "background-color: red;";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.border = "solid black";
    document.getElementById('container').appendChild(div);
  
    div.addEventListener('mouseover', () => {
         div.style.backgroundColor = 'blue';
        });

       div.addEventListener('mouseout', () => {
         div.style.backgroundColor = 'red';
        });
  
}