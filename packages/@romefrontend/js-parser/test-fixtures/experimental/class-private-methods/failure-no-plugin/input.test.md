# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-methods > failure-no-plugin`

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
			index: 34
			line: 5
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "input.js"
					identifierName: "Foo"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 33
					line: 4
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 33
						line: 4
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "p"
								loc: Object {
									filename: "input.js"
									identifierName: "p"
									end: Object {
										column: 4
										index: 16
										line: 2
									}
									start: Object {
										column: 3
										index: 15
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
						value: JSReferenceIdentifier {
							name: "x"
							loc: Object {
								filename: "input.js"
								identifierName: "x"
								end: Object {
									column: 8
									index: 20
									line: 2
								}
								start: Object {
									column: 7
									index: 19
									line: 2
								}
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 8
								index: 20
								line: 2
							}
							start: Object {
								column: 2
								index: 14
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 14
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
					}
					JSClassPrivateMethod {
						kind: "method"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "m"
								loc: Object {
									filename: "input.js"
									identifierName: "m"
									end: Object {
										column: 4
										index: 25
										line: 3
									}
									start: Object {
										column: 3
										index: 24
										line: 3
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 25
									line: 3
								}
								start: Object {
									column: 2
									index: 23
									line: 3
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 10
								index: 31
								line: 3
							}
							start: Object {
								column: 2
								index: 23
								line: 3
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 10
									index: 31
									line: 3
								}
								start: Object {
									column: 8
									index: 29
									line: 3
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 7
									index: 28
									line: 3
								}
								start: Object {
									column: 5
									index: 26
									line: 3
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 23
								line: 3
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 25
									line: 3
								}
								start: Object {
									column: 2
									index: 23
									line: 3
								}
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
