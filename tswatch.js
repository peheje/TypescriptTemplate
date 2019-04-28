const { watch } = require("fs");
const { exec } = require("child_process");

watch("ts", function (eventType, filename) {
    if (filename.endsWith(".ts")) {
        let cmd = "tsc --out bundle.js ts/index.ts";
        exec(cmd, function (err, stdout, stderr) {
            if (err) {
                console.log(stdout);
            } else {
                console.log("tswatch success");
            }
        });
    }
});