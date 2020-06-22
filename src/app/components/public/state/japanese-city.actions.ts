import { JapaneseCityDto } from 'src/api/models';

export namespace JapaneseCity {
  export class FetchDetailsAction {
    static readonly type = '[JapaneseCity] FetchDetails';
    constructor(public id: number) { }
  }

  export class FetchNameAction {
    static readonly type = '[JapaneseCity] FetchName';
    constructor(public name: string) { }
  }

  export class AddAction {
    static readonly type = '[JapaneseCity] Add';
    constructor(public japaneseCityDto: JapaneseCityDto) { }
  }

  export class EditAction {
    static readonly type = '[JapaneseCity] Edit';
    constructor(public japaneseCityDto: JapaneseCityDto) { }
  }

  export class DeleteAction {
    static readonly type = '[JapaneseCity] Delete';
    constructor(public id: number) { }
  }
}

export class AutoCompleteAction {
  static readonly type = '[JapaneseCity] AutoComplete'
  constructor(public autoComplete: string) { }
}

export class IdAndNameCityAction {
  static readonly type = '[JapaneseCity] IdAndNameCity'
  constructor() { }
}

export class PageAction {
  static readonly type = '[JapaneseCity] PageAction'
  constructor(public page: number, public size: number) { }
}


