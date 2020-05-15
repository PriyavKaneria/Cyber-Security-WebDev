var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),_templateObject2 = _taggedTemplateLiteral(['\n  font-size: 1.2rem;\n  margin: 0.8rem 0;\n'], ['\n  font-size: 1.2rem;\n  margin: 0.8rem 0;\n']),_templateObject3 = _taggedTemplateLiteral(['\n  font-weight: 300;\n  margin: 1rem 0 2rem;\n'], ['\n  font-weight: 300;\n  margin: 1rem 0 2rem;\n']),_templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-family: inherit;\n  color: inherit;\n  padding: 0.5rem 0;\n  transition: all 0.2s ease-out;\n\n  svg {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    margin: 0 0.5rem;\n    fill: inherit;\n    transition: all 0.2s ease-out;\n  }\n\n  &:hover svg {\n    background: #333;\n    fill: #fff;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-family: inherit;\n  color: inherit;\n  padding: 0.5rem 0;\n  transition: all 0.2s ease-out;\n\n  svg {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    margin: 0 0.5rem;\n    fill: inherit;\n    transition: all 0.2s ease-out;\n  }\n\n  &:hover svg {\n    background: #333;\n    fill: #fff;\n  }\n']),_templateObject5 = _taggedTemplateLiteral(['\n  text-align: center;\n  transition: transform 0.2s ease-out;\n  transition-delay: 0.05s;\n\n  &.Hidden {\n    transform: scale(0);\n    height: 0;\n    visibility: none;\n    opacity: 0;\n  }\n'], ['\n  text-align: center;\n  transition: transform 0.2s ease-out;\n  transition-delay: 0.05s;\n\n  &.Hidden {\n    transform: scale(0);\n    height: 0;\n    visibility: none;\n    opacity: 0;\n  }\n']),_templateObject6 = _taggedTemplateLiteral(['\n  font-size: 1.4rem;\n  margin: 0.8rem 0;\n'], ['\n  font-size: 1.4rem;\n  margin: 0.8rem 0;\n']),_templateObject7 = _taggedTemplateLiteral(['\n  margin: 0.8rem 0 1rem;\n  font-size: 1.2rem;\n'], ['\n  margin: 0.8rem 0 1rem;\n  font-size: 1.2rem;\n']),_templateObject8 = _taggedTemplateLiteral(['\n  font-size: 1.1rem;\n  line-height: 2;\n  text-align: initial;\n'], ['\n  font-size: 1.1rem;\n  line-height: 2;\n  text-align: initial;\n']),_templateObject9 = _taggedTemplateLiteral(['\n  margin: 1rem 0;\n  background: none;\n  border: 1px solid #252525;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 1.2rem;\n  font-family: inherit;\n  color: inherit;\n  transition: all 0.2s ease-out;\n\n  &:hover, &:focus {\n    background: #252525;\n    color: #fff;\n  }\n  &:active {\n    background: #252525;\n    color: #fff;\n    transform: scale(1.1);\n  }\n'], ['\n  margin: 1rem 0;\n  background: none;\n  border: 1px solid #252525;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 1.2rem;\n  font-family: inherit;\n  color: inherit;\n  transition: all 0.2s ease-out;\n\n  &:hover, &:focus {\n    background: #252525;\n    color: #fff;\n  }\n  &:active {\n    background: #252525;\n    color: #fff;\n    transform: scale(1.1);\n  }\n']),_templateObject10 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin: 1rem 0 1.5rem;\n  font-weight: 300;\n  font-size: 1.4rem;\n'], ['\n  text-align: center;\n  margin: 1rem 0 1.5rem;\n  font-weight: 300;\n  font-size: 1.4rem;\n']),_templateObject11 = _taggedTemplateLiteral(['\n  font-size: 1.2rem;\n  line-height: 4;\n  list-style: none;\n  counter-reset: special-counter;\n\n  li {\n    margin-left: 2rem;\n    padding-left: 1.5rem;\n    counter-increment: special-counter;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.2s ease-out;\n\n    &:before {\n    content: counter(special-counter);\n    position: absolute;\n    right: 100%;\n    top: 50%;\n    background: #252a37;\n    color: #fff;\n    border-radius: 50%;\n    width: 2.5rem;\n    height: 2.5rem;\n    text-align: center;\n    line-height: 2.5rem;\n    transform: translateY(-50%);\n    transition: all 0.2s ease-out;\n    }\n    &:hover:before {\n      background: #252a3799;\n    }\n    &:hover {\n      background: #252a3722;\n    }\n  }\n'], ['\n  font-size: 1.2rem;\n  line-height: 4;\n  list-style: none;\n  counter-reset: special-counter;\n\n  li {\n    margin-left: 2rem;\n    padding-left: 1.5rem;\n    counter-increment: special-counter;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.2s ease-out;\n\n    &:before {\n    content: counter(special-counter);\n    position: absolute;\n    right: 100%;\n    top: 50%;\n    background: #252a37;\n    color: #fff;\n    border-radius: 50%;\n    width: 2.5rem;\n    height: 2.5rem;\n    text-align: center;\n    line-height: 2.5rem;\n    transform: translateY(-50%);\n    transition: all 0.2s ease-out;\n    }\n    &:hover:before {\n      background: #252a3799;\n    }\n    &:hover {\n      background: #252a3722;\n    }\n  }\n']),_templateObject12 = _taggedTemplateLiteral(['\n  text-align: center;\n  display: inline-block;\n  font-family: "Lato", sans-serif;\n  padding: 0.5rem 0;\n  border-top: 0.2rem solid #252a37;\n  border-bottom: 0.2rem solid #252a37;\n  background: #fff;\n'], ['\n  text-align: center;\n  display: inline-block;\n  font-family: "Lato", sans-serif;\n  padding: 0.5rem 0;\n  border-top: 0.2rem solid #252a37;\n  border-bottom: 0.2rem solid #252a37;\n  background: #fff;\n']);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}var _Redux = Redux,createStore = _Redux.createStore;var _ReactRedux =
ReactRedux,Provider = _ReactRedux.Provider,connect = _ReactRedux.connect;
var Component = React.Component;var
styled = styled.default;var _ReactDOM =
ReactDOM,render = _ReactDOM.render;

// DATA
// detail in an array one object for each question
/** object structure
   * id,
   * question,
   * answers (array of objects itself),
   * correctAnswer,
   * explanation
 * 
 * answers' objects structure
  * choice,
  * value
 */
var data = [
{
  id: 0,
  question: 'How many types of security are there in terms of cumputer?',
  answers: [
  {
    choice: 0,
    value: '4' },

  {
    choice: 1,
    value: '5' },

  {
    choice: 2,
    value: '6' },

{
    choice: 3,
    value: '7' }],


  correctAnswer: 1,
  explanation: "There are five types of security in terms of computers. These are namely:\r1.Application Security\r2.Imformation Security\n3.Network Security\n4.Opperational Security\n5.End-User Security" },

{
  id: 1,
  question: 'Which security is related to preventing unauthorized access to confidential data?',
  answers: [
  {
    choice: 0,
    value: 'Application Security' },

  {
    choice: 1,
    value: 'Network Security' },

  {
    choice: 2,
    value: 'Opperational Security' },

  {
    choice: 3,
    value: 'End-User Security' },

  {
    choice: 4,
    value: 'Imformation Security' }],


  correctAnswer: 4,
  explanation: 'Refer to the home page : elements of cyber security.' },

{
  id: 2,
  question: 'Which Security is nowadays the major cause of hacked or leaked businesses ?',
  answers: [
  {
    choice: 0,
    value: 'Application Security' },

  {
    choice: 1,
    value: 'Network Security' },

  {
    choice: 2,
    value: 'Opperational Security' },

  {
    choice: 3,
    value: 'End-User Security' },

  {
    choice: 4,
    value: 'Imformation Security' }],


  correctAnswer: 3,
  explanation: 'End-user security awareness is a major issue in the business world today.A single email can lead to a multi-million dollar breach in seconds, and the employee responsible may not even be aware of their mistake.The problem lies in the fact that too few employees know of the dangers of social engineering, much less how to detect it.' },

{
  id: 3,
  question: 'Name the malicious program that is installed for stealing passwords.',
  answers: [
  {
    choice: 0,
    value: 'Trojan' },

  {
    choice: 1,
    value: 'Keylogger' },

  {
    choice: 2,
    value: 'Ransomware' },

  {
    choice: 3,
    value: 'Worms' }],


  correctAnswer: 1,
  explanation: 'Keylogger is a malicious program that may be installed in the victim\'s computer for stealing passwords.' },

{
  id: 4,
  question: 'Which software encrytps your data and blackmails you to pay money for decrypting the data?',
  answers: [
  {
    choice: 0,
    value: 'Trojan' },

  {
    choice: 1,
    value: 'Keylogger' },

  {
    choice: 2,
    value: 'Ransomware' },

  {
    choice: 3,
    value: 'Worms' }],

  correctAnswer: 2,
  explanation: 'Ransomware is a t\ype of malicious software that thr\eatens to publish the victim\'s data or block it unless ransom is paid.' },

{
  id: 5,
  question: 'Which crime is related to misusing the information available on social media by the use of internet?',
  answers: [
  {
    choice: 0,
    value: 'Cyber Stalking' },

  {
    choice: 1,
    value: 'Call Spoofing' },

  {
    choice: 2,
    value: 'Profile Hacking' },

  {
    choice: 3,
    value: 'Card Skimming' }],


  correctAnswer: 0,
  explanation: 'Cyber Stalking is the use of the internet or other electronic means to stalk by misusing imformation uploaded on social media.' },

{
  id: 6,
  question: 'Can Debit Card Skimming occur if the PIN is given to some stranger for some time.',
  answers: [
  {
    choice: 0,
    value: 'Yes' },

  {
    choice: 1,
    value: 'No' }],


  correctAnswer: 0,
  explanation: 'Debit Card skimming happens when the PIN is revealed to another person even for short while.' },

{
  id: 7,
  question: 'Where can phishing take place?',
  answers: [
  {
    choice: 0,
    value: 'Gaming Website' },

  {
    choice: 1,
    value: 'Toys Website' },

  {
    choice: 2,
    value: 'Shopping Website' }],


  correctAnswer: 2,
  explanation: 'Shopping online has to be done keeping guidelines in mind as one can become a victim of phishing or fake websites.' },

{
  id: 8,
  question: 'Which game you should NOT play?',
  answers: [
  {
    choice: 0,
    value: 'Ludo' },

  {
    choice: 1,
    value: 'Checkers' },

  {
    choice: 2,
    value: 'Blue Whale' },

  {
    choice: 3,
    value: 'Chess' }],


  correctAnswer: 2,
  explanation: 'It is a "game" reportedly consisting of a series of tasks assigned to players by administrators over a 50-day period, initially innocuous before introducing elements of self-harm and the final challenge requiring the player to commit suicide.' },

{
  id: 9,
  question: 'Should you share your passwords,PIN or phone no. to strangers?',
  answers: [
  {
    choice: 0,
    value: 'Yes' },

  {
    choice: 1,
    value: 'No' },

  {
    choice: 2,
    value: 'Yes and no' }],


  correctAnswer: 1,
  explanation: 'Passwords,Debit Card PINS and phone no.\'s are highly confidential and vital for your security as people can misuse these details.So we should never share passwords with other people whoom we do not trust.' }];



// create a function which returns true or false depending on chance
var fiftyFifty = function fiftyFifty() {return Math.random() > 0.5;};
// randomize the data for the position of the answers
data.forEach(function (question) {return question.answers.sort(function () {return fiftyFifty() ? 1 : -1;});});
// randomize the data for the position of the questions
data = data.sort(function () {return fiftyFifty() ? 1 : -1;});


// REDUX
// set the initial state
var initialState = {
  data: data


  // create the store, currently simply returning the initial state
  // in a more apt application of redux, actions and action creators would be set up to return a single array's item
};var reducer = function reducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;return state;};
var store = createStore(reducer);


