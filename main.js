const list =document.querySelector('ul');
const input =document.querySelector('input');
const button =document.querySelector('button');
button.addEventListener('click',()=>{
    if(input.value != ""){
        const d =new Date()
const items=input.value ;
input.value=null;
const listItem=document.createElement('li');
const listText=document.createElement('span');
const listBtn=document.createElement('button');
const listEditbtn=document.createElement('button');
const listTxbtn=document.createElement('button');
listItem.appendChild(listText)
listText.textContent=items  + "  -  " + d.getHours()+":" +d.getMinutes();
listItem.appendChild(listBtn);
listEditbtn.textContent='edit';
listItem.appendChild(listEditbtn);
listEditbtn.addEventListener('click',()=>{
    if(input.value != ""){
    const iteems=input.value ;
    const listTeext=document.createElement('span');
    listTeext.textContent=iteems +"  -  "+ d.getHours() + ":" +d.getMinutes();
  listText.textContent=listTeext.textContent;
    }
    else{
        alert('sorry you must add some text');
    };
    input.focus()
});
listBtn.textContent='delete';
list.appendChild(listItem);
listBtn.addEventListener('click',()=>{
    list.removeChild(listItem)
});
listTxbtn.style.backgroundColor="red";
listTxbtn.textContent='not completed'
listItem.appendChild(listTxbtn);
listTxbtn.addEventListener('click',function main (){
     let a=0
    a++;
        if(a==1){
        listTxbtn.textContent='in processes'
        listTxbtn.style.backgroundColor="Yellow";
        a++
        }
        listTxbtn.addEventListener('click',()=>{
        if(a==2){
            listTxbtn.textContent='completed'
            listTxbtn.style.backgroundColor="green";
            
            }
            
                  
          });
         
         
    });
input.focus()}
else{
    alert('sorry you must add some text');
};a=0;
});
