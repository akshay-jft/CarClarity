import evaluate from '../services/calc'
const state = {
  field_answer: '',
  field_input: '',
  lastType: 'operator'
}

const actions = {
  updateFieldInput({ commit }, value){
    if(+value || value == '0'){
      commit('UPDATE_FIELD_INPUT', value);
      state.lastType = 'number'
    } else {
      switch(value){
        case '.' : 
          commit('UPDATE_FIELD_INPUT', '.');
          break;
        case '+' :
          if(state.lastType === 'number'){
            commit('UPDATE_FIELD_INPUT', ' + ');
            state.lastType = 'operator'
          }
          break;
        case '-' :
          if(state.lastType === 'number'){
            commit('UPDATE_FIELD_INPUT', ' - ');
            state.lastType = 'operator'
          }
          break; 
        case 'x' :
          if(state.lastType === 'number'){
            commit('UPDATE_FIELD_INPUT', ' x ');
            state.lastType = 'operator'
          }
          break;
        case '=' :
          const result = evaluate(state.field_input);
          commit('UPDATE_RESULT', result)
          break;
      }
    } 
  },
  resetInputField({ commit }){
    commit('RESET_FIELD')
  }
}

const mutations ={
  'UPDATE_FIELD_INPUT'(state, payload){
    state.field_input = state.field_input + "" +payload;
  },
  'RESET_FIELD'(state){
    state.field_input = ''
    state.field_answer = ''
  },
  'UPDATE_RESULT'(state, value){
    state.field_answer = value;
  }
}

const getters = {
  getFieldInput(state){
    return state.field_input;
  },
  getFieldAnswer(state){
    return state.field_answer
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}