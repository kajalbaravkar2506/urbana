function loadLayout() {
    fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
        initMarquee();
        if (window.lucide) lucide.createIcons();
        updateBadges();
        updateAccountIcon();
    });

    fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
}

function initMarquee() {
    const items = [
        { icon: "shirt",      text: "Fresh Fashion" },
        { icon: "tag",        text: "All Under ₹999" },
        { icon: "shirt",      text: "1000+ Styles" },
        { icon: "rotate-ccw", text: "Easy Returns & Exchange" }
    ];
    const track = document.getElementById("marqueeTrack");
    if (!track) return;
    track.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        items.forEach(item => {
            track.innerHTML += `<span><i data-lucide="${item.icon}"></i> ${item.text}</span>`;
        });
    }
    if (window.lucide) lucide.createIcons();
}

function updateBadges() {
    const cart = JSON.parse(localStorage.getItem("urbana-cart")) || [];
    const cartTotal = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    setBadge("cart-count", cartTotal);
    const wishlist = JSON.parse(localStorage.getItem("urbana-wishlist")) || [];
    setBadge("wishlist-count", wishlist.length);
}

function setBadge(id, count) {
    const el = document.getElementById(id);
    if (!el) return;
    if (count > 0) { el.textContent = count > 99 ? "99+" : count; el.style.display = "flex"; }
    else { el.style.display = "none"; }
}

function updateAccountIcon() {
    const wrap = document.getElementById("accountWrap");
    if (!wrap) return;
    const userRaw = localStorage.getItem("urbana-user");
    const user = userRaw ? JSON.parse(userRaw) : null;
    const wishlistIcon = document.getElementById("headerWishlistIcon");
    const cartIcon     = document.getElementById("headerCartIcon");

    if (user) {
        const firstName = (user.name || "Account").split(" ")[0];

        // Hide standalone cart & wishlist icons — now accessible via dropdown
        if (wishlistIcon) wishlistIcon.style.display = "none";
        if (cartIcon)     cartIcon.style.display     = "none";

        wrap.innerHTML = `
            <a href="dashboard.html" aria-label="My Account">
                <i data-lucide="user-check" aria-hidden="true"></i>
                <span class="account-name">${firstName}</span>
            </a>
            <div class="account-dropdown" role="menu">
                <div class="account-dropdown-header">
                    <div class="greet">HELLO,</div>
                    <div class="greet-name">${user.name || firstName}</div>
                </div>
                <a href="dashboard.html">
                    <i data-lucide="layout-dashboard"></i> My Account
                </a>
                <a href="wishlist.html">
                    <i data-lucide="heart"></i> Wishlist
                </a>
                <a href="cart.html">
                    <i data-lucide="shopping-bag"></i> My Cart
                </a>
                <button class="dd-logout" onclick="logoutUser()">
                    <i data-lucide="log-out"></i> Sign Out
                </button>
            </div>`;
    } else {
        if (wishlistIcon) wishlistIcon.style.display = "";
        if (cartIcon)     cartIcon.style.display     = "";
        wrap.innerHTML = `<a href="login.html" aria-label="Login or My Account"><i data-lucide="user" aria-hidden="true"></i></a>`;
    }
    if (window.lucide) lucide.createIcons();
}

function logoutUser() {
    localStorage.removeItem("urbana-user");
    window.location.href = "login.html";
}