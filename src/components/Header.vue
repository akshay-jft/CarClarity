<template>
  <div class="header-body">
    <span><v-icon size="25px">mdi-history</v-icon></span>
    <div class="answer-section">
      <span>{{ getFieldAnswer }}</span>
      <h2>{{ getHeaderValue }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed : {
    ...mapGetters(['getFieldInput', 'getFieldAnswer']),
    getHeaderValue(){
      if(this.getFieldInput === ''){
        return '0'
      } 
      return this.getFieldInput
    }
  }
}
</script>

<style scoped>
.header-body{
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 10px 14px 0 10px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.header-body:hover{
  border-top-color: #202124;;
}
.answer-section{
  text-align: right;
}
.answer-section h2{
  font-size: 22px;
  font-weight: 400;
}
.answer-section span {
  color: #70757a;
}
</style>