$( ".circle" ).each( function() {

    var radius = $( this ).outerWidth() / 2,
        left = $( this ).offset().left,
        top = $( this ).offset().top;

    $( this ).data( {

        "radius": radius,
        "left": left,
        "top": top,
        "clicked": false

    } );

    $( "body" ).data ( { "hovering":false } );

} );

//move and expand
function setLocations( circle, expand, event )  {

    var $this = $( circle ),
        circle = $this.data(),
        hoveredX = circle.left + circle.radius,
        hoveredY = circle.top + circle.radius;

    $( "body" ).data( "hovering", true );

    //expand circle you're over
    $this.animate( {

        "width": ( 2 * circle.radius ) + expand + "px",
        "height": ( 2 * circle.radius ) + expand + "px",
        "left": circle.left - ( expand / 2 ) + "px",
        "top": circle.top - ( expand / 2 ) + "px",
        "border-top-left-radius": circle.radius + ( expand / 2 ) + "px",
        "border-top-right-radius": circle.radius + ( expand / 2 ) + "px",
        "border-bottom-left-radius": circle.radius + ( expand / 2 ) + "px",
        "border-bottom-right-radius": circle.radius + ( expand / 2 ) + "px"

    }, 75 );

    //images have to be done separately
    $this.children( "img" ).animate( {

        "border-top-left-radius": circle.radius + ( expand / 2 ) + "px",
        "border-top-right-radius": circle.radius + ( expand / 2 ) + "px",
        "border-bottom-left-radius": circle.radius + ( expand / 2 ) + "px",
        "border-bottom-right-radius": circle.radius + ( expand / 2 ) + "px"

    }, 75 );

    //text in circle
    if( $this.children( "div" ).length ) {

        var h = circle.radius + ( expand / 2 ),
            a = h / Math.sqrt( 2 ),
            size = 2 * a,
            padding = h - a;

        $this.children( "div" ).animate( {

            "left": padding,
            "top": padding,
            "width": size,
            "height": size

        }, 75 );

    };

    //move other cicles out of the way
    $this.siblings( ".circle" ).each( function() {
        debugger;
        var $this = $( this );
        var circle = $this.data();
        var circleX = circle.left + circle.radius;
        var circleY = circle.top + circle.radius;
        var angle = Math.atan2(hoveredY - circleY, hoveredX - circleX);
        var topMove = ((expand /2 ) * Math.sin(angle));
        var leftMove = ((expand /2 ) * Math.cos(angle));

        $this.animate( {

            "left": "-=" + leftMove + "px",
            "top":  "-=" + topMove + "px"

        }, 75 );

    });

};

//put everything back the way it was
function resetLocations() {

    $( ".circle" ).each( function() {

        var $this = $( this ),
            circle = $this.data();

         $this.stop().animate( {

            "width": ( 2 * circle.radius ) + "px",
            "height": ( 2 * circle.radius ) + "px",
            "left": circle.left + "px",
            "top": circle.top + "px",
            "border-top-left-radius": circle.radius + "px",
            "border-top-right-radius": circle.radius + "px",
            "border-bottom-left-radius": circle.radius + "px",
            "border-bottom-right-radius": circle.radius + "px"

        }, 75 );

        $this.children( "img" ).stop().animate( {

            "border-top-left-radius": circle.radius + "px",
            "border-top-right-radius": circle.radius + "px",
            "border-bottom-left-radius": circle.radius + "px",
            "border-bottom-right-radius": circle.radius + "px"

        }, 75 );

        if( $this.children( "div" ).length ) {

            var h = circle.radius,
                a = h / Math.sqrt( 2 ),
                size = 2 * a,
                padding = h - a;

            $this.children( "div" ).animate( {
                "left": padding,
                "top": padding,
                "width": size,
                "height": size

            }, 75 );

        };

    } );

    $( "body" ).data( "hovering", false );

};

//is mouse inside circle or in "corner" of div
function inCircle( circle, x, y ) {

    var radius = circle.outerWidth() / 2,
        circleX = circle.offset().left + radius,
        circleY = circle.offset().top + radius,
        xDiff = ( circleX - x ),
        yDiff = ( circleY - y ),
        mouseDistance = Math.sqrt( ( xDiff * xDiff ) + ( yDiff * yDiff ) );

    return ( mouseDistance > radius ? false : true );

};

$( ".circle" ).mouseleave( function( event ) {

    resetLocations();
    $( this ).data( "clicked", false );

});

$( ".circle" ).mousemove( function( event ) {

    if( inCircle( $( this ), event.pageX, event.pageY ) ) {

        if ( !$( "body" ).data( "hovering" ) ) {

            setLocations( this, 40, event );

        };

    } else {

        if ( $( "body" ).data( "hovering" ) ) {

            resetLocations();
            $( this ).data( "clicked", false );

        };

    };

});

$( ".circle" ).click( function( event ) {

    if( $( this ).data( "clicked" ) ) {

        resetLocations();
        $( this ).data( "clicked", false );

    } else {

        if( inCircle( $( this ), event.pageX, event.pageY ) ) {

            $( this ).data( "clicked", true );
            setLocations( this, 200, event );

        } else {

            resetLocations();
            $( this ).data( "clicked", false );

        };

    };

});
