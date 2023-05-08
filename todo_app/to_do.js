const form = document.querySelector(".activity_form")
const activityInput = document.querySelector(".create_input")
const filterInput = document.querySelector(".filter_input")
const activitiesList = document.querySelector(".activities_list")
const clearActivities = document.querySelector(".clear_activities")

function addItem(event){
    if (activityInput.value.length < 6){
        alert("تعداد کاراکتر نباید کمتر از 6 باشد!")
    }
    else{
        const li = document.createElement("li")
        li.className = "activity_item"
        li.innerText = activityInput.value

        const i = document.createElement("i")
        i.classList = "fa fa-times delete_item"
        i.id = "delete_item"
        li.appendChild(i)

        activitiesList.appendChild(li)

        activityInput.value = ""
        event.preventDefault()
    }
}

function removeItem(event){
    if (event.target.id === "delete_item"){
        if (confirm("آیتم حذف شود؟")){
            event.target.parentElement.remove()
        }
    }
}

function removeAll(event){
    if (confirm("تمامی آیتم ها حذف شوند؟")){
        activitiesList.innerHTML = ""
    }
}

function filterItems(event){
    const filter = event.target.value

    document.querySelectorAll(".activity_item").forEach(function (each){
        if (each.textContent.indexOf(filter) === -1){
            each.style.display = "none"
        }
        else{
            each.style.display = "block"
        }
    })
}

function loadEventListener(){
    form.addEventListener("submit", addItem)

    activitiesList.addEventListener("click", removeItem)

    clearActivities.addEventListener("click", removeAll)

    filterInput.addEventListener("keyup", filterItems)
}

loadEventListener()