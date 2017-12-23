$( () => {

  const displayProduct = ( array ) => {
    for( let i = 0 ; i < array.length ; i++ ) {
      let statusOE;
      if( array[i].OE ) {
        statusOE = 'Yes';
      }
      else {
        statusOE = 'No';
      }
      $('#products-field').append(
        `
        <div class="card" style="width: 300px; padding: 10px; margin: 20px; border:2px dotted lightblue;">
          <img class="card-img-top" src="${array[i].img}" alt="Card image cap" style="width: 200px; height: 200px; margin: auto;">
          <div class="card-body">
            <h4 class="card-title">Name : ${array[i].name}</h4>
            <p class="card-text">Volume : ${array[i].volume}</p>
            <p class="card-text">Cose : $${array[i].cost}</p>
            <p class="card-text">OE : ${statusOE}</p>
            <p class="card-text">Shelf_num : ${array[i].shelf_num}</p>
          </div>
        </div>
        `
      );
    }
  };

  $.ajax({
    url: 'https://ske-minimart.herokuapp.com/api/drinks',
    type: 'GET',
  })
  .done(function( response ) {
    console.log("success");
    displayProduct( response );
  })
  .fail(function( respose ) {
    console.log("error");
    console.log( respose );
  })
  .always(function() {
    console.log("complete");
  });

  $('#admin-btn').on( 'click' , () => {
    window.location = '../Day8/index2.html';
  } );

  $('#refresh-btn').on( 'click' , () => {
    window.location = '../Day8/index.html';
  } );

} );
