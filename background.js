// Autor: João Gusmão - http://github.com/joaobgusmao

var target = document.querySelector('title');
var lastTitle = '';

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if(lastTitle != document.title || lastTitle == '') {
            var price = document.querySelector('[data-model-key-list="formatted_BLINK_BTCBRL_LAST_PX"]').innerHTML;
            var newTitle = price + " Compre e venda Bitcoins no Brasil";
            document.title = newTitle
            lastTitle = newTitle;
        }
    });
});

var config = { attributes: true, childList: true, characterData: true }

observer.observe(target, config);
