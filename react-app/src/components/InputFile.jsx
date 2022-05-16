import { useRef } from "react";
import styles from "../App.module.css";
const InputFile = () => {
  const fileEl = useRef(null);
  return (
    <>
      <div className={styles["App-header"]}>asdf</div>
      <button onClick={() => fileEl.current.click()}>업로드</button>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
    </>
  );
};

export default InputFile;
