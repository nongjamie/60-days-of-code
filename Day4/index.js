$( () => {
  const query = decodeURIComponent(window.location.search.substring(1));
  const array = query.split('&');
  const obj = {};
  array.forEach((item) => {
          const keyvalue = item.split('=');
          obj[keyvalue[0]] = keyvalue[1]
  });
  // STR
  $('#str-percent').html( obj.str );
  $('#str-percent').css('width' , obj.str*2 + '%');
  // DEF
  $('#def-percent').html( obj.def );
  $('#def-percent').css('width' , obj.def*2 + '%');
  // INT
  $('#int-percent').html( obj.int );
  $('#int-percent').css('width' , obj.int*2 + '%');
  // LUX
  $('#lux-percent').html( obj.lux );
  $('#lux-percent').css('width' , obj.lux*2 + '%');

  $('#return-butt').on( 'click' , () => {
    window.location = '../Day2/index.html';
  } );
} );
