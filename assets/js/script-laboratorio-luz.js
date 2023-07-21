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


function alternarLuzIndividual() {
    $('.toggle').change(function () {
        var backgrounds = {
            'onoff1': 'assets/img/02-Bulbo.png',
            'onoff2': 'assets/img/03-Didroicas.png',
            'onoff3': 'assets/img/04-Mini-dicroicas.png',
            'onoff4': 'assets/img/05-PAR.png',
            'onoff5': 'assets/img/06-Arandela.png',
            'onoff6': 'assets/img/07-AR.png',
            'onoff7': 'assets/img/08-Balizadores.png',
            'onoff8': 'assets/img/09-Perfil-led.png',
            'onoff9': 'assets/img/10-Tubular.png',
            'onoff10': 'assets/img/11-Halopin.png',
            'onoff15': 'assets/img/16-Todas-acesas.png',
            'onoff16': 'assets/img/01-Luzes-apagadas.png'
        };

        var background = $('.bg');
        var checkedCheckboxId = $(this).attr('id');

        if ($(this).prop('checked')) {
            background.attr('src', backgrounds[checkedCheckboxId]);
            uncheckOtherCheckboxes(checkedCheckboxId);

            if (checkedCheckboxId === 'onoff1') {
                $('#title-ambiente').text('Iluminação bulbo');
            } else if (checkedCheckboxId === 'onoff2') {
                $('#title-ambiente').text('Iluminação dicróica');
            } else if (checkedCheckboxId === 'onoff3') {
                $('#title-ambiente').text('Iluminação mini dicróica');
            } else if (checkedCheckboxId === 'onoff4') {
                $('#title-ambiente').text('Iluminação par');
            } else if (checkedCheckboxId === 'onoff5') {
                $('#title-ambiente').text('Iluminação arandela');
            } else if (checkedCheckboxId === 'onoff6') {
                $('#title-ambiente').text('Iluminação AR');
            } else if (checkedCheckboxId === 'onoff7') {
                $('#title-ambiente').text('Iluminação balizador');
            } else if (checkedCheckboxId === 'onoff8') {
                $('#title-ambiente').text('Iluminação perfil led');
            } else if (checkedCheckboxId === 'onoff9') {
                $('#title-ambiente').text('Iluminação tubular');
            } else if (checkedCheckboxId === 'onoff10') {
                $('#title-ambiente').text('Iluminação halopin');
            } else {
                $('#title-ambiente').text('Todas as luzes apagadas');
            }
        } else {
            background.attr('src', 'assets/img/01-Luzes-apagadas.png');
            $('#title-ambiente').text('Todas as luzes apagadas');
        }
    });

    function uncheckOtherCheckboxes(checkedCheckboxId) {
        $('.toggle').not('#' + checkedCheckboxId).prop('checked', false);
    }
}






function ambienteTrabalho() {
    $('.toggle').prop('checked', false);

    $('#onoff2, #onoff4, #onoff8, #onoff9, #onoff10').prop('checked', true);

    $('.bg').attr('src', 'assets/img/12-trabalho.png');

    $('#title-ambiente').text('Iluminação trabalho');
}

function ambienteLeitura() {
    $('.toggle').prop('checked', false);

    $('#onoff1, #onoff5, #onoff6, #onoff8').prop('checked', true);

    $('.bg').attr('src', 'assets/img/13-Leitura.png');

    $('#title-ambiente').text('Iluminação leitura');
}

function ambienteCinema() {
    $('.toggle').prop('checked', false);

    $('#onoff2, #onoff5, #onoff7').prop('checked', true);

    $('.bg').attr('src', 'assets/img/14-Cinema.png');

    $('#title-ambiente').text('Iluminação cinema');
}

function ambienteDescanso() {
    $('.toggle').prop('checked', false);

    $('#onoff2, #onoff3, #onoff6').prop('checked', true);

    $('.bg').attr('src', 'assets/img/15-Descanso.png');

    $('#title-ambiente').text('Iluminação descanso');
}


$(document).ready(function () {

    $('#comecar').click(function () {
        $('#inicial').addClass('d-none');
        $('#conteudo').removeClass('d-none');
    });

    $('.menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('.menu-body').toggleClass('open');
    });

    $('#onoff11').click(function () {
        ambienteTrabalho();
    });
    $('#onoff12').click(function () {
        ambienteLeitura();
    });
    $('#onoff13').click(function () {
        ambienteCinema();
    });
    $('#onoff14').click(function () {
        ambienteDescanso();
    });

    alternarLuzIndividual();
});



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