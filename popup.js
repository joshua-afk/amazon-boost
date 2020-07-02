document.getElementById("myButton").addEventListener("click", function () {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex

        console.log('Tab script:');

        let customer_data = document.querySelectorAll("[data-test-id='shipping-section-buyer-address']")

        console.log(customer_data);

        for (let data of customer_data) {
            console.log(data);
        }

        // console.log(document.body);
        // return document.body.innerHTML;
        // return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});
