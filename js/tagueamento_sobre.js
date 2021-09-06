function initListenersSobre() {
    initListeners();

    let form = document.getElementsByClassName("contato")[0];
    let submit_button;
    
    const config = { attributes: true, subtree: true };

    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(!submit_button.disabled) {
                ga('send', {
                    'hitType':'event',
                    'eventCategory':'contato',
                    'eventAction':'enviado',
                    'eventLabel':'enviado'
                });
            }
        }
    };
    
    const observer = new MutationObserver(callback);
    //usamos um MutationObserver para detectar quando houver uma alteração ao botão.
    //por não ser eficiente, acredito ser melhor disparar um evento quando a lightbox aparecer
    //ou quando o botão for reabilitado.
    
    for(input of form.elements) {
        let id_input = input.id;
        
        if(input.type != 'submit') { // entra aqui se for input
            input.addEventListener('change', function(event) {
                ga('send', {
                    'hitType':'event',
                    'eventCategory':'contato',
                    'eventAction':id_input,
                    'eventLabel':'preencheu'
                });
            });              
        } else {
            submit_button = input;
        }
    }
    observer.observe(submit_button, config);
    
}