var skillpoint = 50;
var str = 0;
var def = 0;
var int = 0;
var lux = 0;

$(() => {

  /* STR */
  $('#dec-str').on('click', (arguments) => {
    if( str > 0 && skillpoint < 50) {
      str--; skillpoint++;
      document.getElementById("str-percent").style = "width: " + str*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#str-value').html( str );
    }
    console.log( 'dec-str is press.' );
  });

  $('#inc-str').on('click', (arguments) => {
    if( str < 50 && skillpoint > 0) {
      str++; skillpoint--;
      document.getElementById("str-percent").style = "width: " + str*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#str-value').html( str );
    }
    console.log( 'inc-str is press.' );
  });

  /* DEF */
  $('#dec-def').on('click', (arguments) => {
    if( def > 0 && skillpoint < 50) {
      def--; skillpoint++;
      document.getElementById("def-percent").style = "width: " + def*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#def-value').html( def );
    }
    console.log( 'dec-def is press.' );
  });

  $('#inc-def').on('click', (arguments) => {
    if( def < 50 && skillpoint > 0) {
    def++; skillpoint--;
      document.getElementById("def-percent").style = "width: " + def*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#def-value').html( def );
    }
    console.log( 'inc-def is press.' );
  });

  /* INT */
  $('#dec-int').on('click', (arguments) => {
    if( int > 0 && skillpoint < 50) {
      int--; skillpoint++;
      document.getElementById("int-percent").style = "width: " + int*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#int-value').html( int );
    }
    console.log( 'dec-int is press.' );
  });

  $('#inc-int').on('click', (arguments) => {
    if( int < 50 && skillpoint > 0) {
      int++; skillpoint--;
      document.getElementById("int-percent").style = "width: " + int*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#int-value').html( int );
    }
    console.log( 'inc-int is press.' );
  });

  /* LUX */
  $('#dec-lux').on('click', (arguments) => {
    if( lux > 0 && skillpoint < 50) {
      lux--; skillpoint++;
      document.getElementById("lux-percent").style = "width: " + lux*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#lux-value').html( lux );
    }
    console.log( 'dec-lux is press.' );
  });

  $('#inc-lux').on('click', (arguments) => {
    if( lux < 50 && skillpoint > 0) {
      lux++; skillpoint--;
      document.getElementById("lux-percent").style = "width: " + lux*2 + "%";
      $('#skill-point').html( skillpoint );
      $('#lux-value').html( lux );
    }
    console.log( 'inc-lux is press.' );
  });

  /* Random */
  $('#random-butt').on('click', (arguments) => {
    // STR
    skillpoint = 50;
    str = Math.floor( Math.random()*skillpoint );
    document.getElementById("str-percent").style = "width: " + str*2 + "%";
    // DEF
    skillpoint = skillpoint - str;
    def = Math.floor( Math.random()*skillpoint );
    document.getElementById("def-percent").style = "width: " + def*2 + "%";
    // INT
    skillpoint = skillpoint - def;
    int = Math.floor( Math.random()*skillpoint );
    document.getElementById("int-percent").style = "width: " + int*2 + "%";
    // LUX
    skillpoint = skillpoint - int;
    lux = skillpoint;
    document.getElementById("lux-percent").style = "width: " + lux*2 + "%";
    // Skill Point
    skillpoint = skillpoint - lux;
    $('#skill-point').html( skillpoint );
    $('#str-value').html( str );
    $('#def-value').html( def );
    $('#int-value').html( int );
    $('#lux-value').html( lux );
  });

});
