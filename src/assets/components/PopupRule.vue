<template>
  <div class="popup" v-bind:class="handleOpenPopup">
    <div class="popup_layout">
      <h1>Luật Chơi</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
        sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
      </p>
      <button 
      class="popup__btn" 
      v-on:click="ClickClosePopup"
      >Đã Hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-rule",
  data() {
    return {};
  },
  props: {
    isOpenPopup: Boolean,
  },
  methods: {
      ClickClosePopup(){
          this.$emit('handleClosePopup')
      }
  },
  computed: {
    handleOpenPopup() {
      return {
        "popup-open": this.isOpenPopup,
      };
    },
  },
};
</script>
<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.popup.popup-open {
  opacity: 1;
  visibility: visible;
}
.popup_layout {
  background-color: #fff;
  padding: 10px 15px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  transition: all 0.3s ease;
}

.popup-open .popup_layout {
  transform: translate(-50%, -50%) scale(1);
}
.popup__btn {
  margin-top: 15px;
  padding: 5px 10px;
  background-color: #fff;
  color: #333;
  transition: all 0.3s ease;
}
.popup__btn:hover {
  background-color: #333;
  color: #fff;
}
</style>