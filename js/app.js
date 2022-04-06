const checkbox = document.getElementById("pricing");
let checkboxValue = checkbox.checked;

const basicValue = document.getElementById("basic_value");
const proValue = document.getElementById("pro_value");
const masterValue = document.getElementById("master_value");

checkbox.addEventListener('click', e => {
    checkboxValue = checkbox.checked;
    if(!checkboxValue){
        basicValue.innerHTML = "&dollar;199.99";
        proValue.innerHTML = "&dollar;249.99";
        masterValue.innerHTML = "&dollar;399.99";
    }else{
        basicValue.innerHTML = "&dollar;19.99";
        proValue.innerHTML = "&dollar;24.99";
        masterValue.innerHTML = "&dollar;39.99";
    }
})