// REACT (starting with the most nested components and ending with the render function)

// return the svg making up the twitter icon
var SVGTwitter = function SVGTwitter() {
  return (
    React.createElement('svg', { id: 'twitter-icon', xmlns: 'http://www.w3.org/2000/svg', width: '100', height: '100', viewBox: '0 0 26.458 26.458' },
      React.createElement('path', { d: 'M13.23 2.646A10.584 10.584 0 0 0 2.646 13.23 10.584 10.584 0 0 0 13.23 23.812 10.584 10.584 0 0 0 23.81 13.23 10.584 10.584 0 0 0 13.23 2.646zM7.39 7.73c1.085 2.652 5.528 3.396 5.528 3.396 1.082-4.992 4.93-2.228 5.115-1.87.31.423 1.912-.372 1.912-.372.051.584-1.395 1.22-1.395 1.22l1.55.054c.052.317-1.446.742-1.446.742-.104 6.843-5.89 7.704-5.89 7.704-3.049.531-6.097-.848-6.097-.848 2.015.372 4.392-2.122 4.392-2.122-1.67.396-2.902-.692-3.279-1.08a.249.249 0 0 1-.132-.14s.055.06.132.14c.514.256 2.193-.459 2.193-.459-3.255-.424-3.616-2.917-3.616-2.917 1.394 1.38 2.996 1.22 2.996 1.22-2.17.053-1.963-4.668-1.963-4.668z' })));


};



