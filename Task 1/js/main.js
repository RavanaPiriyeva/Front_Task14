let rightList = document.getElementById('list2');
let leftList =  document.getElementById('list1');
let mainList =  document.getElementById('list3');
let allList =  document.getElementById('allList');

let leftListItems = document.querySelectorAll('#list1 li');
let rightListItems = document.querySelectorAll('#list2 li');


leftListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})
rightListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})
leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})
mainList.addEventListener('dragover',function(e){
    e.preventDefault();
})

rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(li)
})
leftList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(li)
})
mainList.addEventListener('drop',function(e){

    let pElement = document.createElement('p');
    pElement.classList.add('add-p');
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    console.log(li.innerText);
    pElement.innerText=li.innerText
    mainList.appendChild(pElement);
    li.remove();
})