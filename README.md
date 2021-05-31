# Boundaries.io SDK

boundaries.io is an easy to use HTTP api that allows you to retrieve geography polygons in GeoJSON format. This package is not affiliated with boundaries.io and is an ongoing project to bring all endpoints from boundaries.io in to a simple sdk.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Installation

Install Boundaries.io SDK with npm

```bash
  npm install --save @211-connect/boundaries.io-sdk
```

## Usage/Examples

```javascript
var Client = require('@211-connect/boundaries.io-sdk');

var boundaries = new Client({ apiKey: 'YOUR-BOUNDARIES.IO-API-KEY' });

async function getZipCodes() {
  // Pass in an array of zip codes
  await boundaries.queryByZipCodes(['98908', '98903', '98902'], {
    combine: true,
  });

  // Alternatively you can pass in a comma delimited list of zip codes
  await boundaries.queryByZipCodes('98908,98903,98902', { combine: true });
}
```

## API Reference

#### Query by Zip Codes

```javascript
queryByZipCodes(zipCodes, options);
```

| Parameter  | Type                | Description                                                                 |
| :--------- | :------------------ | :-------------------------------------------------------------------------- |
| `zipCodes` | `string` or `array` | **Required**. A comma delimited list of zip codes, or an array of zip codes |
| `options`  | `object`            | **Optional**. See table below                                               |

| Property     | Type      | Description   |
| :----------- | :-------- | :------------ |
| `city`       | `string`  | **Optional**. |
| `state`      | `string`  | **Optional**. |
| `showCenter` | `boolean` | **Optional**. |
| `combine`    | `boolean` | **Optional**. |

## Feedback

If you have any feedback, please open an issue on our [repo](https://github.com/211-Connect/boundaries.io-sdk/issues).

## Authors

- [@devcshort](https://github.com/devcshort)
- [@cskyleryoung](https://github.com/cskyleryoung)

## License

[MIT](https://choosealicense.com/licenses/mit/)
