<template>
  <div class="grid-body">
    <div class="grid-header">
      <span class="calc-button merge">
        <span>Rad</span> | <span class="light">Deg</span>
      </span>
      <span class="calc-button">x!</span>
      <span class="calc-button">(</span>
      <span class="calc-button">)</span>
      <span class="calc-button">%</span>
      <span class="calc-button" @click="resetField">{{ getClearButtonVal }}</span>
    </div>
    <div class="grid">
      <span class="calc-button" >Inv</span>
      <span class="calc-button">sin</span>
      <span class="calc-button">In</span>
      <span class="calc-button keypad" @click="updateFieldValue(7)">7</span>
      <span class="calc-button keypad" @click="updateFieldValue(8)">8</span>
      <span class="calc-button keypad" @click="updateFieldValue(9)">9</span>
      <span class="calc-button action">÷</span>

      <span class="calc-button">π</span>
      <span class="calc-button">cos</span>
      <span class="calc-button">log</span>
      <span class="calc-button keypad" @click="updateFieldValue(4)">4</span>
      <span class="calc-button keypad" @click="updateFieldValue(5)">5</span>
      <span class="calc-button keypad" @click="updateFieldValue(6)">6</span>
      <span class="calc-button action" @click="updateFieldValue('x')">×</span>

      <span class="calc-button">e</span>
      <span class="calc-button">tan</span>
      <span class="calc-button">√</span>
      <span class="calc-button keypad" @click="updateFieldValue(1)">1</span>
      <span class="calc-button keypad" @click="updateFieldValue(2)">2</span>
      <span class="calc-button keypad" @click="updateFieldValue(3)">3</span>
      <span class="calc-button action" @click="updateFieldValue('-')">−</span>

      <span class="calc-button">Ans</span>
      <span class="calc-button">EXP</span>
      <span class="calc-button">
        <span>
          x <sup>y</sup>
        </span> 
      </span> 
      <span class="calc-button keypad" @click="updateFieldValue(0)">0</span>
      <span class="calc-button keypad" @click="updateFieldValue('.')">.</span>
      <span class="calc-button answer action" @click="updateFieldValue('=')">=</span>
      <span class="calc-button action" @click="updateFieldValue('+')">+</span>
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    updateFieldValue(value){
      if(this.getFieldInput === '' && value == 0){
        return
      }
      this.$store.dispatch('updateFieldInput', value);
    },
    resetField(){
      this.$store.dispatch('resetInputField')
    }
  },
  computed : {
    ...mapGetters(['getFieldInput', 'getClearButtonVal'])
  }
}
</script>

<style scoped> 
.grid{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  justify-content: space-between;
}
span{
  cursor: pointer;
}
.calc-button{
  background: #dadce0;
  color: #202124;
  border: 1px solid #dadce0;
  border-radius: 4px;  
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.calc-button.keypad{ 
  background: #f1f3f4;
  color: #202124;
  border: 1px solid #f1f3f4;
  font-size: 17px;
}
.calc-button.answer{
  background: #4285f4;
  color: #fff;
  border: 1px solid #4285f4;
}
.grid-header{
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
}
.calc-button.merge{
  width: 190px;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  justify-content: space-evenly;
  text-align: center;
}
.calc-button.action{
  font-size: 20px;
}
.calc-button span.light{
  color: #70757a;
}
</style>