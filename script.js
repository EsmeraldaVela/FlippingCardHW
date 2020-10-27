new Vue({
  el: "#flashcards-app",
  data: {
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false,
        inputRadio: ""
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false,
        inputRadio: ""
      },
      {
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false,
        inputRadio: ""
      }
    ]
  },
  methods:{
   Flip:function(cards){
     cards.flipped=! cards.flipped;
   },
    addNewCard:function(){
      this.cards.push({
        question:"",
        answer:"",
        flipped: false
      });
    }
  }
});