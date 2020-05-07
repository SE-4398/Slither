const people = [
    {name: 'david'},
    {name: 'patel'},
    {name: 'kevin'},
    {name: 'steven'},
    {name: 'deidre'},
    {name: 'shawn'},
    {name: 'guster'}
];

const searchInput = document.getElementById('search');

//eventListener
searchInput.addEventListener('input', (event) => {
    console.log(event.target.value);
    const value = event.target.value;
});