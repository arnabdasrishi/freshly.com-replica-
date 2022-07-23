let itemData = [
    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",itemName: "Steak Peppercorn", cal: "500 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",itemName: "Homestyle Chicken", cal: "560 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",itemName: "Cauliflower Shell Beef Bolognese", cal: "490 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg",itemName: "Sausage Baked Penne", cal: "470 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",itemName: "Savory-Sweet Chicken", cal: "480 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",itemName: "Protein-Packed Chicken Parm", cal: "410 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",itemName: "Golden Oven-Fried Chicken & Mash", cal: "510 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",itemName: "Zingy Buffalo Chicken", cal: "470 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",itemName: "White Bean Turkey Chili Bowl", cal: "540 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg",itemName: "Pork Carnitas", cal: "480 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",itemName: "Chicken Tikka Masala", cal: "570 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg",itemName: "Masterful Mash (16 oz)", cal: "160 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640534648a3861409719e_production-meal-image-a06ce51f-74b3-429e-8ff1-ada01979e783.jpeg",itemName: "Masterful Mac & Cheese (15 oz)", cal: "470 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg",itemName: "3 Grilled Chicken Breasts (9.75 oz)", cal: "160 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg",itemName: "8 Baked Turkey Meatballs (9.98 oz)", cal: "160 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad0d78502030a9da911c_production-meal-image-b70b17ff-88b4-453d-b192-2be3cc18e849.jpeg",itemName: "Dijon Pork Chop", cal: "630 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",itemName: "Steak Peppercorn", cal: "500 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",itemName: "Homestyle Chicken", cal: "560 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",itemName: "Cauliflower Shell Beef Bolognese", cal: "490 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg",itemName: "Sausage Baked Penne", cal: "470 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",itemName: "Savory-Sweet Chicken", cal: "480 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",itemName: "Protein-Packed Chicken Parm", cal: "410 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",itemName: "Golden Oven-Fried Chicken & Mash", cal: "510 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",itemName: "Zingy Buffalo Chicken", cal: "470 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",itemName: "White Bean Turkey Chili Bowl", cal: "540 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg",itemName: "Pork Carnitas", cal: "480 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",itemName: "Chicken Tikka Masala", cal: "570 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg",itemName: "Masterful Mash (16 oz)", cal: "160 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640534648a3861409719e_production-meal-image-a06ce51f-74b3-429e-8ff1-ada01979e783.jpeg",itemName: "Masterful Mac & Cheese (15 oz)", cal: "470 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg",itemName: "3 Grilled Chicken Breasts (9.75 oz)", cal: "160 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg",itemName: "8 Baked Turkey Meatballs (9.98 oz)", cal: "160 Cal", status: "Gluten Free", serve: "Multi-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad0d78502030a9da911c_production-meal-image-b70b17ff-88b4-453d-b192-2be3cc18e849.jpeg",itemName: "Dijon Pork Chop", cal: "630 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",itemName: "Cauliflower Shell Beef Bolognese", cal: "490 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg",itemName: "Sausage Baked Penne", cal: "470 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",itemName: "Savory-Sweet Chicken", cal: "480 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",itemName: "Protein-Packed Chicken Parm", cal: "410 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",itemName: "Golden Oven-Fried Chicken & Mash", cal: "510 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",itemName: "Zingy Buffalo Chicken", cal: "470 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",itemName: "White Bean Turkey Chili Bowl", cal: "540 Cal", status: "Gluten Free", serve: "Single-Serve"},

    {image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg",itemName: "Pork Carnitas", cal: "480 Cal", status: "Gluten Free", serve: "Single-Serve"}

]
displayTable (itemData)

function displayTable (itemData) {
    document.querySelector("#items").innerHTML = "";
    itemData.forEach(function(elem,index){
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src",itemData[index].image)
        let name = document.createElement("h3")
        name.innerText = elem.itemName;
        let calorie = document.createElement("p")
        calorie.innerText = elem.cal+" | "+elem.status+" | "+elem.serve

        div.append(image,name,calorie);
        document.querySelector("#items").append(div)
    })
}

document.querySelector("#sorting").addEventListener("change",sortingA)

function sortingA(){
    let selected = document.querySelector("#sorting").value;

    if (selected=="Sort A ~ Z"){
        itemData.sort(function(a,b){
            let x = a.itemName.toUpperCase();
            let y = b.itemName.toUpperCase();
            if (x > y) return 1;
            if (x < y) return -1;
            return 0;
        });
        displayTable (itemData)
    }
    if (selected=="Sort Z ~ A"){
        itemData.sort(function(a,b){
            let x = a.itemName.toUpperCase();
            let y = b.itemName.toUpperCase();
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
        });
        displayTable (itemData)
    }
    if (selected=="Cal (Low - High)"){
        itemData.sort(function(a,b){
            let x = a.cal;
            let y = b.cal;
            if (x > y) return 1;
            if (x < y) return -1;
            return 0;
        })
        displayTable (itemData)
    }
    if (selected=="Cal (High - Low)"){
        itemData.sort(function(a,b){
            let x = a.cal;
            let y = b.cal;
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
        })
        displayTable (itemData)
    }
    if (selected=="All Meals"){
        window.location.reload();
    }
}

// navbar herfs 
document.querySelector("#logo").addEventListener("click", toHomePage)
document.querySelector("#lgin").addEventListener("click", toLogIn)
document.querySelector("#sgnup").addEventListener("click", sgnup)
document.querySelector("#plan").addEventListener("click", gotoPlans)


function toHomePage() {
    window.location.href = "index.html";
}
function toLogIn() {
    window.location.href = "login-page.html"
}
function sgnup() {
    window.location.href = "signup-page.html"
}
function gotoPlans() {
    window.location.href = "plans-menus.html"
}
