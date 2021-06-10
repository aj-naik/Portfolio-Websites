$(function(){
    console.log("Yes");
    $('#button').on('click',function(event){
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        $.ajax({
            method:"POST",
            url:"conn.php",
            data:{
                name:name,
                email:email,
                msg:msg,
                type:'Uplink'
            },
            success:function(data){
                console.log(data);
            }
        })
    })


});

