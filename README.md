# yew-parceljs

## Get starting

Follow https://yew.rs/docs/getting-started/project-setup to setup the components for `yew`

```bash
$ npm run build
$ npm start
```

Access to [`http://localhost:1234`](http://localhost:1234)

## Problems

- Production build with Wasm file is an open issue. The issue is tracked at https://github.com/parcel-bundler/parcel/issues/1411
  - But we can try copying statics assets like https://github.com/jvidalv/parcel-reporter-multiple-static-file-copier, we haven't try that :|