<template>
  <div>
    <button 
    class="control btn-new" 
    v-on:click="newGame">
      <i class="ion-ios-plus-outline"></i>New game
    </button>
    <button 
    class="control btn-roll" 
    v-on:click="rollDice"
    ><i class="ion-ios-loop"></i>Roll dice
    </button>
    <button 
    class="control btn-hold"
    v-on:click = "Hold"
    ><i class="ion-ios-download-outline"></i>Hold
    </button>
    <input 
    v-bind:value="finalScore" 
    v-on:input = "$emit('handleFinalScore',$event)"  
    v-bind:disabled="isPlaying"
    type="number" placeholder="Final score" class="final-score" />
  </div>
</template>
<script>
export default {
  name: "controls",
  props: {
      finalScore:{type: [Number, String], default: 0},
      isPlaying:{type: Boolean, default: false},
  },
  data() {
    return {
        data: "Hello"
    };
  },
  methods: {
    newGame() {
      this.$emit("handleOpenPopup");
    },
    rollDice() {
      this.$emit("handleRollDice");
    },
    Hold(){
        this.$emit("handleHold");
    },
  },
};
</script>
<style>
</style>