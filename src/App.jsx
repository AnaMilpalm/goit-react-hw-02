
import './App.css'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
// import Feedback from './components/Feedback/Feedback';
import feedbacks from './assets/feedbacks.json';
import 'modern-normalize';
function App() {

  
  return (
    <>
       <Description />
       <Options feedbacks={feedbacks} />
       {/* <Feedback  /> */}
    </>
  )
}

export default App;
