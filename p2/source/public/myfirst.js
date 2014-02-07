"use strict";

console.log('hi');
$('#submit').click(function() {
    var bill = $('#bill').val();
    var people = $('#people').val();
    if (bill < 0 || people < 0) {
        alert('wrong input');
    } else {
        $('#amount').text(bill/people);
    }
});


