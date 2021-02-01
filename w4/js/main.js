//@ts-check
//access form
// const form = document.forms[0];
// const forma = document.getElementsByTagname('form')[0];
// const formb = document.forms.search;
// const formc = document.forms['search'];

// //accessing elements via the element method
// const [input,button] = form.elements;
// const input1 = form.searchInput;
// const input2 = form['searchInput']

// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'),false);
// input.addEventListener('blur', () => alert('blurred'),false);

//show alert on form submit
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
alert(' Form Submitted');
}