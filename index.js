const getElementUsingId = (id)=>{
    return document.getElementById(id);

}

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
    const inputField1 = parseInt(getElementUsingId("inputfiled_1").value);
    handleDonation(inputField1, inputAmount1);
    
};

const handleClickTwo = (e) => {
    let inputAmount2 = getElementUsingId("input_ammount_2");
    const inputField2 = parseInt(getElementUsingId("inputfiled_2").value);
    handleDonation(inputField2, inputAmount2);
}
const handleClickThree = (e) => {
    let inputAmount3 = getElementUsingId("input_ammount_3");
    const inputField3 = parseInt(getElementUsingId("inputfiled_3").value);
    handleDonation(inputField3, inputAmount3);
}
const handleClickFour = (e) => {
    let inputAmount4 = getElementUsingId("input_ammount_4");
    const inputField4 = parseInt(getElementUsingId("inputfiled_4").value);
    handleDonation(inputField4, inputAmount4);
}

