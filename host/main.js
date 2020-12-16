

$('#b1').on("click" , function()
{
    console.log('hhhh')
    let mapShape = $('#mapShape').val()
    let password = $('#password').val()
    $.post(`/addMap/${password}`, {data :mapShape }, function (response) {
       console.log(response)
    })

})


