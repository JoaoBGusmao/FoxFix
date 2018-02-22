// Autor: João Gusmão - http://github.com/joaobgusmao

setInterval(
    function() {
        var price = document.querySelector('[data-model-key-list="formatted_BLINK_BTCBRL_LAST_PX"]').innerHTML;
        document.title = price + " Compre e venda Bitcoins no Brasil";
    }, 1
)
