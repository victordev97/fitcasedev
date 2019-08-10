(function() {
    document.getElementById("btnEmail1").addEventListener("click", sendEmail);
    function sendEmail() {
        const email = document.getElementById('inEmail1').value;
        const dataSend = '{"email":"'+email+'"}';
        console.log(dataSend);
        $.ajax({
            url: 'http://localhost:5000/api/users',
            dataType: 'text',
            type: 'post',
            contentType: 'application/json',
            data: dataSend,
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }
})();