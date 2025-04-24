function showSubOptions() {
    const selected = document.getElementById('deficiency').value;
    document.querySelectorAll('.suboptions').forEach(el => {
        el.style.display = (selected && selected !== "Nenhuma") ? 'block' : 'none';
    });
}

function applySettings() {
    const deficiency = document.getElementById('deficiency').value;

    // Verifica se a opção "Nenhuma Adaptação Extra" foi selecionada
    if (deficiency === "") {
        alert('Ok sem alterações adicionais!');
        setTimeout(() => {
            window.location.href = 'entrar.html';
        }, 3000);
        return;
    }
}