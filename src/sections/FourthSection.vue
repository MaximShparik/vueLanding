<template>
  <section>
    <div class="item__description">
    </div>
  </section>
</template>

<script>
export default {
  name: 'FirstSection',
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style scoped>
section {
  max-width: 768px;
  margin: 0 auto;
  height: 100vh;
  background-color: #fff;
  position: relative;
}
.item__description {
  background: url('@/assets/motul-big-bg.png') center top / cover no-repeat rgb(255, 255, 255);
  height: 100vh;
  /* height: fit-content; */
  padding-top: 23px;
  /* padding-bottom: 0px; */
}
 </style>