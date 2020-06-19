import * as pkg from '../package.json';
import {
    Extractor, ISearchOptions,
    MediaCollection,
    MediaProvider,
    MediaSource,
    Movie,
    SearchResult,
    SOURCE_TYPE, TvEpisode, TvSeason, TvShow
} from '@nwplay/core';
import TestData from "./testData.json";

export class StarterPlugin extends MediaProvider {
    name = pkg.pluginName;
    version = pkg.version;
    id = pkg.id;
    description = pkg.description;

    constructor() {
        super();
    }

    public async feature(limit?: number, isHome?: boolean): Promise<SearchResult[]> {
        return [];
    }

    public async home(isHome?: boolean): Promise<MediaCollection[]> {
        return [];
    }

    public async search(options: ISearchOptions): Promise<SearchResult[]> {
        return TestData.filter(e => e.title.toLowerCase().includes(options.query.toLowerCase())).map((d) => new StarterSearchResult(this, d));
    }

    get(id: string): Promise<TvShow | Movie | TvSeason<any> | TvEpisode<any>> {
        return null;
    }

    init(): Promise<void> {
        return Promise.resolve(undefined);
    }

    toolbar(): Promise<any[]> {
        return Promise.resolve([]);
    }
}

class StarterSearchResult extends SearchResult {
    constructor(provider: StarterPlugin, private data: any) {
        super(provider as any);
        this.id = `movie/${encodeURIComponent(this.data.title)}`;
        this.title = this.data.title;
        this.image = this.data.thumb;
    }
}

class StarterMovie extends Movie {
    constructor(provider: StarterPlugin, private data: any) {
        super(provider as any);
        this.id = `movie/${encodeURIComponent(this.data.title)}`;
        this.title = this.data.title;
        this.poster = this.data.thumb;
        this.overview = this.data.description;
    }

    async play(resolvers: Extractor[] | undefined, languages: string[] | undefined): Promise<MediaSource> {
        return {
            source: this.data.source,
            type: SOURCE_TYPE.HTTP
        };
    }
}
