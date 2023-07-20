function escalaProporcao(largura, altura) {

    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
        larguraAltura = "height";
        larguraAlturaAuto = "width";
        proporcao = proporcaoAltura / 100;
    } else {
        larguraAltura = "width";
        larguraAlturaAuto = "height";
        proporcao = proporcaoLargura / 100;
    }

    console.log(proporcao, proporcaoAltura, proporcaoLargura)
    return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyBodyLaboratorio() {

    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".body-laboratorio").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}

$(document).ready(function () {
    resizeBodyBodyLaboratorio()
    $(window).resize(function () {
        resizeBodyBodyLaboratorio()
    })

});

$(document).ready(function () {
    $('#comecar').click(function () {
        $('#inicial').addClass('d-none');
        $('#conteudo').removeClass('d-none');
    });
});

function alteracaoConformeId() {
    $('.toggle').change(function () {
        var backgrounds = {
            'onoff1': 'assets/img/bg1.jpg',
            'onoff2': 'assets/img/bg2.jpg',
            'onoff3': 'assets/img/bg3.jpg',
            'onoff4': 'assets/img/bg4.jpg',
            'onoff5': 'assets/img/bg5.jpg',
            'onoff6': 'assets/img/bg6.jpg',
            'onoff7': 'assets/img/bg7.jpg',
            'onoff8': 'assets/img/bg8.jpg',
            'onoff9': 'assets/img/bg9.jpg',
            'onoff10': 'assets/img/bg10.jpg',
            'onoff11': 'assets/img/bg11.jpg',
            'onoff12': 'assets/img/bg12.jpg'
        };

        var background = $('.bg');
        var checkedCheckboxes = $('.toggle:checked');

        if (checkedCheckboxes.length > 0) {
            var checkedCheckboxId = checkedCheckboxes.last().attr('id');
            background.attr('src', backgrounds[checkedCheckboxId]);
            uncheckOtherCheckboxes(checkedCheckboxId);

            if (checkedCheckboxId === 'onoff1') {
                $('#title-ambiente').text('deu certo');
            } else if (checkedCheckboxId === 'onoff2') {
                $('#title-ambiente').text('também deu certo');
            } else if (checkedCheckboxId === 'onoff3') {
                $('#title-ambiente').text('aee');
            } else {
                $('#title-ambiente').text('Luzes apagadas');
            }
        } else {
            background.attr('src', 'assets/img/bg0.png');
            uncheckAllCheckboxes();
            $('#title-ambiente').text('Luzes apagadas');
        }
    });

    function uncheckOtherCheckboxes(checkedCheckboxId) {
        $('.toggle').not('#' + checkedCheckboxId).prop('checked', false);
    }

    function uncheckAllCheckboxes() {
        $('.toggle').prop('checked', false);
    }
}
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('.menu-body').toggleClass('open');
    });
});

alteracaoConformeId();

// var elem = document.getElementById("laboratorio");
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) {
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { 
//     elem.msRequestFullscreen();
//   }
// }