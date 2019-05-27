$(function () {
    window.showNotification = showNotification;
    // $('.jsdemo-notification-button button').on('click', function () {
    //     var placementFrom = $(this).data('placement-from');
    //     var placementAlign = $(this).data('placement-align');
    //     var animateEnter = $(this).data('animate-enter');
    //     var animateExit = $(this).data('animate-exit');
    //     var colorName = $(this).data('color-name');

    //     showNotification(colorName, null, placementFrom, placementAlign, animateEnter, animateExit);
    // });
});

var showNotification = function (iconType, colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
    if (colorName === null || colorName === '') { colorName = 'bg-black'; }
    if (text === null || text === '') { text = 'Turning standard Bootstrap alerts'; }
    if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
    if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
    var allowDismiss = true;

    switch (iconType) {
        case "success":
            iconType = "glyphicon glyphicon-ok";
            break;
        case "warning":
            iconType = "glyphicon glyphicon-alert";
            break;
        case "error":
            iconType = "Components · Bootstrap";
            break;
        default:
            break;
    }

    $.notify({
        message: text.toUpperCase(),
        icon: iconType,
    },
        {
            type: colorName,
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 1000,
            placement: {
                from: placementFrom,
                align: placementAlign
            },
            animate: {
                enter: animateEnter,
                exit: animateExit
            },
            template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon" ></span>&nbsp;&nbsp;&nbsp;' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}&nbsp;&nbsp;&nbsp;</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
};