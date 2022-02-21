$(function() {
    $h5ps = $('.punchy-infos')[0];

    if ($h5ps) {
        $($h5ps).wrap('<div id="punchy-infos-wrapper"></div>');
        $handle = $('<h5/>');
        $handle.addClass('punchy-infos-handler d-flex');
        $handle.html('Infos du module <i class="handler-icon fa fa-chevron-down ml-auto"></i>');
        $handle.on('click', function() {
            $icon = $(this).find('.handler-icon');
            if ($icon.hasClass('fa-chevron-down')) {
                $($icon).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else {
                $($icon).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
            $(this).toggleClass('active');
            $($h5ps).toggleClass('active');
        });
    
        $wrapper = $('#punchy-infos-wrapper');
        $wrapper.prepend($handle);
    }
});
