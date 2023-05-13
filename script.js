let api1 = "https://dummyjson.com/posts";
let api2 = "https://dummyjson.com/products";
let api3 = "https://dummyjson.com/todos";

let container = document.getElementById("container");
const btn = document.getElementById("btn");
// btn.addEventListener("click",fetchData);
// async function fetchData() {
//     fetch1= await

// }
let ret1, ret2, ret3;

async function fetch1() {
  try {
    let res1 = await fetch(api1);
    let json = await res1.json();

    let posts = json.posts;

    //     <table id="table1">
    //     <thead id="head1">My Name is Minhaj
    //     </thead>
    //     <tbody id="body1">
    //          <tr><td>Sl no</td><td>name</td><td>age</td></tr>
    //         <tr><td>1</td><td>Minhaj</td><td>23</td></tr>
    //     </tbody>
    //     <tfoot></tfoot>
    // </table>

    let table1 = document.createElement("table");
    table1.id = "table1";

    let tableTitle = document.createElement("h3");
    tableTitle.innerText = "Posts";
    tableTitle.className = "th";

    let tableBody = document.createElement("tbody");

    let row = document.createElement("tr");
    let id = document.createElement("td");
    id.innerText = "id";
    let title = document.createElement("td");
    title.innerText = "title";
    let body = document.createElement("td");
    body.innerText = "body";
    let userId = document.createElement("td");
    userId.innerText = "userId";
    let reactions = document.createElement("td");
    reactions.innerText = "reactions";

    row.appendChild(id);
    row.appendChild(title);
    row.appendChild(body);
    row.appendChild(userId);
    row.appendChild(reactions);
    table1.appendChild(tableTitle);
    tableBody.appendChild(row);
    container.appendChild(table1);

    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];
      //   console.log(posts[i].id, posts[i].title);

      let row = document.createElement("tr");

      let id = document.createElement("td");
      id.innerText = post.id;
      let title = document.createElement("td");
      title.innerText = post.title;
      let body = document.createElement("td");
      body.innerText = post.body;
      let userId = document.createElement("td");
      userId.innerText = post.userId;
      let reactions = document.createElement("td");
      reactions.innerText = post.reactions;

      row.appendChild(id);
      row.appendChild(title);
      row.appendChild(body);
      row.appendChild(userId);
      row.appendChild(reactions);
      //   table.appendChild(tableTitle);
      //   table.appendChild(row);
      tableBody.appendChild(row);
    }
    table1.appendChild(tableBody);
    ret1 = true;
  } catch (e) {
    return false;
  }
}

