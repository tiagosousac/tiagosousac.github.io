// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto'); // cria o tracker nesta página
ga('send', 'pageview'); // envia para o tracker 

function initListeners() {
    // para os listeners de contato e download, eu criei um id para cada um dos itens
    // e adicionei diretamente pelo id. também seria possível pegar pelas classes
    // 'menu-lista-contato' e 'menu-lista-download', porém teria que pegar a posição 0 
    // do array.
    let lista_contato = document.getElementById('lista-contato');    

    lista_contato.addEventListener('click', function() {
        ga('send', {
            'hitType':'event',
            'eventCategory':'menu',
            'eventAction':'entre_em_contato',
            'eventLabel':'link_externo'
        });
    });

    let lista_download = document.getElementById('lista-download');

    lista_download.addEventListener('click', function() {
        ga('send', {
            'hitType':'event',
            'eventCategory':'menu',
            'eventAction':'download_pdf',
            'eventLabel':'download_pdf'
        });
    });

};
