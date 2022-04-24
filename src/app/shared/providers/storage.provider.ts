import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageProvider {
  constructor() {}

  async get<T>(key: string): Promise<T> {
    return await JSON.parse(localStorage.getItem(key));
  }

  async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
