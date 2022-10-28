/* eslint-disable @typescript-eslint/no-explicit-any */
class localCache {
  setCache(key: string, value: any) {
    value = JSON.stringify(value);
    window.localStorage.setItem(key, value);
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key);
  }

  getCache(key: string) {
    let value = window.localStorage.getItem(key);
    if (value) value = JSON.parse(value);
    return value;
  }
}

export default new localCache();
