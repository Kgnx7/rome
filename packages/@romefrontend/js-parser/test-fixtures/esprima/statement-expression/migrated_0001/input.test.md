# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-expression > migrated_0001`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 5
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 4
					index: 4
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSSequenceExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 4
						index: 4
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				expressions: Array [
					JSReferenceIdentifier {
						name: "x"
						loc: Object {
							filename: "input.js"
							identifierName: "x"
							end: Object {
								column: 1
								index: 1
								line: 1
							}
							start: Object {
								column: 0
								index: 0
								line: 1
							}
						}
					}
					JSReferenceIdentifier {
						name: "y"
						loc: Object {
							filename: "input.js"
							identifierName: "y"
							end: Object {
								column: 4
								index: 4
								line: 1
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
