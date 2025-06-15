console.log(document)
function showName () {
    let name = document.getElementById('name').value;
    console.log(name);
    let li = document.createElement('li')
    let listElement = document.getElementById('listName')
    listName.appendChild(li).innerHTML = name;
     const listOfName = 10
     let currentCount = listElement.getElementsByTagName('li').length;

    if (currentCount <= 10) {
        console.log('print names')

    } else if (currentCount >=10) {
        alert('Exceeds number of guests')
    } else {
        console.log('invalid input')
    }

let time = document.getElementById('time').value
console.log(time)
const list = document.createElement('list')
 let timeJoined = document.getElementById('listName')
 timeJoined.appendChild(list).innerHTML = ` `


 li.textContent = `${name} was added at ${time}` 
 if (name ==='' || time === '') {
    return li.textContent
 }


    const deleteBtn = document.createElement("button");
deleteBtn.textContent =  "Remove ";
deleteBtn.onclick = deleteTask; 
li.appendChild(deleteBtn);

function deleteTask(event) {
    const liItem = event.target.parentElement;
    liItem.remove();
}
}
