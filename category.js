let allProducts = [
    // ================= MEN =================
    {section:"men", category:"topwear",    type:"tshirts",      name:"Men T-Shirt",        image:"images/mentshirts.png",            price:899,  discount:20, colour:"black",  rating:4.2},
    {section:"men", category:"topwear",    type:"casualshirts",  name:"Men Casual Shirt",   image:"images/mencasualshirts.png",            price:1199, discount:15, colour:"blue",   rating:4.4},
    {section:"men", category:"topwear",    type:"formalshirts",  name:"Men Formal Shirt",   image:"images/menformalshirts.png",            price:1299, discount:10, colour:"white",  rating:4.3},
    {section:"men", category:"bottomwear", type:"jeans",         name:"Men Jeans",          image:"images/menjeans.png",            price:1499, discount:30, colour:"blue",   rating:4.6},
    {section:"men", category:"bottomwear", type:"chinos",        name:"Men Chinos",         image:"images/menchinos.png",            price:1199, discount:20, colour:"grey",   rating:4.1},
    {section:"men", category:"bottomwear", type:"shorts",        name:"Men Shorts",         image:"images/menshorts.png",            price:699,  discount:10, colour:"black",  rating:3.9},
    {section:"men", category:"bottomwear", type:"trousers",      name:"Men Trousers",         image:"images/mentrousers.png",            price:899,  discount:10, colour:"black",  rating:3.9},
    {section:"men", category:"indianwear", type:"kurtas",        name:"Men Kurta",          image:"images/menkurtas.png",            price:999,  discount:25, colour:"white",  rating:4.5},
    {section:"men", category:"indianwear", type:"payjamas",      name:"Men Payjama",        image:"images/menpayjamas.png",            price:999,  discount:25, colour:"white",  rating:4.5},
    {section:"men", category:"athleisure", type:"sweatshirts",   name:"Men Sweatshirt", image:"images/menathleisuresweatshirt.png",            price:799,  discount:20, colour:"green",  rating:4.0},
    {section:"men", category:"athleisure", type:"jackets",       name:"Men Jackets", image:"images/menathleisurejackets.png",            price:799,  discount:20, colour:"green",  rating:4.0},
    {section:"men", category:"athleisure", type:"shorts",       name:"Men Sports Shorts", image:"images/menathleisure shorts.png",            price:799,  discount:20, colour:"green",  rating:4.0},
    {section:"men", category:"athleisure", type:"tshirts",       name:"Men Sports T-Shirt", image:"images/menathleisuretshirt.png",            price:799,  discount:20, colour:"green",  rating:4.0},
    {section:"men", category:"athleisure", type:"joggers",       name:"Men Joggers",        image:"images/menjoggers.png",            price:999,  discount:15, colour:"grey",   rating:4.2},

    // ================= WOMEN =================
    {section:"women", category:"topwear",    type:"tshirts",    name:"Women T-Shirt",      image:"images/womentshirts.png",            price:699,  discount:20, colour:"pink",   rating:4.0},
    {section:"women", category:"topwear",    type:"tops",       name:"Women Top",          image:"images/womentops.png",            price:799,  discount:15, colour:"white",  rating:3.9},
    {section:"women", category:"dresses",    type:"dresses",    name:"Women Dress",        image:"images/womendresses.png",            price:999,  discount:25, colour:"pink",   rating:4.3},
    {section:"women", category:"dresses",    type:"coordsets",  name:"Women Co-Ord Set",   image:"images/womencoordsets.png",            price:1299, discount:50, colour:"blue",   rating:4.5},
    {section:"women", category:"bottomwear", type:"denim",      name:"Women Denim",        image:"images/womendenim.png",            price:1199, discount:20, colour:"blue",   rating:4.2},
    {section:"women", category:"bottomwear", type:"pants",      name:"Women Pants",        image:"images/womenpants.png",            price:899,  discount:10, colour:"black",  rating:4.0},
    {section:"women", category:"indianwear", type:"kurtas",     name:"Women Kurta",        image:"images/womenkurtas.png",            price:899,  discount:40, colour:"pink",   rating:4.6},
    {section:"women", category:"indianwear", type:"leggings",   name:"Women Leggings",     image:"images/womenleggings.png",            price:499,  discount:15, colour:"black",  rating:4.1},
    {section:"women", category:"fusion",     type:"kurtis",     name:"Women Kurti",        image:"images/womenkurtis.png",            price:799,  discount:30, colour:"white",  rating:4.4},

    // ================= BOYS =================
    {section:"boys", category:"topwear",    type:"tshirts",     name:"Boys T-Shirt",       image:"images/teesforboys.png",     price:499,  discount:10, colour:"green",  rating:4.1},
    {section:"boys", category:"topwear",    type:"shirts",      name:"Boys Shirt",         image:"images/boysshirts.png",            price:599,  discount:15, colour:"blue",   rating:4.0},
    {section:"boys", category:"bottomwear", type:"cargoshorts", name:"Boys Cargo Shorts",  image:"images/boyscargoshorts.png",            price:699,  discount:20, colour:"grey",   rating:3.9},
    {section:"boys", category:"bottomwear", type:"joggers",     name:"Boys Joggers",       image:"images/boysjoggers.png",            price:599,  discount:10, colour:"black",  rating:4.2},
    {section:"boys", category:"bottomwear", type:"denimpants",  name:"Boys Denim Pants",   image:"images/boysdenimpants.png",            price:899,  discount:25, colour:"blue",   rating:4.3},
    {section:"boys", category:"indianwear", type:"ethnicsets",  name:"Boys Ethnic Set",    image:"images/boysethnicsets.png",            price:899,  discount:30, colour:"white",  rating:4.5},
    {section:"boys", category:"innerwear",  type:"vests",       name:"Boys Vests (Pack 3)",image:"images/boysvests.png",            price:349,  discount:10, colour:"white",  rating:4.0},

    // ================= GIRLS =================
    {section:"girls", category:"topwear",   type:"tshirt",   name:"Girls T-Shirt",   image:"girlsclothes/girltshirts.png",  price:899,  discount:20, colour:"yellow", rating:4.4},
    {section:"girls", category:"topwear",   type:"tops",     name:"Girls Top",       image:"girlsclothes/girltops.png",     price:599,  discount:40, colour:"black",  rating:4.1},
    {section:"girls", category:"bottomwear",type:"shorts",   name:"Girls Shorts",    image:"girlsclothes/girlshorts.png",   price:899,  discount:15, colour:"blue",   rating:3.8},
    {section:"girls", category:"bottomwear",type:"skirts",   name:"Girls Skirt",     image:"girlsclothes/girlskirts.png",   price:499,  discount:10, colour:"pink",   rating:4.2},
    {section:"girls", category:"bottomwear",type:"leggings", name:"Girls Leggings",  image:"girlsclothes/girlleggings.png", price:849,  discount:50, colour:"purple", rating:4.7},
    {section:"girls", category:"dresses",   type:"frocks",   name:"Girls Frock",     image:"girlsclothes/girlfrocks.png",   price:999,  discount:20, colour:"red",    rating:4.5},
    {section:"girls", category:"dresses",   type:"dresses",  name:"Girls Dress",     image:"girlsclothes/girldresses.png",  price:999,  discount:5,  colour:"green",  rating:3.7},
    {section:"girls", category:"dresses",   type:"jumpsuits",name:"Girls Jumpsuit",  image:"girlsclothes/girljumpsuits.png",price:999,  discount:15, colour:"orange", rating:4.0},
    {section:"girls", category:"bottomwear",type:"jeans",    name:"Girls Jeans",     image:"girlsclothes/girljeans.png",    price:1499, discount:10, colour:"blue",   rating:4.3},
    {section:"girls", category:"indianwear",type:"kurtas",   name:"Girls Kurta",     image:"girlsclothes/girlkurtas.png",   price:999,  discount:50, colour:"pink",   rating:4.6},
    {section:"girls", category:"indianwear",type:"ethnic",   name:"Girls Ethnic Set",image:"girlsclothes/girlethnic.png",   price:999,  discount:40, colour:"grey",   rating:4.8},
];

