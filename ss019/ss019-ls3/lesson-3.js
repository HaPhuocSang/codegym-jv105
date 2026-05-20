class Product {
    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    getProduct(index) {
        return this.products[index].name;
    }

    add(product) {
        this.products.push(product);
    }

    edit(index, newNameProduct) {
        this.products[index].setName(newNameProduct);
    }

    delete(index) {
        this.products.splice(index, 1);
    }

    display() {
        let tbody = document.querySelector("#productList");
        tbody.innerHTML = this.products.map((product, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
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
}

const productManager = new ProductManager();
let editIndex = -1;
productManager.add(new Product("Sony Xperia"));
productManager.add(new Product("Samsung Galaxy"));
productManager.add(new Product("Nokia 6"));
productManager.add(new Product("Xiaomi Redmi Note 4"));
productManager.add(new Product("Apple iPhone 6S"));
productManager.display();

function addProduct() {
    let productName = document.getElementById("productName").value;
    if (!productName.trim().length) {
        alert("Bạn chưa nhập tên sản phẩm!");
        return;
    }
    if (editIndex === -1) {
        productManager.add(new Product(productName.trim()));
        alert(`Bạn đã thêm ${productName.trim()} vào danh sách sản phẩm!`);
    } else {
        productManager.edit(editIndex, productName.trim());
        alert("Sửa sản phẩm thành công!");
        editIndex = -1;
    }
    productManager.display();
    document.getElementById("productName").value = "";
}

function editProduct(index) {
    document.getElementById("productName").value = productManager.getProduct(index);
    editIndex = index;
}

function deleteProduct(index) {
    let check = confirm("Bạn có chắc muốn xoá sản phẩm này?");
    if (check) {
        productManager.delete(index);
    }
    productManager.display();
}
