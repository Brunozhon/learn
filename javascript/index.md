# JavaScript

On this page:

- Values

## Values

We can demostrate this using a room.

<dl>
  <dt>A non-zero value</dt>
  <dd>A room that still has containers with stuff.</dd>
  <dt>A zero value</dt>
  <dd>A room that has containers without stuff.</dd>
  <dt><code>null</code> <i>(special type)</i></dt>
  <dd>A room that has no containers and no stuff.</dd>
  <dt><code>undefined</code> <i>(special type)</i></dt>
  <dd>A room where the room itself is missing.</dd>
</dl>

![Rooms to demostrate values.](https://user-images.githubusercontent.com/69879040/143264241-11bcbf27-08a0-46df-8509-bfa43b709bc8.jpeg)

You can download [the minified version](non-zero-zero-null-or-undefined.min.js) or [the regular version](non-zero-zero-null-or-undefined.js). Then, write this HTML code:
```html
<html>
  <body>
    <p>Press F12 to see the console.</p>
    <script src="path/to/non-zero-zero-null-or-undefined.min.js"></script>
    <!--
    Or: <script src="path/to/non-zero-zero-null-or-undefined.js"></script>
    -->
    <script>
      var t = nonZeroZeroNullOrUndefined // We don't want to write that much
      console.log(t(1)) // non-zero
      console.log(t({some: "more", complex: "value"})) // non-zero
      console.log(t(["these are", "some numbers:", 1, 2, 3, 4])) // non-zero
      console.log(t("cool")) // non-zero
      console.log(t(0)) // zero
      console.log(t("")) // zero
      console.log(t({})) // zero
      console.log(t([])) // zero
      console.log(t(null)) // null
      console.log(t(undefined)) // undefined
      try {
        console.log(t(console))
      } catch(e) {
        console.log("Error happened: " + e) // Error happened: TypeError: Value must be a number, string, object, null, or undefined.
      }
      
    </script>
  </body>
</html>
```
