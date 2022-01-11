import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { DATABASE_NAME } from 'src/app/const';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    const characters =  await this.storage.get(DATABASE_NAME);
    if (null === characters){
     await this._storage.set(DATABASE_NAME, JSON.stringify([]));
    }
  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string){
    return await this.storage.get(key);
  }

 
}