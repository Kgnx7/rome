/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ServerRequest} from "@romefrontend/core";
import {commandCategories} from "../../common/commands";
import {createServerCommand} from "../commands";
import {createUnknownFilePath} from "@romefrontend/path";

export default createServerCommand({
	category: commandCategories.SOURCE_CODE,
	description: "resolve a file",
	usage: "",
	examples: [],
	defineFlags() {
		return {};
	},
	async callback(req: ServerRequest): Promise<string> {
		const {server, reporter} = req;
		const {args} = req.query;
		const {flags} = req.client;
		req.expectArgumentLength(1, 2);

		let origin;
		let relative = "";
		let key;

		if (args.length === 2) {
			origin = flags.cwd.resolveMaybeUrl(args[0]);
			relative = args[1];
			key = 1;
		} else {
			origin = flags.cwd;
			relative = args[0];
			key = 0;
		}

		const query = {
			...req.getResolverOptionsFromFlags(),
			origin,
			source: createUnknownFilePath(relative),
		};

		const resolved = await server.resolver.resolveEntryAssert(
			query,
			{
				location: req.getDiagnosticPointerFromFlags({type: "arg", key}),
			},
		);
		const filename = resolved.ref.real.join();
		reporter.logAll(filename);
		return filename;
	},
});
