var dropdown = "inactive";

$("#menu").click(function() {

    if (dropdown == "inactive") {
        $("#flexNavbarTwo").css(
            'display', 'flex',
        );
        dropdown = "active";
    } else {
        $("#flexNavbarTwo").css(
            'display', 'none',
        );
        dropdown = "inactive";
    }

});