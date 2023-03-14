


var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDiscriptionInput=document.getElementById("productDescription");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName('form-control');
var currentIndex=0;

var products=[]
if(JSON.parse(localStorage.getItem("productList")) !=null){
    products=(JSON.parse(localStorage.getItem("productList")));
    displayProduct();
}
// localStorage.setItem("name","Abdelrahman");

// console.log(localStorage.getItem("name"));


addBtn.onclick= function (){
    if(addBtn.innerHTML=='Add Product'){  //add mode
        addProduct()
    }
    else{
        updateProduct()
    }
    displayProduct()
    resetForm()
}
function addProduct(){
    var product ={
        name:productNameInput.value,
        price:productPriceInput.value,
        Category:productCategoryInput.value,
        Discription:productDiscriptionInput.value,
        }
        products.push(product)
        localStorage.setItem("productList",JSON.stringify(products));
}
function displayProduct(){
    var cartona='';
    for(var i=0; i<products.length ; i++){
        cartona+=
        `<tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].Category}</td>
            <td>${products[i].Discription}</td>
            <td><button onclick="getProductInfo(${i})"class="btn btn-outline-danger">Update</button><td/>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-warning ">Delete</button><td/>
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML=cartona;
    localStorage.getItem("productList")
}
function deleteProduct(index){
    products.splice(index,1);
    displayProduct();
    localStorage.setItem("productList",JSON.stringify(products));

}
function getProductInfo(index){
    currentIndex=index;
    var currentProduct=products[index];
    productNameInput.value=currentProduct.name;
    productPriceInput.value=currentProduct.price
    productCategoryInput.value=currentProduct.Category
    productDiscriptionInput.value=currentProduct.Discription
    addBtn.innerHTML='updateProduct';
}
function updateProduct(){
    var product ={
        name:productNameInput.value,
        price:productPriceInput.value,
        Category:productCategoryInput.value,
        Discription:productDiscriptionInput.value,
        }
    products[currentIndex]=product;
    localStorage.setItem("productList",JSON.stringify(products));

}

function resetForm(){
    for(var i=0; i<inputs.length;i++){
        inputs[i].value='';
    }

   

    // productNameInput.value='';
    // productPriceInput.value='';
    // productCategoryInput.value='';
    // productDiscriptionInput.value='';
}

function search(searchTxt){
    var cartona='';
    for(var i=0; i<products.length ; i++){
        if(products[i].name.toLowerCase().includes(searchTxt.toLowerCase())){
            cartona+=
            `<tr>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].Category}</td>
                <td>${products[i].Discription}</td>
                <td><button class="btn btn-outline-danger">Update</button><td/>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-warning ">Delete</button><td/>
            </tr>`;
        }
        document.getElementById('tableBody').innerHTML=cartona;
    }
}

// var productNameInput=document.getElementById('productName');
// var productPriceInput=document.getElementById('productPrice');
// var productCategoryInput=document.getElementById('productCategory');
// var productDiscriptionInput=document.getElementById('productDescription');
// var addBtn=document.getElementById('addBtn');

// var products=[];
//  addBtn.onclick =function (){
//    addProducts()
//     displayProducts()
// }

// function addProducts(){
//      var product={
//         name:productNameInput.value,
//         price:productPriceInput.value,
//         Category:productCategoryInput.value,
//         Discription:productDiscriptionInput.value,
//     }
//     products.push(product);
//     // console.log(products)
// }

// function displayProducts(){
//     var cartona='';
//     for(var i=0; i<products.length; i++){
//         cartona+=`<tr>
//         <td>`+products[i].name+`</td>
//         <td>`+products[i].price+`</td>
//         <td>`+products[i].Category+`</td>
//         <td>`+products[i].Discription+`</td>
//         </tr>`;
//     }
//     document.getElementById('tableBody').innerHTML=cartona;
// }