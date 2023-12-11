<template>
  <div>
    <!-- Modal -->
    <div id="myModal" class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70" v-show="modalDisplay">
      <div class="modal-content bg-white sm:p-6 rounded-lg w-64 sm:w-96 h-auto shadow-lg text-center">
        <!-- Title -->
        <h2 class="text-lg sm:text-xl text-red-500 font-semibold mt-2 mb-2 sm:mb-4">{{ $t('Components.Title') }}</h2>
        <!-- Modal content goes here -->
        <p class="text-sm sm:text-lg text-gray-800 text-xs font-semibold mx-2 mb-4 sm:mb-4">{{ $t('Components.anotherModalPara') }}</p>
        <!-- Close button -->
        <hr class="h-px w-full bg-gray-200 border-0 dark:bg-gray-700">
        <button @click="closeModal" class="my-2 text-blue-500 font-bold font-extrabold rounded-full">
          <i class="fab fa-instagram"></i> OK
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {

  data() {
    return {
      modalDisplay: true, // Set the initial display property
    };
  },
  mounted() {
    // Display the modal when the component is mounted
    this.openModal();
  },
  methods: {
    openModal() {
      // Display the modal by setting modalDisplay to true
      this.modalDisplay = true;
    },
    closeModal() {
      // Hide the modal by setting modalDisplay to false
      this.modalDisplay = false;
    },
  },
};
</script>
