const userList = document.querySelector('#Customer_list')

//rendering User list
function renderUser(doc){

	let li = document.createElement('li');
    let Name = document.createElement('span');
    let Credit = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;
    Credit.textContent = doc.data().Credit;

    li.appendChild(Name);
    li.appendChild(Credit);
    
    userList.appendChild(li);

}

db.collection('User_Credit').get().then((snapshot) =>{
snapshot.docs.forEach(doc => {
	renderUser(doc);
	})
})