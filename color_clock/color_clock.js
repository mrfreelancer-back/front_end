const clock = document.querySelector("#clock")
const body = document.querySelector("body")

function time(){
    function withZero(number) {
        if (number < 10) {
            number = "0" + number
        }

        return number
    }

    const today = new Date()
    const hour = withZero(today.getHours())
    const minute = withZero(today.getMinutes())
    const second = withZero(today.getSeconds())

    const changerBySecond = parseInt(second)

    if (changerBySecond < 10){
        body.style.background = `rgb(255, ${second}, 188)`
    }
    else if (changerBySecond < 20 && changerBySecond >= 10){
        body.style.background = `rgb(${second}, 52, 52)`
    }
    else if (changerBySecond < 30 && changerBySecond >= 20){
        body.style.background = `rgb(${second * 10}, 100, 240)`
    }
    else if (changerBySecond < 40 && changerBySecond >= 30){
        body.style.background = `rgb(230, 255, ${second * 3})`
    }
    else if (changerBySecond < 50 && changerBySecond >= 40){
        body.style.background = `rgb(255, ${second * 6}, 25)`
    }
    else{
        body.style.background = `rgb(${second * 2}, 255, 252)`
    }

    clock.innerText = `${hour} : ${minute} : ${second}`

    setTimeout(time, 1000)
}

time()