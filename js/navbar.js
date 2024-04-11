const anchor = document.querySelector('div > a');
const list = document.querySelector('.list');
anchor.addEventListener('click', () => {
    list.classList.toggle('hidden');
});
overlay.addEventListener('click', () => {
    list.classList.toggle('hidden');
})