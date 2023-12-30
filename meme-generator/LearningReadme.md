<!-- Even Lisener in React -->
write you functions in the js before return statment
in the html markuo onClick={fucntionName}

```
import React from 'react';
export default function Clickme() {
    function imgHover() {
        console.log("Hovered on img")
    }
    return (
        <div>
            <img onMouseOver ={ imgHover} src="https://i.pinimg.com/564x/7a/be/d3/7abed32410b686711603d2466ca0ab34.jpg" alt='img' />
            <button>CLICK ME</button>
            </div>
    )
}
```