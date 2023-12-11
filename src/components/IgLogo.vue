<template>
  <div class="flex flex-col items-center space-y-0 sm:my-5">
    <div v-for="(image, index) in imageList" :key="index">
      <img :src="image" :alt="index === 0 ? 'Instagram' : 'Image'" class="w-36 sm:w-48 h-auto p-0 m-0" />
    </div>
  </div>
</template>

<script>
import ig4 from './iggs/ig4.png'
import ig3 from './iggs/ig3.png'
import ig2 from './iggs/ig2.png'
import ig1 from './iggs/ig1.png'

export default {
  data() {
    return {
      imageList: [ig4, ig3, ig2, ig1],
    };
  },
};
</script>
