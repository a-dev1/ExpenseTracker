let balance_bx = document.querySelector(".balance-value");
let income_bx = document.querySelector(".income-value");
let expense_bx = document.querySelector(".expense-value");
let input_type = document.querySelector(".input-type");
let input_value = document.querySelector(".input-value");
let add_btn_bx = document.querySelector(".add-btn");
let item_container = document.querySelector(".history-container");

//initial Income would be 1000
let income= 1000, expense=0, balance=0;

//Update costs 
let calculate = () => {
    balance = income - Math.abs(expense);
    
    income_bx.innerHTML = `$${income}`
    expense_bx.innerHTML = `$${Math.abs(expense)}`
    balance_bx.innerHTML = `$${Math.abs(balance)}`
}

//create Item element on click
const makeItem = (type, value) => {
    const item = document.createElement('div');
 
    item.classList.add('item');
    if(value > 0){
        item.classList.add('debit')
        income += Number(value)
        calculate();
    }
    else{
        item.classList.add('credit');
        expense += Number(value)
        calculate();
    } 
    
    item.innerHTML = `
    <button class="cross-btn" onclick="removeItem(event)">X</button>
    <span class="expense-name">${type}</span>
    <span class="expense-value">${value}</span>    
    `
    item_container.appendChild(item)
    return item;
}

//To remove Item from DOM & Update cost values
const removeItem = (e) => {
    console.log(e.srcElement);
    
    let d_value = Number(e.target.nextElementSibling.nextElementSibling.innerText);
    
    if(d_value > 0){
        income -= d_value;
        calculate();
    }
    else {
        expense = Math.abs(expense) - Math.abs(d_value);
        calculate();
    }

    e.target.parentNode.remove();
}

//To add item on click on add transaction button
const addItem = () => {
    
    if(input_type.value != "" && input_value.value != "")
        makeItem(input_type.value, input_value.value);
    
    input_type.value = "";
    input_value.value = "";
}
                                   
add_btn_bx.addEventListener('click', addItem)

document.querySelectorAll('.cross-btn').forEach(btn => {
    btn.addEventListener('click', removeItem);
})

