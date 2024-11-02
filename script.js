const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // if input box value is empty
    if (inputBox.value === '') {
        // give message you must write something
        alert("You must write something!");
    }
    else {
        // if we write
        // create html element tag name li,storing in li variable
        let li = document.createElement("li");
        // text is (innerhtml -text inside li)
        // (input box.value-text what ever u r entering in put box will be added in li)
        li.innerHTML = inputBox.value;
        // where it shd be displayed displayed under list container
        listContainer.appendChild(li);
        // adding cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // code of cross icon
        //    display it
        li.appendChild(span);
    }
    // clearing the box
    inputBox.value = "";
    saveData();
    // save the updated content in the block

}
// javascript for click function
// when-ever  we click in the container where we have stored all task
listContainer.addEventListener("click", function (e) {
    // will check where we have clicked ,if we have clicked on li then
    if (e.target.tagName === "LI") {
        // then add checked class name it will remove
        e.target.classList.toggle("checked");
        // when task is checked/unchecked it shd save
        saveData();
    }
    // if we click on span it will delete li element so task deleted
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // when task is removed then also save it
        saveData();
    }
}, false);
// save data obce u close
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    // what ever content is there is list container that will be stored in  browser with name of data and we can display using get item

}
// when we open website again it shd display
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();