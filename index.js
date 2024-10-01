const getElementUsingId = (id)=>{
    return document.getElementById(id);

}



const showblog = getElementUsingId("showblog");
const showHistory = getElementUsingId("showHistory");
const donat_container = getElementUsingId("donat_container");
const history_container = getElementUsingId("history_container");
const closeModel = getElementUsingId("closeModel");
const modal = getElementUsingId("modal");


const toggleView = (showElement, hideElement, activeButton, inactiveButton) => {
    hideElement.classList.add("hidden");
    showElement.classList.remove("hidden");
    activeButton.classList.add("bg-btn_bg");
    inactiveButton.classList.remove("bg-btn_bg");
};

showblog.addEventListener('click', (e) => {
    e.preventDefault();
    toggleView(donat_container, history_container, showblog, showHistory);
});

showHistory.addEventListener('click', (e) => {
    e.preventDefault();
    toggleView(history_container, donat_container, showHistory, showblog);
});



showHistory.addEventListener("click", (e) => {
    e.preventDefault();
    history_container.classList.add("flex");
    history_container.classList.remove("hidden");
    donat_container.classList.add("hidden");
    showHistory.classList.add("bg-btn_bg");
    showblog.classList.remove("bg-btn_bg");
});



let sum = 5500;
const mainAmount = getElementUsingId('mainAmount');
// common function 
const handleDonation = (inputVal, val, title) => {
    let value = parseInt(val.innerHTML);
    let date = new Date();

    if (isNaN(inputVal) || inputVal <= 0 || sum <= 0 || inputVal === ""  || inputVal >sum) {
        alert("Invalid Donate Ammount");
    } else {
        sum -= inputVal;
        val.innerHTML = value += inputVal;
        mainAmount.innerText = sum;
      
    }
};
//  first 
const handleClickOne = (e) => {
    let inputAmount1 = getElementUsingId("input_ammount_1");
    let title1 = getElementUsingId("title_1");
    const inputField1 = parseInt(getElementUsingId("inputfiled_1").value);
    handleDonation(inputField1, inputAmount1, title1);
};


function blog() {
    location.replace('./blog.html')
  }
//   function home() {
//     location.replace('./index.html')
//   }
