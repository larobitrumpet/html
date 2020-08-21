$(document).ready(() => {
    $('.see').on('click', event => {
        $(event.currentTarget).next('.proj').toggleClass('hidden');
        $(event.currentTarget).toggleClass('clicked');
        $(event.currentTarget).parent().toggleClass('active');
        var $content = $(event.currentTarget).text();
        if ($content.includes('see')) {
            $content = $content.replace('see', 'hide');
        } else if ($content.includes('hide')) {
            $content = $content.replace('hide', 'see');
        }
        $(event.currentTarget).text($content);
    });
});
