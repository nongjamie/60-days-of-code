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

  $('#r-value').on( 'input' , () => {
    let temp = parseFloat( $('#r-value').val() );
    if( (temp >= 0) && (temp <= 255) ) {
      r = temp;
      let myArray = rgbToHsl(r, g, b);
      let myArray2 = rgbToHsv(r, g, b);
      displayHSL(myArray);
      displayHSV(myArray2);
      $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
    }
    else {
      alert('The r value must be [0, 255] value.');
    }
  } );

  $('#g-value').on( 'input' , () => {
    let temp = parseFloat( $('#g-value').val() );
    if( (temp >= 0) && (temp <= 255) ) {
      g = temp;
      let myArray = rgbToHsl(r, g, b);
      let myArray2 = rgbToHsv(r, g, b);
      displayHSL(myArray);
      displayHSV(myArray2);
      $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
    }
    else {
      alert('The g value must be [0, 255] value.');
    }
  } );

  $('#b-value').on( 'input' , () => {
    let temp = parseFloat( $('#b-value').val() );
    if( (temp >= 0) && (temp <= 255) ) {
      b = temp;
      let myArray = rgbToHsl(r, g, b);
      let myArray2 = rgbToHsv(r, g, b);
      displayHSL(myArray);
      displayHSV(myArray2);
      $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
    }
    else {
      alert('The b value must be [0, 255] value.');
    }
  } );

  $('#hsl-h-value').on( 'input' , () => {
    let tempH = parseFloat( $('#hsl-h-value').val() );
    let tempS = parseFloat( $('#hsl-s-value').val() );
    let tempL = parseFloat( $('#hsl-l-value').val() );
    if( (tempH >= 0) && (tempH <= 1) ) {
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
      alert('The h value of hsl must be [0, 1] value.');
    }
  } );

  $('#hsl-s-value').on( 'input' , () => {
    let tempH = parseFloat( $('#hsl-h-value').val() );
    let tempS = parseFloat( $('#hsl-s-value').val() );
    let tempL = parseFloat( $('#hsl-l-value').val() );
    if( (tempS >= 0) && (tempS <= 1) ) {
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
      alert('The s value of hsl must be [0, 1] value.');
    }
  } );

  $('#hsl-l-value').on( 'input' , () => {
    let tempH = parseFloat( $('#hsl-h-value').val() );
    let tempS = parseFloat( $('#hsl-s-value').val() );
    let tempL = parseFloat( $('#hsl-l-value').val() );
    if( (tempL >= 0) && (tempL <= 1) ) {
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
      alert('The l value of hsl must be [0, 1] value.');
    }
  } );

  $('#hsv-h-value').on( 'input' , () => {
    let tempH = parseFloat( $('#hsv-h-value').val() );
    let tempS = parseFloat( $('#hsv-s-value').val() );
    let tempV = parseFloat( $('#hsv-v-value').val() );
    if( (tempH >= 0) && (tempH <= 1) ) {
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
      alert('The h value of hsv must be [0, 1] value.');
    }
  } );

  $('#hsv-s-value').on( 'input' , () => {
    let tempH = parseFloat( $('#hsv-h-value').val() );
    let tempS = parseFloat( $('#hsv-s-value').val() );
    let tempV = parseFloat( $('#hsv-v-value').val() );
    if( (tempS >= 0) && (tempS <= 1) ) {
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
      alert('The s value of hsv must be [0, 1] value.');
    }
  } );

  $('#hsv-v-value').on( 'input' , () => {
    let tempH = parseFloat( $('#hsv-h-value').val() );
    let tempS = parseFloat( $('#hsv-s-value').val() );
    let tempV = parseFloat( $('#hsv-v-value').val() );
    if( (tempV >= 0) && (tempV <= 1) ) {
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
      alert('The v value of hsv must be [0, 1] value.');
    }
  } );

  $('#clear-butt').on( 'click' , () => {
    r = 0;
    g = 0;
    b = 0;
    $('#r-value').val(0);
    $('#g-value').val(0);
    $('#b-value').val(0);
    $('#hsl-h-value').val(0)
    $('#hsl-s-value').val(0)
    $('#hsl-l-value').val(0)
    $('#hsv-h-value').val(0)
    $('#hsv-s-value').val(0)
    $('#hsv-v-value').val(0)
    $('#color-field').css( 'background-color' , `rgb(${r},${g},${b})` );
  } );

} );

// กดปุ่มขึ้นลง เพิ่มขึ้นทีละ 0.05
// มีการ alert
