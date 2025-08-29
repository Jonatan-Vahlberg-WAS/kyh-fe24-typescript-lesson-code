/* eslint-disable @typescript-eslint/no-explicit-any */
type LSKey = "@school/courses" | "@school/students";

class LocalStorageService {
  static setItem(key: LSKey, value: any) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  static getItem(key: LSKey, fallbackValue?: any): any {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return fallbackValue || null;
  }
}

export default LocalStorageService;
