const emailValue = document.getElementById("exampleInputEmail1");
const passwordValue = document.getElementById("exampleInputPassword1");
const singUpBtn = document.getElementById("singUpBtn");




allUserInfo =[];


if(localStorage.getItem("userInfo") !== null){
    allUserInfo =JSON.parse(localStorage.getItem("userInfo"))
    
};


function signUp (){
    let signUpForm = {
        email:emailValue.value, 
        password: passwordValue.value
    }
    allUserInfo.push(signUpForm);
    localStorage.setItem("userInfo", JSON.stringify(allUserInfo));
    clear()
    window.location.href = "/signIn.html";

}
function signIn(){
    signInEmailValue=emailValue.value;
    signInPasswordValue=passwordValue.value;
    console.log(allUserInfo);
    for(let i = 0 ; i < allUserInfo.length ; i++){
        if(allUserInfo[i].email == signInEmailValue && allUserInfo[i].password == signInPasswordValue){
            window.location.href='/home.html'
        }else{
            alert('your password or email is wrong please enter correct information')
        }
    }
}


function clear (){
    emailValue.value = "";
    passwordValue.value = "";
}

//all products
const products = [
    {
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },{
        image: './images/download.jpeg',
        price: 14,
        name: 'cart'
    },
    
]
// display all products

function displayProducts (){
    let cartona=``;
    for(var i = 0 ; i < products.length ; i++){
        cartona+= `
        
                    <div class='col-3'>
                        <img src="${products[i].image}" alt="">
                        <div class="product-info">
                            <p>price : ${products[i].price}$</p>
                            <p>product Name : ${products[i].name}</p>
                        </div>
                            <button onclick='addToCart (${i})' class="btn my-3 btn-success">Add To Cart</button>


                    </div>
        
        
        `
    }
    document.getElementById("products-container").innerHTML = cartona
}
displayProducts()


// add to cart 
let cart = [];




let cartContainer=document.querySelector(".cart-container")

function addToCart(index) {
    const selectedProduct = products[index];
    cart.push(selectedProduct);
    localStorage.setItem("product", JSON.stringify(cart));
    
    let cartona = '';
    let totalPrice = 0;

    // Generate the cart display and calculate total price
    for (let i = 0; i < cart.length; i++) {
        cartona += `
            <li class=" my-2">
                <img src="${cart[i].image}" alt="">
                <div class="cart-content">
                    <p>Price: ${cart[i].price}$</p>
                    <p>Product Name: ${cart[i].name}</p>
                </div>
            </li>
        `;
        totalPrice += cart[i].price; // Add each product's price to the total
    }

    // Display the cart items
    cartContainer.innerHTML = cartona;

    // Display the total price
    document.getElementById("total-price").innerText = `Total Price: ${totalPrice}$`;
    console.log("total price :", totalPrice);
}
