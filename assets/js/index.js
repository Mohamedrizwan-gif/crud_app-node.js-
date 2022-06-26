const adduser = document.getElementById('add_user');
const updateuser = document.getElementById('update_user');
const deletebtn = document.getElementsByClassName('delete');

adduser?.addEventListener('submit', () => {
    alert('Data added successfully');
});

updateuser?.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = updateuser.id.value;
    const name = updateuser.name.value;
    const email = updateuser.email.value;
    let gender = '';
    for (let i = 0; i < updateuser.gender.length; i++) {
        if (updateuser.gender[i].checked) {
            gender = updateuser.gender[i].value
        }
    }
    let status = '';
    for (let i = 0; i < updateuser.status.length; i++) {
        if (updateuser.status[i].checked) {
            status = updateuser.status[i].value
        }
    }
    const data = { name, email, gender, status };
    fetch('http://localhost:3200/api/users/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            window.location.replace('/');
        })
        .catch(err => console.log(err));
});

console.log(deletebtn.length)

for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener('click', () => {
        const id = deletebtn[i].getAttribute('data-id');
        fetch('http://localhost:3200/api/users/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(response => {
            window.location.replace('/');
        })
        .catch(err => {
            console.log(err);
        })
    });
}
