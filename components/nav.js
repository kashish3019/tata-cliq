const nav = () => {
    return `
    <header class="bg-neutral-900">
        <div class="container">
            <div class="justify-between flex items-center">
                <div class="logo">
                    <a href="/index.html" class="p-2">
                    <img src="/image/logo.png" alt="" class="w-[100px]">
                    </a>
                </div>
                <nav class="bg-black justify-between flex items-center px-10 py-3 rounded-lg">
                <a href="/index.html" class="text-white text-lg font-semibold px-4">Home</a>

                    <div class="relative group">
                    <a href="/pages/categories.html" class="text-white relative text-lg font-semibold z-10 px-4">Categories <i
                    class="fa-solid fa-angle-down"></i></a>
                <ul class="text-left text-black bg-white absolute top-[30px] invisible group-hover:visible group-hover:opacity-100 z-10 p-5 rounded shadow-2xl">
                    <li class="px-4 py-2 w-[200px] border-b-2 relative">
                        <button id="man">Man's Fashion</button>
                    </li>
                    <li class="px-4 py-2 w-[200px] border-b-2">
                    <button id="woman">Woman's Fashion</button>
                        
                    </li>
                    <li class="px-4 py-2 w-[200px] border-b-2">
                    <button id="kids">Kid's Fashion</button>
                    </li>
                    <li class="px-4 py-2 w-[200px] border-b-2">
                    <button id="beauty">Beauty</button>
                    </li>
                    <li class="px-4 py-2 w-[200px] border-b-2">
                    <button id="jewellery">Jewellery</button>
                    </li>
                </ul>
            </div>
            <!-- Inside your header -->
           <input type="search" id="searchInput" class="py-2 px-4 text-current rounded-sm w-[500px] bg-zinc-700" placeholder="Search for Products">
            <button id="searchButton" class="px-4 py-2 text-white bg-blue-500 rounded-md ml-4">Search</button>

                <a href="#"><i class="fa-regular fa-heart px-4 text-white text-2xl"></i></a>
                <a href="/pages/cart.html"><i class="fa-solid fa-bag-shopping px-4 text-white text-2xl"></i></a>
                </nav>
            </div>
        </div>
    </header>`
}

export default nav


const foot = () => {
    return `<footer class="bg-white">
    <div class="container">
        <div class="relative">
            <img src="/image/trustFrame.png" class="absolute left-[41%] bottom-[-15px]">
        </div>
        <div class="flex justify-center">
            <img src="/image/Frame22222.svg" alt="">
        </div>
        <div class="flex p-10">
            <div class="w-1/5 p-5">
                <ul>
                    <li class="font-bold py-5">Tata MarketPlace</li>
                    <li class="py-1">About us</li>
                    <li class="py-1">Careers</li>
                    <li class="py-1">Sell With us</li>
                    <li class="py-1">Terms of Use</li>
                    <li class="py-1">Privacy Policy</li>
                </ul>
            </div>
            <div class="w-1/5 p-5">
                <ul>
                    <li class="font-bold py-5">Customer Service</li>
                    <li class="py-1">Shopping</li>
                    <li class="py-1">Offers & Promotions</li>
                    <li class="py-1">Payments</li>
                    <li class="py-1">Cancellation</li>
                    <li class="py-1">Returns & Refunds</li>
                    <li class="py-1">Return To Store</li>
                    <li class="py-1">Contact Us</li>
                    <li class="py-1">Replacement Policy</li>
                </ul>
            </div>
            <div class="w-1/5 p-5">
                <ul>
                    <li class="font-bold py-5">My Tata CLiQ</li>
                    <li class="py-1">My Account</li>
                    <li class="py-1">My Orders</li>
                    <li class="py-1">My Shopping Bag</li>
                    <li class="py-1">My Wishlist</li>
                </ul>
            </div>
            <div class="w-2/5 p-5">
                <ul>
                    <li class="font-bold py-5">Tata CLiQ Offerings</li>
                    <li class="py-1">Watches for Men | Campus Shoes | Sandals for Men | Sneakers for Men | Reebok
                        Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits | Allen Solly | Sparx Shoes | Gold Rings
                        | Formal Shoes for Men | Sports Shoes for Men | Wallets for Men | Ladies Watches | Trolley
                        Bags | Handbags for Women | Sling Bags for Women | Casual Shoes for Men | Boots for Men |
                        Digital Watches | Sonata Watches | Sneakers for Women | Running Shoes | Puma Shoes | Boots
                        for Women | Skechers | Malabargold | Fabindia | Utsa | Vark | Gia | LOV | Sitemap</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg">
        <div class="container">
            <div class="flex py-10">
                <div class="w-4/12 flex">
                    <h2 class="p-2">Download App</h2>
                    <img src="/image/13994142335006.png" alt="" class="p-2">
                    <img src="/image/13994142892062.png" alt="" class="p-2">
                </div>
                <div class="w-4/12 flex justify-center">
                    <img src="/image/facebook.png" alt="" class="p-2">
                    <img src="/image/twitter.png" alt="" class="p-2">
                    <img src="/image/instagram.png" alt="" class="p-2">
                    <img src="/image/youtube.png" alt="" class="p-2">
                    <img src="/image/linkedin.png" alt="" class="p-2">
                </div>
                <div class="w-4/12">
                    <h3 class="p-2 text-end">© 2023 Tata CLiQ | All rights reserved</h3>
                </div>
            </div>
        </div>
    </div>
</footer>`
}
export { foot }