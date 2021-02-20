import { useState } from "react";

function App() {
  const [count, setcount] = useState(1);
  const addCount = () => {
      setcount(count+1);
  }
  return (
    <div>
      <p>คุณกดปุ่มไปแล้ว {count} ครั้ง</p>
    <button onClick={addCount}>+1</button>
    </div>
  );
}
export default App;
