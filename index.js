function submitform(event)
{
    event.preventDefault();
    console.log(event);
    let a={
        amount:document.getElementById('amount').value,
        description:document.getElementById('description').value,
        
    }
    console.log(a);
    localStorage.setItem(a.description,a);
    show(a);
}

function show(a)
{
    console.log(a)
    const parent=document.getElementById('list')
    const child=document.createElement('li')
    var btn=document.createElement('button')
    
    child.textContent=a.description+ "-"+a.amount;
    btn.appendChild(document.createTextNode('Delete'))
    btn.onclick=()=>{
        localStorage.removeItem(a.description)
        parent.removeChild(child)
    }
    var btn1=document.createElement('button')
    btn1.appendChild(document.createTextNode('EDIT'))
    btn1.onclick=()=>{
        
        localStorage.removeItem(a.description)
        parent.removeChild(child)
        document.getElementById('amount').value=a.amount;
        document.getElementById('description').value=a.description;
       
    }
    child.appendChild(btn1)
    child.appendChild(btn);
    parent.appendChild(child);
}
