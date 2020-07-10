import { AttractionDto } from './../../../../api/models/attraction-dto';
export namespace Attraction {
  export class PageAction {
    static readonly type = '[Attraction] Page';
    constructor(public page: number, public size: number) { }
  }

  export class FetchIdAction {
    static readonly type = '[Attraction] FetchId';
    constructor(public id: number) { }
  }

  export class AddAction {
    static readonly type = '[Attraction] Add';
    constructor(public attractionDto: AttractionDto) { }
  }

  export class UpdateAction {
    static readonly type = '[Attraction] Update';
    constructor(public attractionDto: AttractionDto) { }
  }

  export class DeleteAction {
    static readonly type = '[Attraction] Delete';
    constructor(public id: number) { }
  }
}


