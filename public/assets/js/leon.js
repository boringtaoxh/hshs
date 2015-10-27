$('.radio-group input[type="radio"]' ).click(function(e)
{
    $( this ).siblings().attr( "checked" , false );
    $( this ).attr( "checked" , true );
});
$('.select , .unselect' ).click(function(e){
    if( $(this).hasClass('select') ){
        $(this).removeClass('select' ).addClass('unselect');
    }else{
        $(this).removeClass('unselect' ).addClass('select');
    }
});
$('.quanityChooser' ).wrap('<div>').before("<span class='sub'>-</span>").after("<span class='plus'>+</span>").siblings( "span" ).click( function ( e ) {
    $value = parseInt( $( this ).siblings( '.quanityChooser' ).val() );
    if( $( this ).hasClass( 'sub' ) ){
        $( this ).siblings( '.quanityChooser' ).val( $value - 1 > 0 ? $value - 1 : 0 );
    }else if( $( this ).hasClass( 'plus' ) ) {
        $( this ).siblings( '.quanityChooser' ).val( $value + 1 );
    }
}).parent().addClass( 'quanityChooser-wrapper' );

$('.score i').click(function(e){
    $( this ).removeClass( 'glyphicon-star-empty' ).addClass( 'glyphicon-star' ).prevAll('i').removeClass( 'glyphicon-star-empty' ).addClass( 'glyphicon-star' );
    $( this ).nextAll('i').removeClass( 'glyphicon-star' ).addClass( 'glyphicon-star-empty' );
});
$( '.img-hover' ).hover( function( e ) {
    $( this ).children('.text-hover').show( 100 );
} , function ( e ) {
    $( this ).children('.text-hover').hide( 100 );
} );
$( '.text-hover' ).click( function ( e ) {
    location.href = $( this ).data( 'href' );
} );
$( '.tab li' ).click( function( e ){
    $( this ).addClass( 'active' ).siblings( 'li' ).removeClass( 'active' );
    $( '#' + $( this ).data('target') ).show().siblings('div').hide();
} )
$('.collect .item-wrapper' ).hover(
    function( e ){
        $(this).addClass('on');
    },
    function ( e ) {
        $(this).removeClass('on');
    }
);
