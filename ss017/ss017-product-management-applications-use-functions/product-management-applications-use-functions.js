const products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S"];
let editIndex = -1;

function displayProducts() {
    let tbody = document.querySelector("#productList");
    tbody.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let tr = document.createElement("tr");
        let tdIndex = document.createElement("td");
        tdIndex.textContent = (i + 1).toString();
        let tdProductName = document.createElement("td");
        tdProductName.textContent = products[i];
        let tdEdit = document.createElement("td");
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editProduct(i);
        tdEdit.appendChild(editBtn);
        let tdDelete = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => deleteProduct(i);
        tdDelete.appendChild(deleteBtn);
        tr.appendChild(tdIndex);
        tr.appendChild(tdProductName);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        tbody.appendChild(tr);
    }
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
        for (let i = 0; i < products.length; i++) {
            if (i === index) {
                for (let j = i; j < products.length - 1; j++) {
                    products[j] = products[j + 1];
                }
                products.pop();
            }
        }
        alert("Xoá sản phẩm thành công!");
    }
    displayProducts();
}

displayProducts();