var Result = styled.div(_templateObject);


var Proclamation = styled.h2(_templateObject2);



var Score = styled.h1(_templateObject3);



var Link = styled.a(_templateObject4);



/*
                                       render a stateless component highlighting the score of the quiz
                                       additionally detail a link to share the result on twitter 
                                       */
var AppResult = function AppResult(props) {
  /** information needed
                                            * number of correct answers
                                            * number of toal questions
                                            */var
  correct = props.correct,total = props.total;
  // create the tweet detailing the text in the appropriate attribute
  var tweet = 'https://twitter.com/intent/tweet?text=Answered%20correctly%20to%20' + correct + '%20questions%20out%20of%20' + total + '.%20Your%20turn.';

  // render a header describing the number of correct answers given, atop an anchor link to share the score on twitter
  return (
    React.createElement(Result, { className: 'AppResult' },
      React.createElement(Proclamation, null, 'You have answered correctly to'),
      React.createElement(Score, null, correct, ' questions out of ', total),
      React.createElement(Proclamation, null, 'You have Good Knowledge about this now, so share this knowledge with your friends and family members!'),

      // React.createElement(Link, { href: tweet }, 'Feel free to brag about it ',
        // React.createElement(SVGTwitter, null))
        ));



};



// through the class of .hidden also set a height of 0, to avoid vertical overflow from the get-go
var Answer = styled.div(_templateObject5);
var Verdict = styled.h2(_templateObject6);
var Correction = styled.p(_templateObject7);
var Explanation = styled.p(_templateObject8);
var Button = styled.button(_templateObject9);
                                              /*
                                              render whether the answer was correct or not
                                              detail also the explanation behind the question
                                              detail a button to continue to the next question
                                              */
