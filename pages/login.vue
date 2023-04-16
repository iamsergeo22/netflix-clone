<template>
    <div class="bg-hero">
        <nuxt-link to="/">
            <img class="w-48 h-15 p-4" src="../assets/img/Logonetflix.png" alt="">
        </nuxt-link>
        <div class="px-8 mt-4 shadow-lg flex justify-evenly w-full h-screen opacity-60">

            <div class=" lg:p-12 p-8 rounded-lg shadow-lg bg-color lg:w-1/3">
                <h1 class="text-white text-4xl font-bold mb-4">Sign in</h1>
                <input type="email" name="email" id="email" placeholder="Email Address or Phone Number"
                    class="block w-full bg-background-form shadow rounded outline-none mb-4 p-4" required>
                <input type="password" name="password" id="password" placeholder="Password"
                    class="block w-full bg-background-form shadow rounded outline-none mb-8 p-4" required>

                <button
                    class="bg-color-red text-left w-full text-center mb-2 p-4 rounded text-white text-md font-bold block lg:text-md">
                    Sign in
                </button>

                <div class="flex flex-row justify-between gap-4">
                    <p class="text-gray-500 text-xs flex"><svg viewBox="0 0 24 24" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff" stroke="#000" />
                            <path d="M7 12l3 3 7-7" fill="none" stroke="#000" stroke-width="2" />
                        </svg>
                        <span class="text-gray-600  text-xs hover:text-gray-600 ">Remenber me</span></p>
                    <p class="text-gray-500 text-xs"><a href="#" class="text-gray-600 hover:text-gray-600 text-xs">Need
                            a Help?</a></p>


                </div>

                <p class="text-gray-500 pt-4 text-sm mb-4">New to Netflix? <a href="#"
                        class="text-white font-bold hover:text-white">Sign up now</a>.</p>
                <p class="text-gray-500 text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <a href="#" class="text-blue-600 font-bold hover:text-blue-500"> Learn more.</a></p>

            </div>
        </div>


        <div class="bg-color mt-12 w-full flex flex-col px-24 py-12">

            <div class="mb-8">
                <a href="#" class="text-gray-600 hover:text-gray-500">Questions? Contact us.</a>

            </div>

            <div class="flex flex-row justify-between">

                <ul>
                    <li><a href="#" class="text-xs text-gray-600 hover:text-gray-500">FAQ</a></li>
                    <li><a href="#" class="text-xs text-gray-600 hover:text-gray-500">Cookie Preferences</a></li>
                </ul>

                <ul>
                    <li><a href="#" class="text-xs text-gray-600 hover:text-gray-500">Help Center</a></li>
                    <li><a href="#" class="text-xs text-gray-600 hover:text-gray-500">Corporate Information</a></li>
                </ul>


                <ul>
                    <li><a href="#" class="text-xs text-gray-600 hover:text-gray-500">Terms of Use </a></li>
                </ul>

                <ul>
                    <li><a href="#" class="text-xs text-gray-600 hover:text-gray-500">Privacy</a></li>
                </ul>
            </div>

        </div>



    </div>
</template>

<script>
    export default {}
</script>


<style scoped>
    .bg-hero {
        background-image: linear-gradient(to right, #000000b4,
                #0000005d), url(../assets/img/back.jpg);
        background-size: cover;

    }

    .bg-color {
        background-color: #000000cc;
    }

    .bg-color-red {
        background-color: red;
    }

    i {
        font-size: 1.5rem;
    }

    .bg-background-form {
    background-color: #0000005d;
    border: 0.25px solid gray;
  }

</style>