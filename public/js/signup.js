$(document).ready(() => {
    $('#frm').submit((e) => {
        e.preventDefault();
        const username = $('#uname').val().trim();
        const password = $('#password').val().trim();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const DOB = document.getElementById('DOB').value;
        const sonOfOp = document.getElementById('sonOfOp').value;
        const sonOfVal = document.getElementById('sonOfVal').value;
        const addressLine1 = document.getElementById('addressLine1').value;
        const addressLine2 = document.getElementById('addressLine2').value;
        const pincode = document.getElementById('pincode').value;
        const state = document.getElementById('state').value;

        //  ajax() method is used to perform an AJAX (asynchronous HTTP) request
        $.ajax('/api/v1.0/users/signup', {
            //  Specifies data to be sent to the server
            data: {
                username,
                password,
                firstName,
                lastName,
                gender,
                DOB,
                sonOfOp,
                sonOfVal,
                addressLine1,
                addressLine2,
                pincode,
                state
            },
            method: 'post',
            // 	A function to be run when the request succeeds
            success: (res) => {
                alert(res.data.message + '\nPlease login to continue');
                location.href = '/login.html';
            },
            // 	A function to run if the request fails.
            error: err => {
                alert(err.responseJSON.data.message);
            }
        });
    });
});