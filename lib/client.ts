import fetch, { RequestInfo, RequestInit } from 'node-fetch';
import { URLSearchParams } from 'url';

import { BASE_URL, HOST } from './constants';

type Options = {
  apiKey: string;
  apiHost?: string;
  baseUrl?: string;
};

type zipCodeBoundaryOptions = {
  city?: string;
  state?: string;
  showCenter?: boolean;
  combine?: boolean;
  showDetails?: boolean;
  and?: boolean;
  county?: string;
};

export class Client {
  options: Options;

  constructor({ apiKey, apiHost = HOST, baseUrl = BASE_URL }: Options) {
    this.options = {
      apiKey,
      apiHost,
      baseUrl,
    };
  }

  private fetch(url: RequestInfo, options?: RequestInit) {
    return fetch(`${this.options.baseUrl}${url}`, {
      ...options,
      headers: {
        ...options?.headers,
        'x-rapidapi-key': this.options.apiKey,
        'x-rapidapi-host': this.options.apiHost || HOST,
        useQueryString: 'true',
      },
    });
  }

  async queryByZipCodes(
    zipCodes: string | Array<string>,
    opts?: zipCodeBoundaryOptions
  ) {
    if (zipCodes instanceof Array) {
      zipCodes = zipCodes.join(',');
    }

    const queryParams = new URLSearchParams();
    queryParams.append('zipcode', zipCodes);

    if (opts != null) {
      if (opts.combine != null) {
        queryParams.append('combine', String(opts.combine));
      }

      if (opts.and != null) {
        queryParams.append('and', String(opts.and));
      }

      if (opts.showCenter != null) {
        queryParams.append('showCenter', String(opts.showCenter));
      }

      if (opts.showDetails != null) {
        queryParams.append('city', String(opts.showDetails));
      }

      if (opts.city) {
        queryParams.append('city', opts.city);
      }

      if (opts.county) {
        queryParams.append('county', opts.county);
      }

      if (opts.state) {
        queryParams.append('state', opts.state);
      }
    }

    const data = await this.fetch(
      `/rest/v1/public/boundary/zipcode?${queryParams.toString()}`
    );

    const json = await data.json();

    return json;
  }

  async queryCountyByLatLon(lat: number, lon: number) {
    const queryParams = new URLSearchParams();
    queryParams.append('latitude', lat.toString());
    queryParams.append('longitude', lon.toString());

    const data = await this.fetch(
      `/reaperfire/rest/v1/public/boundary/county/within?${queryParams.toString()}`
    );

    const json = await data.json();

    return json;
  }

  async queryCountyByName(countyName: string, stateAbbrv: string) {
    const data = await this.fetch(
      `/reaperfire/rest/v1/public/boundary/county/${countyName.toLowerCase()}/state/${stateAbbrv.toLowerCase()}`
    );

    const json = await data.json();

    return json;
  }

  async queryPlaceByName(placeName: string, stateAbbrv: string) {
    const data = await this.fetch(
      `/reaperfire/rest/v1/public/boundary/place/${encodeURIComponent(
        placeName.toLowerCase()
      )}/state/${stateAbbrv.toLowerCase()}`
    );

    const json = await data.json();

    return json;
  }

  async queryPlaceByLatLon(lat: number, lon: number) {
    const queryParams = new URLSearchParams();
    queryParams.append('latitude', lat.toString());
    queryParams.append('longitude', lon.toString());

    const data = await this.fetch(
      `/reaperfire/rest/v1/public/boundary/place/within?${queryParams.toString()}`
    );

    const json = await data.json();

    return json;
  }
}

export default Client;
