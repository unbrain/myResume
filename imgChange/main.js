let allBtns = $('#imgBtns > span')
let size = allBtns.length
let n = 0;
allBtns.eq(n).addClass('green')

for(let i = 0; i < size; i++){
    $(allBtns[i]).on('click', function(e){
        let index = $(e.currentTarget).index()
        let move = index * (-400)
        $('#images').css({
            transform: 'translate(' + move + 'px)'
        })
        allBtns.eq(index).addClass('green').siblings('.green').removeClass('green')
        n = index 
    })
}

var timerId = timer()

function timer(){
    return setInterval(() => {
        n++
        allBtns.eq(n % size).trigger('click')
    }, 2000)
}

$('.window').on('mouseenter',() =>{
    clearInterval(timerId)
})

$('.window').on('mouseleave', () => {
    timerId = timer()
})