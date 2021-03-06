/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import packageJson from "../../../../package.json";
import os = require("os");

import {TEMP_PATH, createAbsoluteFilePath} from "@romefrontend/path";

export const CHILD_ARGS = ["--max-old-space-size=8192"];

// @ts-ignore: this will be wrong if we weren't the entry node script
export const BIN = createAbsoluteFilePath(process.mainModule.filename);
export const MAP = BIN.addExtension(".map");

const MEGABYTE = 10_000;

export const MAX_MASTER_BYTES_BEFORE_WORKERS = 0.5 * MEGABYTE;

export const MAX_WORKER_BYTES_BEFORE_ADD = 1 * MEGABYTE;

const CPU_COUNT: number = os.cpus().length;
export const MAX_WORKER_COUNT = Math.min(CPU_COUNT, 4);

export let VERSION = String(packageJson.version);

// Vendor Rome and Trunk Rome could have the same version number if there was no release in between
// Ensure they are properly namespaced to avoid having daemon socket conflicts
if (process.env.ROME_DEV === "1") {
	VERSION += "-dev";
}

export const SOCKET_PATH = TEMP_PATH.append(`rome-${VERSION}.sock`);

export const CLI_SOCKET_PATH = TEMP_PATH.append(`rome-wait-${VERSION}.sock`);

export const MOCKS_FOLDER_NAME = "__rmocks__";
