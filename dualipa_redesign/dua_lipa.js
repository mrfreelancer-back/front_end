let openOrClosed = "closed"

function x(){
    const terms = document.getElementById("terms_doc")
    const termsSpan = document.getElementById("terms_span")
    if (openOrClosed == "closed"){
        termsSpan.innerText = "HIDE"
        terms.style.display = "block"
        openOrClosed = "opened"
    }
    else{
        termsSpan.innerText = "TERMS"
        terms.style.display = "none"
        openOrClosed = "closed"
    }
}

