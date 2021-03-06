/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {test} from "rome";
import {testLint} from "../../utils/testing";
import {dedent} from "@romefrontend/string-utils";

test(
	"no delete vars",
	async (t) => {
		await testLint(
			t,
			{
				invalid: [
					dedent`
						const foo = "test";
						delete foo;
					`,
				],
				valid: [
					dedent`
						const arr = [['a','b','c'], [1, 2, 3]];
						delete arr[0][2];
					`,
					dedent`
						const obj = {a: {b: {c: 123}}};
						delete obj.a.b.c;
					`,
					dedent`
						const foo = new Set([1,2,3]);
						foo.delete(1);
					`,
				],
			},
			{category: "lint/js/noDeleteVars", sourceType: "script"},
		);
	},
);
