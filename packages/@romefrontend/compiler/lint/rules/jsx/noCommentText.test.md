# `noCommentText.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/compiler/lint/rules/jsx/noCommentText.test.ts --update-snapshots` to update.

## `react jsx no comment text`

### `0`

```

 unknown:1:15 lint/jsx/noCommentText  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Wrap comments inside children within braces.

    const a = <div>// comment</div>
                   ^^^^^^^^^^

  ℹ JavaScript comment sequences are not supported by JSX and result in unwanted characters
    on-screen.

  ℹ Recommended fix

  - // comment
  + {/** comment*/}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
const a = <div>// comment</div>;

```

### `1`

```

 unknown:1:15 lint/jsx/noCommentText  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Wrap comments inside children within braces.

    const a = <div>/* comment */</div>
                   ^^^^^^^^^^^^^

  ℹ JavaScript comment sequences are not supported by JSX and result in unwanted characters
    on-screen.

  ℹ Recommended fix

  + {/** comment */}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
const a = <div>/* comment */</div>;

```

### `2`

```

 unknown:1:15 lint/jsx/noCommentText  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Wrap comments inside children within braces.

    const a = <div>/** comment */</div>
                   ^^^^^^^^^^^^^^

  ℹ JavaScript comment sequences are not supported by JSX and result in unwanted characters
    on-screen.

  ℹ Recommended fix

  + {/** comment */}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
const a = <div>/** comment */</div>;

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```
const a = <div>{ /* comment */}</div>;

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```
const a = <div>{ /** comment*/}</div>;

```

### `5`

```
✔ No known problems!

```

### `5: formatted`

```
const a = <div className={"cls" /* comment */}></div>;

```
