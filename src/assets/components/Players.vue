<template>
  <div>
    <div class="player-panel" v-bind:class="{ active: playerActive == 0 && !isWinner, winner: isWinner && playerActive == 0}">
      <div class="player-name">{{ getNamePlayer(0) }}</div>
      <div class="player-score">{{ playerScore[0] }}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">
          {{ playerActive == 0 ? currentScore : 0 }}
        </div>
      </div>
    </div>

    <div class="player-panel" v-bind:class="{ active: playerActive == 1 && !isWinner, winner: isWinner && playerActive == 1 }">
      <div class="player-name">{{ getNamePlayer(1) }}</div>
      <div class="player-score">{{ playerScore[1] }}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">
          {{ playerActive == 1 ? currentScore : 0 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Controls from "./Controls"
export default {
  name: "players",
  components: {
      Controls,
  },
  props: {
    playerScore: { type: Array, default: [0, 0] },
    playerActive: { type: Number, default: 0 },
    currentScore: { type: Number, default: 0 },
    isWinner: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  methods: {
    getNamePlayer(index) {
      var defaultName = "Player " + (index + 1);
      if (this.isWinner && this.playerActive == index) {
        defaultName = "Winner!";
      }return defaultName;
    },
  },
};
</script>
<style>
</style>