$(document).ready(function() {
    $(document).ready(function(){
        // Ao clicar em um item do menu
        $('.nav-link').click(function(){
            // Fechar o menu hamburguer
            $('#menu-hamburguer').addClass('collapsed');
            $('#menu-nav').removeClass('show');
        });
    });
    
    
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            telefone: {
                required: false,
            },
            mensagem: {
                required: true,
            }
            
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite um e-mail',
            mensagem: 'Por favor, digite a mensagem',
        },
        
        submitHandler: function(){
            $('.mensagem-enviada').slideToggle()
            $('#nome').val('')
            $('#telefone').val('')
            $('#email').val('')
            $('#mensagem').val('')
        }
    })
    
    // Naruto section
    $('#cart1').click(function() {
        $('#cart1').hide()
        $('#cart-checked1').show()
        $('#adicionado1').slideToggle()
    })

    $('#cart-checked1').click(function() {
        $('#cart1').show()
        $('#cart-checked1').hide()
        $('#adicionado1').slideUp()
    })

    $('#cart2').click(function() {
        $('#cart2').hide()
        $('#cart-checked2').show()
        $('#adicionado2').slideToggle()
    })

    $('#cart-checked2').click(function() {
        $('#cart2').show()
        $('#cart-checked2').hide()
        $('#adicionado2').slideUp()
    })

    $('#cart3').click(function() {
        $('#cart3').hide()
        $('#cart-checked3').show()
        $('#adicionado3').slideToggle()
    })

    $('#cart-checked3').click(function() {
        $('#cart3').show()
        $('#cart-checked3').hide()
        $('#adicionado3').slideUp()
    })

    $('#cart4').click(function() {
        $('#cart4').hide()
        $('#cart-checked4').show()
        $('#adicionado4').slideToggle()
    })

    $('#cart-checked4').click(function() {
        $('#cart4').show()
        $('#cart-checked4').hide()
        $('#adicionado4').slideUp()
    })

    $('#cart5').click(function() {
        $('#cart5').hide()
        $('#cart-checked5').show()
        $('#adicionado5').slideToggle()
    })

    $('#cart-checked5').click(function() {
        $('#cart5').show()
        $('#cart-checked5').hide()
        $('#adicionado5').slideUp()
    })

    // Attack on Titans section
    $('#cart_titans1').click(function() {
        $('#cart_titans1').hide()
        $('#cart_checked_titans1').show()
        $('#adicionado_titans1').slideToggle()
    })

    $('#cart_checked_titans1').click(function() {
        $('#cart_titans1').show()
        $('#cart_checked_titans1').hide()
        $('#adicionado_titans1').slideUp()
    })

    $('#cart_titans2').click(function() {
        $('#cart_titans2').hide()
        $('#cart_checked_titans2').show()
        $('#adicionado_titans2').slideToggle()
    })

    $('#cart_checked_titans2').click(function() {
        $('#cart_titans2').show()
        $('#cart_checked_titans2').hide()
        $('#adicionado_titans2').slideUp()
    })

    $('#cart_titans3').click(function() {
        $('#cart_titans3').hide()
        $('#cart_checked_titans3').show()
        $('#adicionado_titans3').slideToggle()
    })

    $('#cart_checked_titans3').click(function() {
        $('#cart_titans3').show()
        $('#cart_checked_titans3').hide()
        $('#adicionado_titans3').slideUp()
    })

    $('#cart_titans4').click(function() {
        $('#cart_titans4').hide()
        $('#cart_checked_titans4').show()
        $('#adicionado_titans4').slideToggle()
    })

    $('#cart_checked_titans4').click(function() {
        $('#cart_titans4').show()
        $('#cart_checked_titans4').hide()
        $('#adicionado_titans4').slideUp()
    })

    $('#cart_titans5').click(function() {
        $('#cart_titans5').hide()
        $('#cart_checked_titans5').show()
        $('#adicionado_titans5').slideToggle()
    })

    $('#cart_checked_titans5').click(function() {
        $('#cart_titans5').show()
        $('#cart_checked_titans5').hide()
        $('#adicionado_titans5').slideUp()
    })

    // Dragon Ball section
    $('#cart_dragon1').click(function() {
        $('#cart_dragon1').hide()
        $('#cart_checked_dragon1').show()
        $('#adicionado_dragon1').slideToggle()
    })

    $('#cart_checked_dragon1').click(function() {
        $('#cart_dragon1').show()
        $('#cart_checked_dragon1').hide()
        $('#adicionado_dragon1').slideUp()
    })

    $('#cart_dragon2').click(function() {
        $('#cart_dragon2').hide()
        $('#cart_checked_dragon2').show()
        $('#adicionado_dragon2').slideToggle()
    })

    $('#cart_checked_dragon2').click(function() {
        $('#cart_dragon2').show()
        $('#cart_checked_dragon2').hide()
        $('#adicionado_dragon2').slideUp()
    })

    $('#cart_dragon3').click(function() {
        $('#cart_dragon3').hide()
        $('#cart_checked_dragon3').show()
        $('#adicionado_dragon3').slideToggle()
    })

    $('#cart_checked_dragon3').click(function() {
        $('#cart_dragon3').show()
        $('#cart_checked_dragon3').hide()
        $('#adicionado_dragon3').slideUp()
    })

    $('#cart_dragon4').click(function() {
        $('#cart_dragon4').hide()
        $('#cart_checked_dragon4').show()
        $('#adicionado_dragon4').slideToggle()
    })

    $('#cart_checked_dragon4').click(function() {
        $('#cart_dragon4').show()
        $('#cart_checked_dragon4').hide()
        $('#adicionado_dragon4').slideUp()
    })

    // Demon Slayer section
    $('#cart_demon1').click(function() {
        $('#cart_demon1').hide()
        $('#cart_checked_demon1').show()
        $('#adicionado_demon1').slideToggle()
    })

    $('#cart_checked_demon1').click(function() {
        $('#cart_demon1').show()
        $('#cart_checked_demon1').hide()
        $('#adicionado_demon1').slideUp()
    })

    $('#cart_demon2').click(function() {
        $('#cart_demon2').hide()
        $('#cart_checked_demon2').show()
        $('#adicionado_demon2').slideToggle()
    })

    $('#cart_checked_demon2').click(function() {
        $('#cart_demon2').show()
        $('#cart_checked_demon2').hide()
        $('#adicionado_demon2').slideUp()
    })

    $('#cart_demon3').click(function() {
        $('#cart_demon3').hide()
        $('#cart_checked_demon3').show()
        $('#adicionado_demon3').slideToggle()
    })

    $('#cart_checked_demon3').click(function() {
        $('#cart_demon3').show()
        $('#cart_checked_demon3').hide()
        $('#adicionado_demon3').slideUp()
    })

    $('#cart_demon4').click(function() {
        $('#cart_demon4').hide()
        $('#cart_checked_demon4').show()
        $('#adicionado_demon4').slideToggle()
    })

    $('#cart_checked_demon4').click(function() {
        $('#cart_demon4').show()
        $('#cart_checked_demon4').hide()
        $('#adicionado_demon4').slideUp()
    })

    $('#cart_demon5').click(function() {
        $('#cart_demon5').hide()
        $('#cart_checked_demon5').show()
        $('#adicionado_demon5').slideToggle()
    })

    $('#cart_checked_demon5').click(function() {
        $('#cart_demon5').show()
        $('#cart_checked_demon5').hide()
        $('#adicionado_demon5').slideUp()
    })

    // One Piece section
    $('#cart_piece1').click(function() {
        $('#cart_piece1').hide()
        $('#cart_checked_piece1').show()
        $('#adicionado_piece1').slideToggle()
    })

    $('#cart_checked_piece1').click(function() {
        $('#cart_piece1').show()
        $('#cart_checked_piece1').hide()
        $('#adicionado_piece1').slideUp()
    })

    $('#cart_piece2').click(function() {
        $('#cart_piece2').hide()
        $('#cart_checked_piece2').show()
        $('#adicionado_piece2').slideToggle()
    })

    $('#cart_checked_piece2').click(function() {
        $('#cart_piece2').show()
        $('#cart_checked_piece2').hide()
        $('#adicionado_piece2').slideUp()
    })

    $('#cart_piece3').click(function() {
        $('#cart_piece3').hide()
        $('#cart_checked_piece3').show()
        $('#adicionado_piece3').slideToggle()
    })

    $('#cart_checked_piece3').click(function() {
        $('#cart_piece3').show()
        $('#cart_checked_piece3').hide()
        $('#adicionado_piece3').slideUp()
    })

    $('#cart_piece4').click(function() {
        $('#cart_piece4').hide()
        $('#cart_checked_piece4').show()
        $('#adicionado_piece4').slideToggle()
    })

    $('#cart_checked_piece4').click(function() {
        $('#cart_piece4').show()
        $('#cart_checked_piece4').hide()
        $('#adicionado_piece4').slideUp()
    })

    $('#cart_piece5').click(function() {
        $('#cart_piece5').hide()
        $('#cart_checked_piece5').show()
        $('#adicionado_piece5').slideToggle()
    })

    $('#cart_checked_piece5').click(function() {
        $('#cart_piece5').show()
        $('#cart_checked_piece5').hide()
        $('#adicionado_piece5').slideUp()
    })
})