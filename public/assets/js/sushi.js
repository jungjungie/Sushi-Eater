// Makes sure we wait to attach our handlers until the DOM is fully loaded
$(function () {

    // Event listener for 'Eat it!' button
    // $('.eatenBtn').on('click', function (event) {
    //     let id = $(this).data('id');
    //     let nowEaten = $(this).data('nowEaten');

    //     let newEatState = {
    //         eating: nowEaten
    //     };

    //     // Sends the PUT request
    //     $.ajax('/api/sushi/' + id, {
    //         type: 'PUT',
    //         data: nowEatState
    //     }).then(
    //         function () {
    //             console.log('changed eaten to', nowEaten);
    //             // Reloads the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    // Event listener for 'submit' button to add new sushi
    $('#add-sushi-form').on('submit', function (event) {
        event.preventDefault();

        let newSushi = {
            sushi_name: $('#new-sushi').val().trim(),
            eaten: 0
        };

        console.log(newSushi);

        // Sends the POST request
        $.ajax('/api/sushi', {
            type: 'POST',
            data: newSushi
        }).then(
            function () {
                console.log('created new sushi');
           
                location.reload();
            }
        );
    });
});
