

$('#b1').on("click" , function()
{
    console.log('hhhh')
    let mapShape = $('#mapShape').val()
    let password = $('#password').val()
    let num = $('#num').val()
    $.post(`/addMap/${password}/${num}`, {data :mapShape }, function (response) {
       console.log(response)
    })

})


