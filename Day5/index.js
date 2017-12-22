$( () => {
  let r = 0;
  let g = 0;
  let b = 0;

  const displayRGB = (myArray)=> {
    $('#r-value').val(r);
    $('#g-value').val(g);
    $('#b-value').val(b);
  };

  const displayHSL = (myArray)=> {
    $('#hsl-h-value').val(myArray[0]);
    $('#hsl-s-value').val(myArray[1]);
    $('#hsl-l-value').val(myArray[2]);
  };

  const displayHSV = (myArray)=> {
    $('#hsv-h-value').val(myArray[0]);
    $('#hsv-s-value').val(myArray[1]);
    $('#hsv-v-value').val(myArray[2]);
  };

  const setupRGB = (myString) => {
    $( myString ).on( 'input' , () => {
      let temp = parseFloat( $(myString).val() );
      switch( myString ) {
        case '#r-value':
          r = temp;
          break;
        case '#g-value':
          g = temp;
          break;
        case '#b-value':
          b = temp;
          break;
        default:
          break;
      }
      if( (temp >= 0) && (temp <= 255) ) {
        let myArray = rgbToHsl(r, g, b);
        let myArray2 = rgbToHsv(r, g, b);
        displayHSL(myArray);
        displayHSV(myArray2);
        $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
      }
      else {
        alert('The value must be [0, 255] value.');
      }
    } );
  };

  const setupHSL = (myString) => {
    $( myString ).on( 'input' , () => {
      let checking = '';
      let tempH = parseFloat( $('#hsl-h-value').val() );
      let tempS = parseFloat( $('#hsl-s-value').val() );
      let tempL = parseFloat( $('#hsl-l-value').val() );
      switch( myString ) {
        case '#hsl-h-value':
          checking = tempH;
          break;
        case '#hsl-s-value':
          checking = tempS;
          break;
        case '#hsl-l-value':
          checking = tempL;
          break;
        default:
          break;
      }
      if( (checking >= 0) && (checking <= 1) ) {
        let myArray = hslToRgb(tempH, tempS, tempL);
        r = Math.floor( myArray[0] );
        g = Math.floor( myArray[1] );
        b = Math.floor( myArray[2] );
        displayRGB( myArray );
        let myArray2 = rgbToHsv(r, g, b);
        displayHSV(myArray2);
        $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
      }
      else {
        alert('The value must be [0, 1] value.');
      }
    } );
  };

  const setupHSV = ( myString ) => {
    $( myString ).on( 'input' , () => {
      let checking = '';
      let tempH = parseFloat( $('#hsv-h-value').val() );
      let tempS = parseFloat( $('#hsv-s-value').val() );
      let tempV = parseFloat( $('#hsv-v-value').val() );
      switch( myString ) {
        case '#hsv-h-value':
          checking = tempH;
          break;
        case '#hsv-s-value':
          checking = tempS;
          break;
        case '#hsv-v-value':
          checking = tempL;
          break;
        default:
          break;
      }
      if( (checking >= 0) && (checking <= 1) ) {
        let myArray = hsvToRgb(tempH, tempS, tempV);
        r = Math.floor( myArray[0] );
        g = Math.floor( myArray[1] );
        b = Math.floor( myArray[2] );
        displayRGB( myArray );
        let myArray2 = rgbToHsl(r, g, b);
        displayHSL(myArray2);
        $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
      }
      else {
        alert('The value must be [0, 1] value.');
      }
    } );
  };

    setupRGB('#r-value');
    setupRGB('#g-value');
    setupRGB('#b-value');
    setupHSL('#hsl-h-value');
    setupHSL('#hsl-s-value');
    setupHSL('#hsl-l-value');
    setupHSV('#hsv-h-value');
    setupHSV('#hsv-s-value');
    setupHSV('#hsv-v-value');

  $('#clear-butt').on( 'click' , () => {
    r = 0; g = 0; b = 0;
    $('input').val(0);
    $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
  } );

} );
