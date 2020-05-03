import {
    MediaCollection,
    MediaProvider,
    SearchResult
} from '@nwplay/core';

export class StarterMediaProvider extends MediaProvider {
    id = 'B83D80F8-3CF4-41B7-BAC1-D11432D47F44';
    name = 'nwplay-plugin-starter';
    name_translations = {
        de: 'nwplay-plugin-starter',
        en: 'nwplay-plugin-starter',
    };
    version = '0.0.1';

    constructor() {
        super();
    }

    async get(id: string) {
        return null
    }

    async feature(limit?: number, isHome?: boolean): Promise<SearchResult[]> {
        return [];
    }

    async home(isHome?: boolean): Promise<MediaCollection[]> {
        return [];
    }

    async init() {

    }

    async search(q: string, offset: number = 0, limit: number = 10) {
        return [];
    }

    toolbar(): Promise<any[]> {
        return null;
    }
}

