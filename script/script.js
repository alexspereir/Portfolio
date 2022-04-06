const botaoTP = document.getElementById('botao-tela-pequena');

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault();
    }
    const nav = document.getElementById('barra-de-navegacao');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

botaoTP.addEventListener('click', toggleMenu);
botaoTP.addEventListener('touchstart', toggleMenu);