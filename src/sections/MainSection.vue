<template>
  <section>
    <div class="first">
      <div class="ca">
        <div class="address">
          0xIUGIGubviegbwf9uibiubIUBGiugb9o89y
        </div>
        <div class="copyBTN">
          <img src="" alt="">
        </div>
      </div>
      <div class="mainIMG">
        <img src="@/assets/main.png" alt="">
      </div>
    </div>
    <div class="second">
      <div class="socialBOX">
        <img src="@/assets/dex.png" alt="">
        <img src="@/assets/tg.png" alt="">
        <!-- <img src="@/assets/x.png" alt=""> -->
      </div>
      <div class="descriptionTEXT">
        IBIYOIBuvb9ib98ubf rfewerfu9 w9erfh  uhefr 9erwh fiuerh fieruhf eorfh eriwoufh eriwufheiruf hierhf ieuhf ierh fiuerhfiouewhfuierh f eruhfiuerfhiuerhf uerw fiuerwfh
      </div>
      <div class="secondaryIMG">
        <img src="@/assets/secondary.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
	data() {
    return {
    };
  },
	methods: {
  }
}
</script>

<style>
section {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.first {
  background-color: purple;
}

@media screen and (max-width: 1000px) {
  .ca {
    font-size: 25px;
  }
}
</style>