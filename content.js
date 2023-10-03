console.log("Content script for age check is running");

function setAgeAndSubmit() {
    let ageYearSelect = document.querySelector('#ageYear');
    if (ageYearSelect) {
        ageYearSelect.value = '1950';
        console.log("Changed to 1950");

        let button = document.getElementById('view_product_page_btn');
        if (button) {
            button.click();
            console.log("Button clicked.");
        } else {
            console.log("Button with the specified ID not found!");
        }
    } else {
        console.log("Age year select not found!");
    }
}

setAgeAndSubmit();

setTimeout(setAgeAndSubmit, 2000);
