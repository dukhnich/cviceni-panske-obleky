const orderForm = document.querySelector('#order-form');
const orderBtn = document.querySelector('#order-btn');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}