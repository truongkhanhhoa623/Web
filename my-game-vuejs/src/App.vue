<template>
  <div id="app">
    <div class="wrapper clearfix">
      <players
        v-bind:playerScore="playerScore"
        v-bind:playerActive="playerActive"
        v-bind:currentScore="currentScore"
        v-bind:isWinner="isWinner"
      />
      <controls
        v-bind:finalScore="finalScore"
        v-bind:isPlaying="isPlaying"
        v-on:handleOpenPopup="handleOpenPopup"
        v-on:handleRollDice="handleRollDice"
        v-on:handleHold="handleHold"
        v-on:handleFinalScore="handleFinalScore"
      />
      <dices v-bind:dice="dice" />
      <popup-rule
        v-bind:isOpenPopup="isOpenPopup"
        v-on:handleClosePopup="handleClosePopup"
      />
    </div>
  </div>
</template>

<script>
import Players from "./assets/components/Players";
import Controls from "./assets/components/Controls";
import Dices from "./assets/components/Dices";
import PopupRule from "./assets/components/PopupRule";
export default {
  name: "app",
  components: {
    Players,
    Controls,
    Dices,
    PopupRule,
  },
  data() {
    return {
      isPlaying: false,
      playerActive: 0, // cho biet nguoi nao choi
      isOpenPopup: false,
      playerScore: [0, 0],
      currentScore: 0,
      dice: [1, 4],
      finalScore: 10,
    };
  },
  methods: {
    nextLayer() {
      this.playerActive = this.playerActive === 1 ? 0 : 1;
      this.currentScore = 0;
    },
    handleOpenPopup() {
      console.log("App");
      this.isOpenPopup = true;
    },
    handleClosePopup() {
      //Co nghia la bat dau choi
      this.isOpenPopup = false;
      this.isPlaying = true;
      this.playerActive = 0; // cho biet nguoi nao choi
      this.playerScore = [0, 0];
      this.currentScore = 0;
      this.dice = [1, 1];
    },
    handleRollDice() {
      if (this.isPlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(dice1, dice2);
        this.dice = [dice1, dice2];

        if (dice1 === 1 || dice2 === 1) {
          setTimeout(() => {
            alert("Ban da xoay vao so 1");
          }, 100);
          this.nextLayer();
        } else {
          this.currentScore = this.currentScore + dice1 + dice2;
        }
      } else {
        alert("Vui Long Nhan New Game");
      }
    },
    handleHold() {
      if (this.isPlaying) {
        let { playerScore, playerActive, currentScore } = this;
        let scoreOld = playerScore[playerActive];
        let clone_playerScore = [...playerScore];
        clone_playerScore[playerActive] = currentScore + scoreOld;
        this.playerScore = clone_playerScore;
        if (!this.isWinner) {
          this.nextLayer();
        }
      }else{
            alert("Vui Long Nhan New Game");
      }
    },
    handleFinalScore(e) {
      let number = parseInt(e.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = number;
      }
    },
  },
  computed: {
    isWinner() {
      let { playerScore, finalScore } = this;
      if (playerScore[0] >= finalScore || playerScore[1] >= finalScore) {
        this.isPlaying = false;
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url(/dist/assets/back.jpg);
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/**********************************************
*** PLAYERS
**********************************************/
.player-panel {
  width: 50%;
  float: left;
  height: 600px;
  padding: 100px;
  transition: all 0.3s ease;
  background-color: #fff;
}
.player-name {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
}

.player-score {
  text-align: center;
  font-size: 80px;
  font-weight: 100;
  color: #42b983;
  margin-bottom: 130px;
}

.active {
  background-color: #f7f7f7;
}
.active .player-name {
  font-weight: 300;
}

.active .player-name::after {
  content: "\2022";
  font-size: 47px;
  position: absolute;
  color: #42b983;
  top: -7px;
  right: 10px;
}

.player-current-box {
  background-color: #42b983;
  color: #fff;
  width: 40%;
  margin: 0 auto;
  padding: 12px;
  text-align: center;
}

.player-current-label {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
  color: #222;
}

.player-current-score {
  font-size: 30px;
}

.winner {
  background-color: #f7f7f7;
}
.winner .player-name {
  font-weight: 300;
  color: #42b983;
}

/**********************************************
*** Control
**********************************************/
.control {
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  background: none;
  border: none;
  font-family: Lato;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  transition: background-color 0.3s, color 0.3s;
}
.control.disable {
  pointer-events: none;
}

.control:hover {
  font-weight: 600;
}
.control:hover i {
  margin-right: 20px;
}

.control:focus {
  outline: none;
}

.control i {
  color: #42b983;
  display: inline-block;
  margin-right: 15px;
  font-size: 32px;
  line-height: 1;
  vertical-align: text-top;
  margin-top: -4px;
  transition: margin 0.3s;
}

.btn-new {
  top: 45px;
}
.btn-roll {
  top: 403px;
}
.btn-hold {
  top: 467px;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 520px;
  color: #555;
  font-size: 18px;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  width: 160px;
  text-transform: uppercase;
}

.final-score:focus {
  outline: none;
}

/*__________________________ */
#dice-1 {
  top: 120px;
}
#dice-2 {
  top: 250px;
}

.dice {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
}
.spinner div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 1px solid #ccc;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 120px;
  font-size: 100px;
  color: #42b983;
  font-size: 0;
  transition: all 0.3s ease;
  opacity: 1;
}

.spinner .face1 {
  -webkit-transform: translateZ(60px);
  -ms-transform: translateZ(60px);
  transform: translateZ(60px);
  background-image: url("/dist/assets/dice-1.png");
  background-position: center;
  background-size: cover;
}
.spinner .face2 {
  -webkit-transform: rotateY(90deg) translateZ(60px);
  -ms-transform: rotateY(90deg) translateZ(60px);
  transform: rotateY(90deg) translateZ(60px);
  background-image: url("/dist/assets/dice-2.png");
  background-position: center;
  background-size: cover;
}
.spinner .face3 {
  -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
  -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
  transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
  background-image: url("/dist/assets/dice-3.png");
  background-position: center;
  background-size: cover;
}
.spinner .face4 {
  -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  background-image: url("/dist/assets/dice-4.png");
  background-position: center;
  background-size: cover;
}
.spinner .face5 {
  -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  background-image: url("/dist/assets/dice-5.png");
  background-position: center;
  background-size: cover;
}
.spinner .face6 {
  -webkit-transform: rotateX(-90deg) translateZ(60px);
  -ms-transform: rotateX(-90deg) translateZ(60px);
  transform: rotateX(-90deg) translateZ(60px);
  background-image: url("/dist/assets/dice-6.png");
  background-position: center;
  background-size: cover;
}

.spinner {
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 60px 60px 0;
  -ms-transform-origin: 60px 60px 0;
  transform-origin: 60px 60px 0;
  -webkit-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  transition: all 0.9s ease;
  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.spinner.dice-1 {
  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.spinner.dice-2 {
  -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
}
.spinner.dice-3 {
  -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
}
.spinner.dice-4 {
  -webkit-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  -ms-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  -o-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
}
.spinner.dice-5 {
  -webkit-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
}
.spinner.dice-6 {
  -webkit-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  -ms-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  -o-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
}
</style>
