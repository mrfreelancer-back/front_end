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

    if (changerBySecond < 7){
        body.style.background = `rgb(${second * 10}, 100, 240)`
    }
    else if (changerBySecond >= 6 && changerBySecond < 12){
        body.style.background = `rgb(255, ${second * 6}, 25)`
    }
    else if (changerBySecond >= 12 && changerBySecond < 18){
        body.style.background = `rgb(230, 255, ${second * 3})`
    }
    else if (changerBySecond >= 18 && changerBySecond < 24){
        body.style.background = `rgb(255, ${second * 2}, 200)`
    }
    else if (changerBySecond >= 24 && changerBySecond < 30){
        body.style.background = `rgb(${second * 2}, 255, 252)`
    }
    else if (changerBySecond >= 30 && changerBySecond < 36){
        body.style.background = `rgb(255, ${second}, 188)`
    }
    else if (changerBySecond >= 36 && changerBySecond < 42){
        body.style.background = `rgb(${second * 2}, 255, 140)`
    }
    else if (changerBySecond >= 42 && changerBySecond < 48){
        body.style.background = `rgb(150, 250, ${second})`
    }
    else if (changerBySecond >= 48 && changerBySecond < 54){
        body.style.background = `rgb(110, ${second}, 0)`
    }
    else{
        body.style.background = `rgb(${second}, 52, 52)`
    }

    clock.innerText = `${hour} : ${minute} : ${second}`

    setTimeout(time, 1000)
}

time()