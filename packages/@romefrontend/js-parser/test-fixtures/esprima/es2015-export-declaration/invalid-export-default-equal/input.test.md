# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > invalid-export-default-equal`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 20
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unknown start to an export default declaration"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 15
					index: 15
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 16
					index: 16
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 19
					index: 19
					line: 1
				}
				start: Object {
					column: 17
					index: 17
					line: 1
				}
			}
			expression: JSNumericLiteral {
				value: 42
				format: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 19
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:15 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an export default declaration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
