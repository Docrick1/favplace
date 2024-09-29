var ghanaimg;

// Describe this function...
function next() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  ghanaimg.push(ghanaimg.shift());
  let element_ghana2 = document.getElementById('ghana');
  element_ghana2.setAttribute("src", ghanaimg[0]);
}

// Describe this function...
function previous() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  ghanaimg.unshift(ghanaimg.pop());
  let element_ghana3 = document.getElementById('ghana');
  element_ghana3.setAttribute("src", ghanaimg[0]);
}


ghanaimg = ['https://cdn.britannica.com/21/128421-050-BD03AB22/Accra-Ghana.jpg?w=300', 'https://cdn.britannica.com/87/13587-004-BB82FE25/Akosombo-Dam-Volta-River-Ghana.jpg?w=300', 'https://cdn.britannica.com/20/192420-050-F935F818/Canopy-Kakum-National-Park-Accra-Ghana-West-Africa.jpg?w=300'];
let element_ghana = document.getElementById('ghana');
element_ghana.setAttribute("src", ghanaimg[0]);


document.getElementById('next').addEventListener('click', (event) => {
  next();

});

document.getElementById('prev').addEventListener('click', (event) => {
  previous();

});