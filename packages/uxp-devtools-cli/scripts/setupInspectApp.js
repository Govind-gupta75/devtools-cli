/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

function generateDevtoolsAppPacakge() {
    let uxpDevtoolAppDir =  require.resolve("@adobe/uxp-inspect-frontend/package.json");
    uxpDevtoolAppDir = path.dirname(uxpDevtoolAppDir);

    execSync("npm install", {
        cwd: uxpDevtoolAppDir,
        stdio: [ "inherit", "inherit", "inherit" ]
    });
    if(os.arch() === "arm64") {
        execSync("electron-builder --dir --arm64", {
            cwd: uxpDevtoolAppDir,
            stdio: [ "inherit", "inherit", "inherit" ]
        });
    }else {
        execSync("electron-builder --dir --x64", {
            cwd: uxpDevtoolAppDir,
            stdio: [ "inherit", "inherit", "inherit" ]
        });
    }
}

generateDevtoolsAppPacakge();
