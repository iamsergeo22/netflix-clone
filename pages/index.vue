<template>
  <div class="bg-hero">
    <div class="bg-image  h-screen lg-py-56">
      <div class="flex flex-row justify-between p-8 gap-8">
        <div class="">
          <img class="w-48 h-15" src="../assets/img/Logonetflix.png" alt="">
        </div>

        <div>
          <button class="bg-color px-4 py-2 rounded text-white text-sm font-bold">
            Sign in
          </button>
        </div>

      </div>


      <div class="items-center container lg:pt-8 px-8 lg:px-32 lg:mx-12">
        <h2 class="lg:text-6xl text-3xl text-white font-bold lg:w-3/4">Unlimited movies, TV shows, and more.</h2>
        <p class="text-white  lg:text-xl text-md font-bold lg:w-1/2 lg:mb-6 mb-4">
          Plans now start at US$2.99/month. </p>
        <p class="text-white  lg:text-xl text-md font-bold mb-4">
          Ready to watch? Enter your email to create or restart your membership.</p>

        <div class="flex lg:w-1/2 gap-2 mb-8">
          <input type="email" name="email" id="email" placeholder="Email Address"
            class="block w-full bg-background-form shadow rounded outline-none focus:border-green-700 mb-2 p-4"
            required>
          <button class="bg-color flex mb-2 p-4 rounded text-white text-sm font-bold block w-1/2 lg:text-xl">
            <span>Get Started
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>


          </button>
        </div>

      </div>

    </div>
    <div class="shadow-2xl rounded-lg lg:mx-12 transform -translate-y-10 left-0 ">
      <div
        class="lg:flex bg-card shadow-2xl rounded-lg lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 lg:py-24 p-8 sm:items-center">

        <div class="">
          <h2 class="lg:text-5xl text-4xl text-white font-bold">Enjoy on your TV.</h2>
          <p class="text-white  lg:text-xl text-md font-bold">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>

        <div class="">
          <img src="../assets/img/en.png" alt="Image" class="">
        </div>


      </div> <!-- end hero -->

      <div class="lg:px-24  bg-hero-card">
        <hr class="">
      </div>


      <div
        class="lg:flex bg-hero-card lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 p-8 sm:items-center">


        <div class="">
          <img src="../assets/img/en1.png" alt="Image" class="">
        </div>

        <div class="">
          <h2 class="lg:text-5xl text-4xl text-white font-bold">Watch everywhere.</h2>
          <p class="text-white  lg:text-xl text-md font-bold">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>



      </div> <!-- end hero -->

      <div class="lg:px-24 pb-4 bg-hero-card">
        <hr class="">
      </div>

      <div
        class="lg:flex bg-hero-card lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 p-8 sm:items-center">


        <div class="">
          <h2 class="lg:text-5xl text-4xl text-white font-bold">Create profiles for kids.</h2>
          <p class="text-white  lg:text-xl text-md font-bold">
            Send kids on adventures with their favorite characters in a space made just for them—free with your
            membership. </p>
        </div>


        <div class="">
          <img src="../assets/img/en2.png" alt="Image" class="">
        </div>



      </div> <!-- end hero -->
      <div class="lg:px-24 pb-4 bg-hero-card">
        <hr class="">
      </div>

      <div
        class="lg:flex bg-hero-card shadow-2xl rounded-lg lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 p-8 sm:items-center">


        <div class="">
          <img src="../assets/img/en3.png" alt="Image" class="">
        </div>

        <div class="">
          <h2 class="lg:text-5xl text-4xl text-white font-bold">Download your shows to watch offline.</h2>
          <p class="text-white  lg:text-xl text-md font-bold">
            Save your favorites easily and always have something to watch.
          </p>
        </div>



      </div> <!-- end hero -->









    </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
      }
    }
  }
</script>

<style scoped>
  .bg-image {
    background-image: linear-gradient(to right, rgba(24, 14, 59, 0.966),
        #0000005d), url(../assets/img/back.jpg);
    background-size: cover;

  }

  .bg-background-form {
    background-color: #0000005d;
    border: 0.5px solid white;
  }

  hr {
    border: 4px solid rgb(18, 4, 70);
  }

  .bg-card {
    background: linear-gradient(to right bottom, rgba(255, 0, 0, 0.678) 2%, rgb(14, 4, 51) 50%);
  }

  .bg-hero {
    background-color: rgb(10, 2, 39);
  }

  .bg-hero-card {
    background-color: rgb(14, 4, 51);
  }

  .bg-color {
    background-color: red;
  }
</style>