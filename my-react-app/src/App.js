import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  };
  useEffect(iRunOnlyOnce, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyboard or counter change.");
  }, [keyword, counter]);
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text="Continue" />

      <h1>{counter}</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