var AppAnswer = function AppAnswer(props) {
  /** information needed
                                            * whether the answer is correct
                                            * the right answer
                                            * the explanation
                                            * 
                                            * additionally
                                            *  a boolean to show/hide the component
                                            *  a boolean to detail if the question is the last one
                                            *  the function to continue after the question
                                            */
var
  isCorrect = props.isCorrect,isHidden = props.isHidden,isLast = props.isLast,nextQuestion = props.nextQuestion,data = props.data;var
  answers = data.answers,correctAnswer = data.correctAnswer,explanation = data.explanation;
  // show the component adding or omitting a class of Hidden
  var className = isHidden ? ' AppAnswer Hidden' : 'AppAnswer';

  // render the answer atop the explanation and a button to move forwards
  return (
    React.createElement(Answer, { className: className },

      isCorrect ?

      React.createElement(Verdict, null, 'Right Answer!') :

      React.createElement(React.Fragment, null,
        React.createElement(Verdict, null, 'Sorry, wrong answer'),
        React.createElement(Correction, null, 'The right answer was: ', React.createElement('strong', null, answers.find(function (answer) {return answer.choice === correctAnswer;}).value))),


      React.createElement(Explanation, null, explanation),
      React.createElement(Button, { onClick: nextQuestion }, isLast ? "Continue" : "Check your Score")));


};


var Question = styled.h2(_templateObject10);






