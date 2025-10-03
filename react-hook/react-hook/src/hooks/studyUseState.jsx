import React, { useState } from "react";
 export function Counter() {
  const [count, setCount] = useState(0); // khai báo state

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}