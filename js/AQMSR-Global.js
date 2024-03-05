function validateEmail(email) { //Validates the email address
    var regexp=/[A-Za-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    return regexp.test(email);
}
function validatePhone(phone) { //Validates the phone number
    var phoneRegex = /\d{10}$/; // Change this regex based on requirement
    return phoneRegex.test(phone);
}

function validation(){
    var name= $('#txtname').val();
    var phone = $('#numphone').val();
    var email= $('#txtemail').val();
    var details = $('#txtdetails').val();
    var valid = true;
    $('.validator').hide();

    if(name === ""|| name == null){
        $('#validatename').show();
        valid = false;
    }
    if(!validatePhone(phone)){
        $('#validatephone').show();
        valid = false;
    }
    if(!validateEmail(email)){
        $('#validateemail').show();
        valid = false;
    }
    if(details === "" || details == null){
        $('#validatedetails').show();
        valid = false;
    }

    if(valid){
        var params = {
            name: $("#txtname").val(),
            email: $("#txtemail").val(),
            phone : $("#numphone").val(),
            type : $("#type").val(),
            details : $("#txtdetails").val(),
        };

        const serviceID = "service-aqmsr2019";
        const templateID = "template_aqmsr";
        const templateID2 = "template_user";

        emailjs.send(serviceID, templateID2,params)

        emailjs.send(serviceID, templateID, params)
            .then(res=>{
                       $('#form-contact')[0].reset();
                console.log(res);
                console.log("info has been sent");
                alert("Your message was sent successfully!!")

            })
            .catch(err=>console.log(err));
    }
}