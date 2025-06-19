import React, { useEffect, useState } from "react";

function Counter() {
  const [num, setnum] = useState(0);
  const [product, setproduct] = useState("Eggs");

  useEffect(() => {
    alert(product + " High Demand");
  }, [num]);

  return (
    <div>
      <div>
        Current {product}'s count: {num}
      </div>
      <button onClick={() => setnum(num + 1)}>
        Add to Cart {num}
      </button>

      <br />

      <button onClick={() => setnum(num - 1)}>
        Remove From Cart {num}
      </button>

      <br />

      Change Product:{" "}
      <input
        type="text"
        onChange={(e) => setproduct(e.target.value)}
        value={product}
      />
    </div>
  );
}

export default Counter;
