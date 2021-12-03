import evaluate from '../services/calc'
const state = {
  field_answer: '',
  field_input: '',
  lastType: 'operator',
}

const actions = {
  updateFieldInput({ commit }, value){
    if(+value || value == '0'){
      commit('UPDATE_FIELD_INPUT', value);
      state.lastType = 'number'
    } else {
      switch(value){
        case '.' :
          if(state.field_input.charAt(state.field_input.length-1) != '.'){
            commit('UPDATE_FIELD_INPUT', '.');
          } 
          break;
        case '+' :
          if(state.lastType === 'number'){
            commit('UPDATE_FIELD_INPUT', ' + ');
            state.lastType = 'operator';
          }
          break;
        case '-' :
          
          if(state.lastType === 'number'){
            commit('UPDATE_FIELD_INPUT', ' - ');
            state.lastType = 'operator';
          }
          break; 
        case 'x' :
          if(state.lastType === 'number'){
            commit('UPDATE_FIELD_INPUT', ' * ');
            state.lastType = 'operator';
          }
          break;
        case '=' :
          const result = evaluate(state.field_input);
          commit('UPDATE_RESULT', result);
          break;
      }
    } 
  },
  resetInputField({ commit }){
    if(state.field_input !== ''){
      commit('RESET_FIELD');
    }
  }
}

const mutations ={
  'UPDATE_FIELD_INPUT'(state, payload){
    state.field_input = state.field_input + "" +payload;
  },
  'RESET_FIELD'(state){
    state.field_answer = `Ans = ${state.field_input}`;
    state.field_input = '';
  },
  'UPDATE_RESULT'(state, value){
    state.field_answer = state.field_input;
    state.field_input = value;
  }
}

const getters = {
  getFieldInput(state){
    return state.field_input;
  },
  getFieldAnswer(state){
    return state.field_answer;
  },
  getClearButtonVal(state){
    if(state.field_input.length > 0){
      return 'AC';
    } else {
      return 'CE';
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}