async function fetch2() {
  try {
    let res2 = await fetch(api2);
    let json = await res2.json();
    let products = json.products;

    let table2 = document.createElement("table");
    table2.id = "table2";

    let tableTitle = document.createElement("h3");
    tableTitle.innerText = "Products";

    let tableBody = document.createElement("tbody");

    let row = document.createElement("tr");
    let id = document.createElement("td");
    id.innerText = "id";
    let title = document.createElement("td");
    title.innerText = "title";
    let description = document.createElement("td");
    description.innerText = "description";
    let price = document.createElement("td");
    price.innerText = "price";
    let discountPercentage = document.createElement("td");
    discountPercentage.innerText = "discountPercentage";
    let rating = document.createElement("td");
    rating.innerText = "rating";
    let stock = document.createElement("td");
    stock.innerText = "stock";
    let brand = document.createElement("td");
    brand.innerText = "brand";
    let category = document.createElement("td");
    category.innerText = "category";
    let thumbnail = document.createElement("td");
    thumbnail.innerText = "thumbnail";
    let images = document.createElement("td");
    images.innerText = "images";

    row.appendChild(id);
    row.appendChild(title);
    row.appendChild(description);
    row.appendChild(price);
    row.appendChild(discountPercentage);
    row.appendChild(rating);
    row.appendChild(stock);
    row.appendChild(brand);
    row.appendChild(category);
    row.appendChild(thumbnail);
    row.appendChild(images);
    tableBody.appendChild(row);

    table2.appendChild(tableTitle);
    for (let i = 0; i < products.length; i++) {
      let product = products[i];

      let row = document.createElement("tr");
      let id = document.createElement("td");
      id.innerText = product.id;
      let title = document.createElement("td");
      title.innerText = product.title;
      let description = document.createElement("td");
      description.innerText = product.description;
      let price = document.createElement("td");
      price.innerText = product.price;
      let discountPercentage = document.createElement("td");
      discountPercentage.innerText = product.discountPercentage;
      let rating = document.createElement("td");
      rating.innerText = product.rating;
      let stock = document.createElement("td");
      stock.innerText = product.stock;
      let brand = document.createElement("td");
      brand.innerText = product.brand;
      let category = document.createElement("td");
      category.innerText = product.category;
      let thumbnail = document.createElement("td");
      let thumbImg = document.createElement("img");
      thumbImg.id = "thumbnail";
      thumbImg.src = await product.thumbnail;
      thumbnail.appendChild(thumbImg);
      // thumbnail.innerText=product.thumbnail
      let images = document.createElement("td");
      let imageContainer = document.createElement("div");
      imageContainer.id = "img-container";
      let imageList = product.images;
      for (let i = 0; i < imageList.length; i++) {
        let image = document.createElement("img");
        image.src = await imageList[i];
        imageContainer.appendChild(image);
      }
      images.appendChild(imageContainer);

      row.appendChild(id);
      row.appendChild(title);
      row.appendChild(description);
      row.appendChild(price);
      row.appendChild(discountPercentage);
      row.appendChild(rating);
      row.appendChild(stock);
      row.appendChild(brand);
      row.appendChild(category);
      row.appendChild(thumbnail);
      row.appendChild(images);
      tableBody.appendChild(row);

      //  console.log(product.id,product.title,product.description);
    }

    table2.appendChild(tableBody);
    container.appendChild(table2);

    ret2 = true;
  } catch (error) {
    return false;
  }
}
async function fetch3() {
  try {
    let res3 = await fetch(api3);
    let json = await res3.json();
    let todos = json.todos;
    // for(let i=0;i<todos.length;i++){
    //     console.log(todos[i]);

    // }

    //     <table id="table1">
    //     <thead id="head1">My Name is Minhaj
    //     </thead>
    //     <tbody id="body1">
    //          <tr><td>Sl no</td><td>name</td><td>age</td></tr>
    //         <tr><td>1</td><td>Minhaj</td><td>23</td></tr>
    //     </tbody>
    //     <tfoot></tfoot>
    // </table>

    let table3 = document.createElement("table");
    table3.id = "table3";

    let tableTitle = document.createElement("h3");
    tableTitle.innerText = "Todos";

    let tableBody = document.createElement("tbody");

    let row = document.createElement("tr");

    let id = document.createElement("td");
    id.innerText = "id";
    let todo = document.createElement("td");
    todo.innerText = "todo";
    let completed = document.createElement("td");
    completed.innerText = "completed";
    let userId = document.createElement("td");
    userId.innerText = "userId";

    row.appendChild(id);
    row.appendChild(todo);
    row.appendChild(completed);
    row.appendChild(userId);

    table3.appendChild(tableTitle);
    tableBody.appendChild(row);

    for (let i = 0; i < todos.length; i++) {
      let element = todos[i];

      let row = document.createElement("tr");

      let id = document.createElement("td");
      id.innerText = element.id;
      let todo = document.createElement("td");
      todo.innerText = element.todo;
      let completed = document.createElement("td");
      completed.innerText = element.completed == true ? "true" : "false";
      let userId = document.createElement("td");
      userId.innerText = element.userId;

      row.appendChild(id);
      row.appendChild(todo);
      row.appendChild(completed);
      row.appendChild(userId);
      tableBody.appendChild(row);
    }
    table3.appendChild(tableBody);
    container.appendChild(table3);
    ret3 = true;
  } catch (error) {
    return false;
  }
}

btn.addEventListener("click", fetchApi1);
function fetchApi1() {
  btn.style.display = "none";
  ret1 = setTimeout(fetch1, 1000);
  if (ret1) {
    ret3 = setTimeout(fetch3, 2000);
    if (ret3) {
      ret2 = setTimeout(fetch2, 3000);
    }
  }

}
