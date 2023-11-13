

const container1 = document.querySelector('.container1');
const Bt1 = document.querySelector('Bt1');

Bt1.addEventListener('click', 'moveF');

function moveF()
{
    container1.style.transform = 'tranlate(-50vw)';
}
