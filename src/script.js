const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write some task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    inputBox.focus();
    saveData(); 
}

inputBox.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.classList.add("fade");
        e.target.parentElement.classList.add("fade");

        e.target.addEventListener("animationend", function() {
            e.target.parentElement.remove();
            saveData();
        });
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

displayTask();
