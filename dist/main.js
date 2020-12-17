const game = new GoldRush()
const Render = new Renderer()
const UP = 38
const DOWN = 40
const RIGHT = 39
const LEFT = 37
const W = 87
const S = 83
const D = 68
const A = 65

const ORI = [38 ,40 ,39 ,37 ,87 ,83 , 68 ,65]

const ORIDICT = {
    38: [1 , 'u'],
    40: [1 , 'd'],
    39: [1 , 'r'],
    37: [1 , 'l'],
    87: [2 , 'u'],
    83: [2 , 'd'],
    68: [2 , 'r'],
    65: [2 , 'l']
}



$('#play').on("click" ,async function()
{
    await game.newGame();
    Render.render(game.gitMatrix())
    //render

    // let firstName = $('#i1').val()
    // let lastName = $('#i2').val()
    // let id = $('#i3').val()
    // $.post('/addStudent', {firstName : firstName , lastName:lastName , id:id }, function (response) {
    //    console.log(response)
    // })

})

/// add button to start

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    let tuple 
    if (ORI.includes(key)){
        tuple = ORIDICT[key]
        if(game.movePlayer(tuple[0] , tuple[1]) == 1){
            if (game.siGameOver()){
                let winner = game.gitWinner()
                Render.render(game.gitMatrix())
                alert(`the Winner is player ${winner}`)
                game.newGame();
                Render.render(game.gitMatrix())
               
                //render game over
            }
            Render.render(game.gitMatrix())
        }
    }

   
 }