// ── Build product URL from product object ──
function buildProductURL(p, idx){
    const params = new URLSearchParams({
        id:       idx,
        name:     p.name,
        image:    p.image,
        price:    p.price,
        discount: p.discount || 0,
        rating:   p.rating  || 4.5,
        section:  p.section || "",
        category: p.category || "",
        type:     p.type    || "",
        colour:   p.colour  || "",
    });
    return `product.html?${params.toString()}`;
}

// ================= LOAD PRODUCTS =================
function loadProducts(section){
    renderProducts(section);

    document.querySelectorAll(".filters-sidebar input").forEach(input => {
        input.addEventListener("change", () => renderProducts(section));
    });
}

// ================= MAIN RENDER FUNCTION =================
function renderProducts(section){

    const container = document.getElementById("product-container");

    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category");
    const selectedType     = params.get("type");
    const maxPrice         = params.get("maxprice") ? parseInt(params.get("maxprice")) : null;
    const minDiscount      = params.get("mindiscount") ? parseInt(params.get("mindiscount")) : null;
    // Read sections fresh from URL — supports "sections=boys,girls" for multi-section offers
    const urlSection       = params.get("section");
    const urlSections      = params.get("sections") ? params.get("sections").split(",") : null;

    const selectedColours   = [...document.querySelectorAll(".colour:checked")].map(c => c.value);
    const selectedPrices    = [...document.querySelectorAll(".price:checked")].map(p => p.value);
    const selectedDiscounts = [...document.querySelectorAll(".discount:checked")].map(d => parseInt(d.value));

    let filtered = allProducts.map((p,i) => ({...p, _idx:i}));

    // Apply section filter — multi-section (boys,girls) takes priority over single
    if(urlSections){
        filtered = filtered.filter(p => urlSections.includes(p.section));
    } else if(urlSection){
        filtered = filtered.filter(p => p.section === urlSection);
    } else if(section){
        filtered = filtered.filter(p => p.section === section);
    }

    if(selectedCategory) filtered = filtered.filter(p => p.category === selectedCategory);
    if(selectedType)     filtered = filtered.filter(p => p.type === selectedType);
    if(maxPrice)         filtered = filtered.filter(p => {
        const finalPrice = Math.round(p.price - (p.price * (p.discount || 0) / 100));
        return finalPrice <= maxPrice;
    });

    // Minimum discount filter — used by Special Offers on homepage
    if(minDiscount !== null){
        filtered = filtered.filter(p => (p.discount || 0) >= minDiscount);
    }

    if(selectedColours.length)   filtered = filtered.filter(p => selectedColours.includes(p.colour));

    if(selectedPrices.length){
        filtered = filtered.filter(p => {
            if(selectedPrices.includes("low")  && p.price < 500)               return true;
            if(selectedPrices.includes("mid")  && p.price >= 500 && p.price <= 1000) return true;
            if(selectedPrices.includes("high") && p.price > 1000)              return true;
            return false;
        });
    }

    if(selectedDiscounts.length){
        filtered = filtered.filter(p => selectedDiscounts.some(d => p.discount >= d));
    }

    if(filtered.length === 0){
        container.innerHTML = `<p style="padding:40px;color:#888;">No products found for this filter.</p>`;
        return;
    }

    container.innerHTML = filtered.map(p => {

        const newPrice    = Math.round(p.price - (p.price * p.discount / 100));
        const ratingValue = p.rating || 4;
        const fullStars   = Math.floor(ratingValue);
        const halfStar    = ratingValue % 1 >= 0.5 ? 1 : 0;
        const emptyStars  = 5 - fullStars - halfStar;
        const starsHTML   = "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars);
        const url         = buildProductURL(p, p._idx);

        return `
        <a href="${url}" class="product-card" style="text-decoration:none;color:inherit;">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}">
                <span class="discount-badge">-${p.discount}%</span>
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="price-row">
                    <span class="price">₹${newPrice}</span>
                    <span class="original-price">₹${p.price}</span>
                </div>
                <div class="rating">
                    ${starsHTML}
                    <span style="font-size:12px;color:#888;margin-left:6px;letter-spacing:0;font-family:'Montserrat',sans-serif;">${ratingValue}</span>
                </div>
            </div>
        </a>
        `;
    }).join("");
}