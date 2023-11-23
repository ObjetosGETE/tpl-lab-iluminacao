$(document).ready(function () {

    resizeBodyBodyLaboratorio()
    $(window).resize(function () {
        resizeBodyBodyLaboratorio()
    });

    $('#comecar').click(function () {
        $('#inicial').addClass('d-none');
        $('#conteudo').removeClass('d-none');
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

    abreMenu();
    alternarLuzIndividual();
    somFechar();
    somClique();
    efeitoSelecao();
});

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

function playToggleSound() {
    const audio = new Audio('/assets/audio/acende.mp3');
    audio.play();
}

function somClique() {
    $("body").on("click", '.som-fechar', function () {
        var audio = new Audio('assets/audio/som_modal.mp3');
        audio.play();
    });
}

function somFechar() {
    $("body").on("click", '.som-clique', function () {
        var audio = new Audio('assets/audio/clique.mp3');
        audio.play();
    });
}

function abreMenu() {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('.menu-body').toggleClass('open');
        $('#seta').toggleClass('rotated');
    });
}

function alternarLuzIndividual() {
    $('.toggle').change(function () {
        var backgrounds = {
            'onoff1': 'assets/img/02-Bulbo.jpg',
            'onoff2': 'assets/img/03-Didroicas.jpg',
            'onoff3': 'assets/img/04-Mini-dicroicas.jpg',
            'onoff4': 'assets/img/05-PAR.jpg',
            'onoff5': 'assets/img/06-Arandela.jpg',
            'onoff6': 'assets/img/07-AR.jpg',
            'onoff7': 'assets/img/08-Balizadores.jpg',
            'onoff8': 'assets/img/09-Perfil-led.jpg',
            'onoff9': 'assets/img/10-Tubular.jpg',
            'onoff10': 'assets/img/11-Halopin.jpg',
            'onoff15': 'assets/img/16-Todas-acesas.jpg',
            'onoff16': 'assets/img/01-Luzes-apagadas.jpg'
        };

        var background = $('.bg');
        var checkedCheckboxId = $(this).attr('id');


        if ($(this).prop('checked')) {
            background.attr('src', backgrounds[checkedCheckboxId]);
            uncheckOtherCheckboxes(checkedCheckboxId);
            playToggleSound();

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
            } else if (checkedCheckboxId === 'onoff15') {
                $('#title-ambiente').text('Todas as luzes acesas');
                $('#onoff1, #onoff2, #onoff3, #onoff4, #onoff5, #onoff6, #onoff7, #onoff8, #onoff9, #onoff10').prop('checked', true);
                $('#modalAmbiente').modal('hide');
            } else {
                $('#title-ambiente').text('Todas as luzes apagadas');
                $('#onoff1, #onoff2, #onoff3, #onoff4, #onoff5, #onoff6, #onoff7, #onoff8, #onoff9, #onoff10').prop('checked', false);
                $('#modalAmbiente').modal('hide');
            }
        } else {
            background.attr('src', 'assets/img/01-Luzes-apagadas.jpg');
            playToggleSound();
            $('#title-ambiente').text('Todas as luzes apagadas');
            $('#onoff1, #onoff2, #onoff3, #onoff4, #onoff5, #onoff6, #onoff7, #onoff8, #onoff9, #onoff10').prop('checked', false);
        }
    });

    function uncheckOtherCheckboxes(checkedCheckboxId) {
        $('.toggle').not('#' + checkedCheckboxId).prop('checked', false);
    }
}

function ambienteTrabalho() {
    $('.toggle').prop('checked', false);

    $('#onoff2, #onoff4, #onoff8, #onoff9, #onoff10').prop('checked', true);

    $('.bg').attr('src', 'assets/img/12-Trabalho.jpg');

    $('#title-ambiente').text('Iluminação trabalho');

    $('#modalAmbiente').modal('hide');

}

function ambienteLeitura() {
    $('.toggle').prop('checked', false);

    $('#onoff1, #onoff5, #onoff6, #onoff8').prop('checked', true);

    $('.bg').attr('src', 'assets/img/13-Leitura.jpg');

    $('#title-ambiente').text('Iluminação leitura');

    $('#modalAmbiente').modal('hide');
}

function ambienteCinema() {
    $('.toggle').prop('checked', false);

    $('#onoff2, #onoff5, #onoff7').prop('checked', true);

    $('.bg').attr('src', 'assets/img/14-Cinema.jpg');

    $('#title-ambiente').text('Iluminação cinema');

    $('#modalAmbiente').modal('hide');
}

function ambienteDescanso() {
    $('.toggle').prop('checked', false);

    $('#onoff2, #onoff3, #onoff6').prop('checked', true);

    $('.bg').attr('src', 'assets/img/15-Descanso.jpg');

    $('#title-ambiente').text('Iluminação descanso');

    $('#modalAmbiente').modal('hide');
}

function efeitoSelecao() {
    $(".botao-selecionavel").on("click", function () {
        $(".botao-selecionavel").removeClass("selecionado");

        $(this).addClass("selecionado");
    });


    $("[id^='onoff']").on("click", function () {

        if (!$(this).hasClass("botao-selecionavel")) {
            $(".botao-selecionavel").removeClass("selecionado");
        }
    });
}
