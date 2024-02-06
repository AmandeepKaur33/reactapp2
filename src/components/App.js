import './App.css';
import pic from '../images/cust.png';
import pic2 from '../images/download (14).jpg'
// import './index.css'

function App() {
  return (
    <div>
      <div className='wrapper'>
      <div className="left">
        <img src={pic} alt='pic'/>
        <div class='profile'>
          <h2>Leslie Alexander</h2>
          <h3>leslie.alexander@example.com</h3>
        </div>
      </div>
      <div class="right">
        <h2>Co-Founder/CEO</h2>
        <h3>Last seen 4h ago</h3>
      </div>
    </div>
    <div className='wrapper'>
      <div class="left">
        <img src={pic2} alt='pic'/>
        <div class='profile'>
          <h2>Helly Vincent</h2>
          <h3>helly.vincent@example.com</h3>
        </div>
      </div>
      <div class="right">
        <h2>Business Relations</h2>
        <div id="status">
          <button readonly></button>
          <h3>Online</h3>
        </div>
      </div>
    </div>
    </div>
    // <div className='wrapper'>
    //   <div class="left">
    //     <img src={pic} alt='pic'/>
    //     <div class='profile'>
    //       <h2>Leslie Alexander</h2>
    //       <h3>leslie.alexander@example.com</h3>
    //     </div>
    //   </div>
    //   <div class="right">
    //     <h2>Co-Founder/CEO</h2>
    //     <h3>Last seen 4h ago</h3>
    //   </div>
    // </div>
    
    

  );
}

export default App;
