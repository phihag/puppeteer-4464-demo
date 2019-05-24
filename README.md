# Demo for puppeteer Issue 4464

This repository reproduces [an issue](https://github.com/GoogleChrome/puppeteer/issues/4464) with puppeteer. To reproduce, run

```sh
git clone https://github.com/phihag/puppeteer-4464-demo.git
cd puppeteer-4464-demo
npm i
./demo.js
```

Alternatively, with docker installed, run

```sh
docker build . -t puppeteer-4464-demo -f Dockerfile && docker run --rm puppeteer-4464-demo
```

## Expected result (occurs with puppeteer 1.15.0 or 1.17.0)

```
<html><head></head><body>_✔_</body></html>
```

## Actual result (puppeteer 1.16.0)

```
<html><head></head><body>_â_</body></html>
AssertionError [ERR_ASSERTION]: false == true
    at /home/phihag/projects/div/puppeteer-4464-demo/demo.js:10:18
    at processTicksAndRejections (internal/process/task_queues.js:86:5)
```
