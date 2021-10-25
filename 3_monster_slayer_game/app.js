function fnGetRandomValue(iMinValue, iMaxValue) {
  return Math.floor(Math.random() * (iMaxValue - iMinValue)) + iMinValue;
}

const app = Vue.createApp({
  data() {
    return {
      iPlayerHealth: 100,
      iMonsterHealth: 100,
      iCounter: 0,
      bSpecialAttackAvailable: false,
      iTurnSpecialAttackUsed: 0,
      aLog: [],
      sGameOverText: ""
    };
  },
  computed: {
    cpPlayerHealth() {
      return { width: `${this.iPlayerHealth}%` };
    },
    cpMonsterHealthBar() {
      return { width: `${this.iMonsterHealth}%` };
    },
    cpSpecialAttackEnabled() {
      // In case special attack is available an was not used
      if (this.bSpecialAttackAvailable) return { disabled: false };

      if (
        this.iCounter > 0 &&
        this.iCounter - this.iTurnSpecialAttackUsed > 3
      ) {
        this.bSpecialAttackAvailable = true;
        return { disabled: false };
      } else {
        return { disabled: true };
      }
    }
  },
  watch: {
    iPlayerHealth(iValue) {
      if (iValue <= 0 && this.iMonsterHealth <= 0) {
        this.sGameOverText = "It's a draw!";
      } else if (iValue <= 0) {
        this.sGameOverText = "You lost!";
      }
    },
    iMonsterHealth(iValue) {
      if (iValue <= 0 && this.iPlayerHealth <= 0) {
        this.sGameOverText = "It's a draw!";
      } else if (iValue <= 0) {
        this.sGameOverText = "You won!";
      }
    }
  },
  methods: {
    fnAttackMonster() {
      const iPlayerDamage = fnGetRandomValue(5, 12);
      this.iMonsterHealth -= iPlayerDamage;

      this.fnLogAction("PLAYER", "ATTACK", iPlayerDamage);

      this.fnAttackPlayer();
    },
    fnAttackPlayer() {
      // Formular to calculate damage between 8 and 15 points
      const iMonsterDamage = fnGetRandomValue(8, 15);
      this.iPlayerHealth -= iMonsterDamage;

      this.fnLogAction("MONSTER", "ATTACK", iMonsterDamage);

      this.fnEndTurn();
    },
    fnEndTurn() {
      if (this.iPlayerHealth < 0) {
        this.iPlayerHealth = 0;
      }

      if (this.iMonsterHealth < 0) {
        this.iMonsterHealth = 0;
      }

      this.iCounter++;
    },
    fnPerformSpecialAttack() {
      this.bSpecialAttackAvailable = false;
      this.iTurnSpecialAttackUsed = this.iCounter;

      const iPlayerSpecialDamage = fnGetRandomValue(10, 35);
      this.iMonsterHealth -= iPlayerSpecialDamage;

      this.fnLogAction("PLAYER", "ATTACK", iPlayerSpecialDamage);

      this.fnAttackPlayer();
    },
    fnHealPlayer() {
      const iHealthPoints = fnGetRandomValue(8, 20);

      if (this.iPlayerHealth + iHealthPoints > 100) {
        this.iPlayerHealth = 100;
      } else {
        this.iPlayerHealth += iHealthPoints;
      }

      this.fnLogAction("PLAYER", "HEALS", iHealthPoints);

      this.fnAttackPlayer();
    },
    fnLogAction(sPlayer, sAction, sPoints) {
      this.aLog.unshift({
        who: sPlayer,
        action: sAction,
        points: sPoints,
        key: this.iCounter
      });
    },
    fnRestartGame() {
      this.iMonsterHealth = 100;
      this.iPlayerHealth = 100;
      this.aLog = [];
      this.iCounter = 0;
      this.bSpecialAttackAvailable = false;
      this.iTurnSpecialAttackUsed = 0;
      this.sGameOverText = "";
    },
    fnSurrenderGame() {
      this.sGameOverText = "You lost!";
    }
  }
});

app.mount("#game");
