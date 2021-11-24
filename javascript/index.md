# JavaScript

On this page:

- [Values](#values)

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

What about booleans?

> Oops, I forgot the booleans (`true` and `false`). Maybe **you** can make a version with booleans. But for now, let's just say `true` is non-zero and `false` is zero.

## Numbers

We can represent numbers as a star (`*`). *Twinkle, twinkle, little star. How I wonder what you are. ...*

We can add stars:

```javascript
4 + 6
```

```
**** + ******
```

Subtract stars:

```javascript
15 - 5
```

```
*****
***** - *****
*****
```

Multiply stars &mdash; wait! How do we multiply stars? We don't have a &times; key!

1. Using the `x` key.
2. Using the `*` (`shift` + `8`) key
3. Using the `X` (`shift` + `x`) key

Answer: **2** `x` and `X` can be used as variables, but `*` can't. So, the second answer is correct.

```javascript
3 * 5
```

Hey! We use stars, so how can we represent the &times; sign. Don't forget, we can use `x` here.

```
*** x *****
```

How do we divide? We *do* have a `÷` (`option` + `/`) key, but should we use it?

1. Yes! It's a foolproof plan to use the `÷` (`option` + `/`) key!
2. No! Some keyboards do not have the `option` key used to make the `÷` key!

Answer: **2** Especially if you use the on-screen keyboard.

So, which key do we use?

1. You said to use the `witch` key! In other words, the `w` + `i` + `t` + `c` + `h` key!
2. The `/` key! It's used in making the `÷` key!
3. The `option` key! It's used in making the `÷` key!
