// Makes sure we wait to attach our handlers until the DOM is fully loaded
$(function () {
    $('.change-eaten').on('click', function (event) {
        let id = $(this).data('id');
        let newEaten = $(this).data('neweaten');

        let newEatState = {
            eating: newEaten
        };

        // Sends the PUT request
        $.ajax('/api/sushi/' + id, {
            type: 'PUT',
            data: newEatState
        }).then(
            function () {
                console.log('changed eaten to', newEaten);
                // Reloads the page to get the updated list
                location.reload();
            }
        );
    });

    $('.add-sushi-form').on('submit', function (event) {
        // Makes sure to preventDefault on a submit event
        event.preventDefault();

        var newSushi = {
            sushi_name: $('#new-sushi').val().trim(),
            eaten: $('[name=eaten]:checked').val().trim()
        };

        // Sends the POST request.
        $.ajax('/api/sushi', {
            type: 'POST',
            data: newSushi
        }).then(
            function () {
                console.log('created new sushi');
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
