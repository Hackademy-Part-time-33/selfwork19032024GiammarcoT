// Traccia 1:

// let title = document.querySelector('#title');
// let buttoncolor = document.querySelector('#buttoncolor');
// let colors = ['red', 'black', 'green', 'blue', 'yellow'];
// let indexColor = 0;

// buttoncolor.addEventListener('click', () => {

//         title.style.color = colors[indexColor];
//         indexColor++;
//         if (indexColor > colors.length) {
//             indexColor = 0;
//         }
//     });


// TRACCIA 2: pushata nel selfwork precedente



// Traccia 3:

let contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
];
//contenitore contatti
let wrapper = document.querySelector('.wrapper');
//ul dei contatti
let listContacts = document.querySelector('#listContacts');
//bottone per ordinare in modo crescente/discendente
let btnAsc = document.querySelector('#btnAsc');
//bottone per ordinare in base all'id
let btnId = document.querySelector('#btnId');
//bottone per nascondere i contatti
let btnHide = document.querySelector('#btnHide');
//variabile booleana per invertire ordine nome
let reversename = false;
//variabile booleana per invertire ordine id
let reverseid = false;
//variabile elemento lista da aggiungere al DOM
let li = '';


//mess
btnAsc.addEventListener('click', () => {
    li = '';
    if (reversename == false) {
        contacts.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    else{
        contacts.reverse();
    }
    reversename = true;
    contacts.forEach(contact => {
        li += `<li>${contact.id}: ${contact.name}</li>`;
    });
    listContacts.innerHTML = li;
    listContacts.style.display = '';
});


btnId.addEventListener('click', () => {
    li = '';
    if (reverseid == false) {
        contacts.sort((a, b) => {
            const idA = a.id;
            const idB = b.id;
            if (idA < idB) {
                return -1;
            }
            if (idA > idB) {
                return 1;
            }
            return 0;
        });
    }
    else{
        contacts.reverse();
    }
    reverseid = true;
    contacts.forEach(contact => {
        li += `<li>${contact.id}: ${contact.name}</li>`;
    });
    listContacts.innerHTML = li;
    listContacts.style.display = '';
});

btnHide.addEventListener('click', () => {
listContacts.style.display = 'none';

})