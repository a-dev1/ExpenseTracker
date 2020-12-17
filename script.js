let balance_bx = document.querySelector(".balance-value");
let income_bx = document.querySelector(".income-value");
let expense_bx = document.querySelector(".expense-value");
let input_type = document.querySelector(".input-type");
let input_value = document.querySelector(".input-value");
let add_btn_bx = document.querySelector(".add-btn");
let item_container = document.querySelector(".history-container");

let income= 1000, expense=0, balance=0;


let calculate = () => {
    balance = income - Math.abs(expense);
    
    income_bx.innerHTML = `$${income}`
    expense_bx.innerHTML = `$${Math.abs(expense)}`
    balance_bx.innerHTML = `$${Math.abs(balance)}`
}


const makeItem = (type, value) => {
    const item = document.createElement('div');
    // const button = document.createElement('button');
    // const span1 = document.createElement('span');
    // const span2 = document.createElement('span');

    // button.innerHTML = "X";
    // button.addEventListener('click', removeItem);
    // span1.innerHTML = type;
    // span2.innerHTML = value;

    // item.appendChild(button);
    // item.appendChild(span1);
    // item.appendChild(span2);
    
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
        <button class="cross-btn" onclick="removeItem()">X</button>
        <span class="expense-name">${type}</span>
        <span class="expense-value">${value}</span>    
    `

    // button.classList.add('cross-btn');
    // span1.classList.add('expense-name');
    // span2.classList.add('expense-amount');

    item_container.appendChild(item)
    return item;
}

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

