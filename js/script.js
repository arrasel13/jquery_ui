$(document).ready(function(){

    // Draggable example
    $( "#draggable" ).draggable();

    // Droppable example
    $( "#draggable1" ).draggable({ revert: "invalid" });
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
              .html( "Dropped!" );
        }
    });

    //   Sortable example
    $('#sortable').sortable();

    // Accordion example
    $( "#accordion" ).accordion({
        collapsible: true
    });

    // Auto Complete example
    var courseName = [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'PHP',
        'WordPress'
    ];
    $( ".courses" ).autocomplete({
        source: courseName
    });

    // Date Picker example
    $( "#datepicker" ).datepicker();

    // Progress bar example
    $( ".progressbar" ).progressbar({
        value: 37
    });

    // Menu example
    $( "#menu" ).menu();

    // Select Menu example
    $( "#speed" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
    
    // Tooltip exmaple
    $('.t_tip').tooltip({
        content: "Awesome title!"
    });

    // Tabs Example
    $( "#tabs" ).tabs({
        // collapsible: true,
        event: "mouseover"
    });

    // Add class example
    $('.a_class').click(function(){
        $('.a1_class').addClass('effect1 effect2');
    });
    
    // Remove class example
    $('.r_class').click(function(){
        $('.a1_class').removeClass('effect1 effect2');
    });

    // Toggler effect example
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $( "#effectTypes" ).val();
   
        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
          options = { percent: 50 };
        } else if ( selectedEffect === "size" ) {
          options = { to: { width: 200, height: 60 } };
        }
   
        // Run the effect
        $( "#effect" ).toggle( selectedEffect, options, 500 );
      };
   
      // Set effect from select menu value
      $( "#button" ).on( "click", function() {
        runEffect();
      });

    //   Color Animation example
    var state = true;
    $( "#button1" ).on( "click", function() {
      if ( state ) {
        $( "#effect3" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect3" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

    // Switch Class example
    $( "#button2" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });

    // Image cycler example
    function left( element, using ) {
      element.position({
        my: "right middle",
        at: "left+25 middle",
        of: "#imgCycler",
        collision: "none",
        using: using
      });
    }
    function right( element, using ) {
      element.position({
        my: "left middle",
        at: "right-25 middle",
        of: "#imgCycler",
        collision: "none",
        using: using
      });
    }
    function center( element, using ) {
      element.position({
        my: "center middle",
        at: "center middle",
        of: "#imgCycler",
        using: using
      });
    }
 
    left( $( "img" ).eq( 0 ) );
    center( $( "img" ).eq( 1 ) );
    right( $( "img" ).eq( 2 ) );
 
    function animate( to ) {
      $( this ).stop( true, false ).animate( to );
    }
    function next( event ) {
      event.preventDefault();
      center( $( "img" ).eq( 2 ), animate );
      left( $( "img" ).eq( 1 ), animate );
      right( $( "img" ).eq( 0 ).appendTo( "#imgCycler" ) );
    }
    function previous( event ) {
      event.preventDefault();
      center( $( "img" ).eq( 0 ), animate );
      right( $( "img" ).eq( 1 ), animate );
      left( $( "img" ).eq( 2 ).prependTo( "#imgCycler" ) );
    }
    $( "#previous" ).on( "click", previous );
    $( "#next" ).on( "click", next );
 
    $( "img" ).on( "click", function( event ) {
      $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
    });
 
    $( window ).on( "resize", function() {
      left( $( "img" ).eq( 0 ), animate );
      center( $( "img" ).eq( 1 ), animate );
      right( $( "img" ).eq( 2 ), animate );
    });


    // Resizable example
    $( "#resizable" ).resizable();

    // Selectable example
    $( "#selectable" ).selectable();

    // Slider example
    $( "#slider" ).slider();

});