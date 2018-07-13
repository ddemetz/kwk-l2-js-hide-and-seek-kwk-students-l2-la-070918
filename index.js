//Code your solution here
function getFirstSelector (selector){
  return document.querySelector (selector);
}

function nestedTarget(){
  return document.querySelector ('#nested .target');
}

function increaseRankBy(n){
  
const rankedList =  document.querySelectorAll ('.ranked-list');

  for (let i = 0; i < 4; i++){
    rankedList[i].parseInt = (i + 1);
  }
}


function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}