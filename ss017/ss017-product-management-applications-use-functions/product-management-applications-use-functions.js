const products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S"];
let editIndex = -1;

function displayProducts() {
    let tbody = document.querySelector("#productList");
    tbody.innerHTML = products.map((productName, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${productName}</td>
            <td>
                <button 
                    class="edit-btn" 
                    onclick="editProduct(${index})">
                    Edit
                </button>
            </td>
            <td>
                <button 
                    class="delete-btn" 
                    onclick="deleteProduct(${index})">
                    Delete
                </button>
            </td>
        </tr>
    `).join("");
}

function addProduct() {
    let productName = document.getElementById("productName").value;
    if (!productName.trim().length) {
        alert("Bạn chưa nhập tên sản phẩm!");
        return;
    }
    if (editIndex === -1) {
        products.push(productName.trim());
        alert(`Bạn đã thêm ${productName.trim()} vào danh sách sản phẩm!`);
    } else {
        products[editIndex] = productName.trim();
        alert("Sửa sản phẩm thành công!");
        editIndex = -1;
    }
    displayProducts();
    document.getElementById("productName").value = "";
}

function editProduct(index) {
    document.getElementById("productName").value = products[index];
    editIndex = index;
}

function deleteProduct(index) {
    let check = confirm("Bạn có chắc muốn xoá sản phẩm này?");
    if (check) {
        products.splice(index, 1);
        alert("Xoá sản phẩm thành công!");
    }
    displayProducts();
}

displayProducts();
