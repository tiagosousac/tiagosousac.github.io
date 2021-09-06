function initListenersAnalise() {
    initListeners();
    let arr_cards = document.getElementsByClassName('card');
    
    for(card of arr_cards) {
        let card_name = card.dataset.name;
        card.addEventListener('click', function(event) {
            ga('send', {
                'hitType':'event',
                'eventCategory':'analise',
                'eventAction':'ver_mais',
                'eventLabel':card_name
            });
        })
    }
}