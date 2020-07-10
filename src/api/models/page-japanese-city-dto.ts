/* tslint:disable */
import { JapaneseCityDto } from './japanese-city-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageJapaneseCityDto {
  content?: Array<JapaneseCityDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
