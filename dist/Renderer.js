class Renderer{
    constructor(){

    }
    render(matrix){
        const source = $("#board").html()
        const template = Handlebars.compile(source) 
        const newHtml = template(matrix)
        $('#mainDiv').empty().append(newHtml)
    }
}