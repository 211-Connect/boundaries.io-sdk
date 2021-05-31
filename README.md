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

#### Client

Client constructor takes an object with the following properties
| Property | Type | Description |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. API key from [Rapid API](https://rapidapi.com/VanitySoft/api/boundaries-io-1) |
| `apiHost`| `string` | **Optional**. This can be ignored in most cases, however it is exposed in case the RapidAPI host changes prior to us being able to update this package |
| `baseUrl`| `string` | **Optional**. This can be ignored in most cases, however it is exposed in case the RapidAPI base url changes prior to us being able to update this package

#### queryByZipCodes(zipCodes, options)

| Parameter  | Type                | Description                                                                 |
| :--------- | :------------------ | :-------------------------------------------------------------------------- |
| `zipCodes` | `string` or `array` | **Required**. A comma delimited list of zip codes, or an array of zip codes |
| `options`  | `object`            | **Optional**. See table below                                               |

| Property      | Type      | Description   |
| :------------ | :-------- | :------------ |
| `city`        | `string`  | **Optional**. |
| `state`       | `string`  | **Optional**. |
| `county`      | `string`  | **Optional**. |
| `showCenter`  | `boolean` | **Optional**. |
| `combine`     | `boolean` | **Optional**. |
| `showDetails` | `boolean` | **Optional**. |
| `and`         | `boolean` | **Optional**. |

#### queryCountyByLatLon(lat, lon)

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `lat`     | `number` | **Required**. Latitude  |
| `lon`     | `number` | **Required**. Longitude |

#### queryCountyByName(countyName, stateAbbrv)

| Parameter    | Type     | Description                      |
| :----------- | :------- | :------------------------------- |
| `countyName` | `string` | **Required**. County name        |
| `stateAbbrv` | `string` | **Required**. State abbreviation |

#### queryPlaceByName(placeName, stateAbbrv)

| Parameter    | Type     | Description                      |
| :----------- | :------- | :------------------------------- |
| `placeName`  | `string` | **Required**. Place name         |
| `stateAbbrv` | `string` | **Required**. State abbreviation |

#### queryPlaceByLatLon(lat, lon)

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `lat`     | `number` | **Required**. Latitude  |
| `lon`     | `number` | **Required**. Longitude |

## Feedback

If you have any feedback, please open an issue on our [repo](https://github.com/211-Connect/boundaries.io-sdk/issues).

## Authors

- [@devcshort](https://github.com/devcshort)
- [@cskyleryoung](https://github.com/cskyleryoung)

## License

[MIT](https://choosealicense.com/licenses/mit/)
