/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export type JSAwaitExpression = NodeBaseWithComments & {
	type: "JSAwaitExpression";
	argument?: AnyJSExpression;
};

export const jsAwaitExpression = createBuilder<JSAwaitExpression>(
	"JSAwaitExpression",
	{
		bindingKeys: {},
		visitorKeys: {
			argument: true,
		},
	},
);
