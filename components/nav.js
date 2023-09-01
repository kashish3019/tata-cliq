const nav = () =>{
    return`
    <header class="bg-neutral-900">
        <div class="container">
            <div class="justify-between flex items-center">
                <div class="logo">
                    <a href="/index.html" class="p-2">
                        <img src="/image/logo.png" alt="" class="w-[100px]">
                    </a>
                </div>
                <div class="navbar">
                    <nav class="bg-black justify-between flex items-center px-10 py-3 rounded-lg">
                        <a href="/index.html" class="text-white text-lg font-semibold px-4">Home</a>
                        <div class="relative group">
                            <a href="/pages/categories.html"
                                class="text-white relative text-lg font-semibold z-10 px-4">Categories <i
                                    class="fa-solid fa-angle-down"></i>
                                <ul
                                    class="text-left text-black bg-white absolute top-[30px] invisible group-hover:visible z-10 p-5 rounded shadow-2xl">
                                    <li class="px-4 py-2 w-[200px] border-b-2 relative">
                                        <a href="#" class="text-lg group">Man's Fashion <i
                                                class="fa-solid fa-angle-right"></i>
                                            <ol
                                                class="absolute right-[-165px] top-0 bg-white p-3 invisible group-hover:visible rounded shadow-2xl">
                                                <li class="px-4 py-2">
                                                    <a href="#">T-shirts</a>
                                                </li>
                                                <li class="px-4 py-2">
                                                    <a href="#">Formal Shirts</a>
                                                </li>
                                                <li class="px-4 py-2">
                                                    <a href="#">Jackets</a>
                                                </li>
                                                <li class="px-4 py-2">
                                                    <a href="#">Blazers</a>
                                                </li>
                                                <li class="px-4 py-2">
                                                    <a href="#">Jeans</a>
                                                </li>
                                            </ol>
                                        </a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Women's Fashion <i
                                                class="fa-solid fa-angle-right"></i></a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Kids's Fashion <i
                                                class="fa-solid fa-angle-right"></i></a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Beauty <i class="fa-solid fa-angle-right"></i></a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Jewellery <i class="fa-solid fa-angle-right"></i></a>
                                    </li>
                                </ul>
                            </a>
                        </div>
                        <div class="relative group">
                            <a href="/pages/brands.html" class="text-white text-lg font-semibold px-4">Brands <i
                                    class="fa-solid fa-angle-down"></i>
                                <ul
                                    class="text-left text-black bg-white absolute top-[30px] invisible group-hover:visible z-10 p-5">
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Man's Wear</a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Women's Wear</a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Kids's Wear</a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Beauty</a>
                                    </li>
                                    <li class="px-4 py-2 w-[200px] border-b-2">
                                        <a href="#" class="text-lg">Jewellery</a>
                                    </li>
                                </ul>
                            </a>
                        </div>
                        <input type="search" name="" id="" class="py-2 px-4 text-current rounded-sm w-[500px] bg-zinc-700"
                            placeholder="Search for Products">
                        <i class="fa-regular fa-heart px-5 text-white text-2xl"></i>
                        <i class="fa-solid fa-bag-shopping px-4 text-white text-2xl"></i>
                        <a href="/pages/signup.html" class="text-white text-lg font-semibold px-6 py-1">Login/Signup</a>
                    </nav>
                </div>
                <div class="toggle text-white text-3xl ">
                    <i class="fa-solid fa-bars active"></i>
                </div>
            </div>
        </div>
        </div>
    </header>`
}

export default nav