// when hovering on the list items change the color of the special indicator as well as the background of the list item
var Answers = styled.ol(_templateObject11);





var AppQuestion = function AppQuestion(props) {
  /** information needed
                                                * question
                                                * answers 
                                                * 
                                                * additionally
                                                *  the function to show the answer for the connected question
                                                */var _props$data =
  props.data,question = _props$data.question,answers = _props$data.answers;var
  showAnswer = props.showAnswer;

  // create a series of list items, one for each possible option
  var choices = answers.map(function (answer) {return (
      React.createElement('li', {
          key: answer.answer,
          choice: answer.choice,
          onClick: showAnswer },
        answer.value));});



  // render the question and the answers in an ordered list
  return (
    React.createElement('div', { className: 'AppQuestion' },
      React.createElement(Question, null, question),
      React.createElement(Answers, null,
        choices)));



};

var Counter = styled.h3(_templateObject12);










// manage the state of the application and render the components making up the same 
var App = function (_Component) {_inherits(App, _Component);
  function App(props) {_classCallCheck(this, App);

    /*
                                                   starting from the data and the values required in each component detail in the state:
                                                     - counter, to keep track of the number of questions
                                                     - correct, to keep track of the correct answers
                                                     - isHidde, to alternatively show/hide the answer component
                                                     - isCorrect, to detail an appropriate message
                                                     - isFinished, to visualize the result when the last question is given
                                                   */var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {
      counter: 0,
      correct: 0,
      isHidden: true,
      isCorrect: false,
      isFinished: false

      // bind the functions to show the answer (as one is given) and move on to the next question
    };_this.showAnswer = _this.showAnswer.bind(_this);
    _this.nextQuestion = _this.nextQuestion.bind(_this);return _this;
  }_createClass(App, [{ key: 'showAnswer', value: function showAnswer(

    e) {
      // from the selected element retrieve the answer as described in the choice attribute
      var target = e.target;
      var answer = parseInt(target.getAttribute('choice'));
      // retrieve the correct answer
      var correctanswer = this.props.data[this.state.counter].correctAnswer;
      // detail a boolean based on these last two 
      var isCorrect = answer === correctanswer;
      // increment the correct variable in case the given answer was indeed correct
      var correct = isCorrect ? this.state.correct + 1 : this.state.correct;

      // set the boolean isHidden to false as to show the asnwer
      this.setState({
        correct: correct,
        isCorrect: isCorrect,
        isHidden: false });

    } }, { key: 'nextQuestion', value: function nextQuestion()

    {
      // retrieve the number of the current question and the total number of queries
      var counter = this.state.counter;
      var length = this.props.data.length;
      // depending on whether the application has reached the last question or not
      // set the boolean isFinished to true, to render the result component
      if (counter === length - 1) {
        this.setState({
          isFinished: true });

      }
      // increment the counter and hide the answer component
      else {
          this.setState({
            counter: this.state.counter + 1,
            isHidden: true });

        }
    }
    /*
      in the render function, display
      - a header with the current question being answered
      - a component for the question
      - a component for the answer (when one is given)
       - a component for the result (when all questions are answered)
      */ }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'App' },

          !this.state.isFinished ?

          React.createElement(React.Fragment, null,
            React.createElement(Counter, null, this.state.counter + 1, '/', this.props.data.length),
            React.createElement(AppQuestion, { showAnswer: this.showAnswer, data: this.props.data[this.state.counter] }),
            React.createElement(AppAnswer, { isHidden: this.state.isHidden, isLast: this.state.counter !== this.props.data.length - 1, isCorrect: this.state.isCorrect, nextQuestion: this.nextQuestion, data: this.props.data[this.state.counter] })) :


          React.createElement(AppResult, { correct: this.state.correct, total: this.props.data.length })));



    } }]);return App;}(Component);


// map the daa in the store to props
var mapStateToProps = function mapStateToProps(state) {return {
    // this means data is accessible under props.data
    data: state.data };};


// connect the application to the data in the store
App = connect(mapStateToProps)(App);

// wrap the application in the provider, detailing the store
ReactDOM.render(
React.createElement(Provider, { store: store },
  React.createElement(App, null)),
document.getElementById('root'));