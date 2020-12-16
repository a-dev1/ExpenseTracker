let balance_bx = document.querySelector(".balance-value");
let income_bx = document.querySelector(".income-value");
let expense_bx = document.querySelector(".expense-value");
let input_type = document.querySelector(".input-type");
let input_value = document.querySelector(".input-value");
let add_btn_bx = document.querySelector(".add-btn");
let item_container = document.querySelector(".history-container");

const makeItem = () => {
    const item = document.createElement('div');
    const button = document.createElement('button');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    item.appendChild(button)
    item.appendChild(span1)
    item.appendChild(span2)

    item_container.appendChild(item)
}
