let form = document.getElementById('form');
let names = document.getElementById('name');
let hobby = document.getElementById('hobby');

let result = document.getElementById('result');

const people = new Map();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createData(people, names.value, hobby.value);
    showResult(people);

    names.value = '';
    hobby.value = '';
});

function createData(map, name, hobby) {
    map.set(name, hobby);
    
}


function showResult(obj) {
    let nameText = '';
    let count = 1;
    people.forEach((value, key) => {
        nameText += `<tr><th scope="row">` + count++ + `</th>
        <td>` + key + `</td>
        <td>` + value + `</td>
      </tr>`
    });
    result.innerHTML = nameText;
}