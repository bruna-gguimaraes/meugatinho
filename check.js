function check() {
    // Selecionando os checkboxes e o elemento .wrapper
    const checkboxes = document.forms[0].elements;
    const wrapper = $('.wrapper');

    // Verificando se todos os três checkboxes estão marcados
    const allChecked = Array.from(checkboxes).slice(0, 3).every(checkbox => checkbox.checked);

    // Se todos estiverem marcados e a classe não estiver presente, adicione a classe 'throb'
    if (allChecked) {
        if (!wrapper.hasClass('throb')) {
            wrapper.addClass('throb');
        }
    } else {
        // Se qualquer um não estiver marcado e a classe estiver presente, remova a classe 'throb'
        if (wrapper.hasClass('throb')) {
            wrapper.removeClass('throb');
        }
    }
   
