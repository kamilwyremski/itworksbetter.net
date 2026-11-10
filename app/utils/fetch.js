/* global FastBoot */

export default function fetchData(url, fastbootService) {
  if (fastbootService.isFastBoot) {
    const { protocol, host } = fastbootService.request;
    const { URL } = FastBoot.require('url');
    return FastBoot.require('node-fetch')(
      new URL(url, `${protocol}//${host}`).href,
    );
  }

  if (typeof globalThis.fetch === 'function') {
    return globalThis.fetch(url);
  }

  throw new Error('Fetch API is unavailable');
}
