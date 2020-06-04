/* tslint:disable */
import { AttractionDto } from './attraction-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageAttractionDto {
  content?: Array<AttractionDto>;
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
