# radix-tooltip-repro

Reproduction repo for misplaced tooltip in Chrome extension's content script.

## Steps to reproduce

1. Clone the repository and build the extension

```console
git clone git@github.com:yudai-nkt/radix-tooltip-repro.git
cd radix-tooltip-repro
npm ci
npm run build
```

2. Install the extension (this is explained [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) as well)
    - Go to chrome://extensions and eable developer mode in the top-right corner.
    - Click the "Load Unpacked" in the top-left and select the `dist` directory we built in the previous step.

3. Visit https://example.com/, and you will see the misplaced tooltip.

## License

CC BY 4.0
