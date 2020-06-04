/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { JapaneseCityDto } from '../models/japanese-city-dto';
import { JapaneseCitySelect } from '../models/japanese-city-select';

/**
 * Japanese City Controller
 */
@Injectable({
  providedIn: 'root',
})
class JapaneseCityControllerService extends __BaseService {
  static readonly nameCityUsingGETPath = '/v1/api/city';
  static readonly addCityUsingPOSTPath = '/v1/api/city';
  static readonly updateCityUsingPUTPath = '/v1/api/city';
  static readonly allCitiesUsingGETPath = '/v1/api/city/all';
  static readonly autoCompleteByNameUsingGETPath = '/v1/api/city/auto-complete';
  static readonly getIdAndNameUsingGETPath = '/v1/api/city/select';
  static readonly cityByIdUsingGETPath = '/v1/api/city/{id}';
  static readonly deleteCityUsingDELETEPath = '/v1/api/city/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param name name
   * @return OK
   */
  nameCityUsingGETResponse(name: string): __Observable<__StrictHttpResponse<JapaneseCityDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/city`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JapaneseCityDto>;
      })
    );
  }
  /**
   * @param name name
   * @return OK
   */
  nameCityUsingGET(name: string): __Observable<JapaneseCityDto> {
    return this.nameCityUsingGETResponse(name).pipe(
      __map(_r => _r.body as JapaneseCityDto)
    );
  }

  /**
   * @param japaneseCityDto japaneseCityDto
   * @return Created
   */
  addCityUsingPOSTResponse(japaneseCityDto: JapaneseCityDto): __Observable<__StrictHttpResponse<JapaneseCityDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = japaneseCityDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/api/city`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JapaneseCityDto>;
      })
    );
  }
  /**
   * @param japaneseCityDto japaneseCityDto
   * @return Created
   */
  addCityUsingPOST(japaneseCityDto: JapaneseCityDto): __Observable<JapaneseCityDto> {
    return this.addCityUsingPOSTResponse(japaneseCityDto).pipe(
      __map(_r => _r.body as JapaneseCityDto)
    );
  }

  /**
   * @param japaneseCityDto japaneseCityDto
   * @return OK
   */
  updateCityUsingPUTResponse(japaneseCityDto: JapaneseCityDto): __Observable<__StrictHttpResponse<JapaneseCityDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = japaneseCityDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v1/api/city`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JapaneseCityDto>;
      })
    );
  }
  /**
   * @param japaneseCityDto japaneseCityDto
   * @return OK
   */
  updateCityUsingPUT(japaneseCityDto: JapaneseCityDto): __Observable<JapaneseCityDto> {
    return this.updateCityUsingPUTResponse(japaneseCityDto).pipe(
      __map(_r => _r.body as JapaneseCityDto)
    );
  }

  /**
   * @return OK
   */
  allCitiesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<JapaneseCityDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/city/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<JapaneseCityDto>>;
      })
    );
  }
  /**
   * @return OK
   */
  allCitiesUsingGET(): __Observable<Array<JapaneseCityDto>> {
    return this.allCitiesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<JapaneseCityDto>)
    );
  }

  /**
   * @param name name
   * @return OK
   */
  autoCompleteByNameUsingGETResponse(name: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/city/auto-complete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param name name
   * @return OK
   */
  autoCompleteByNameUsingGET(name: string): __Observable<Array<string>> {
    return this.autoCompleteByNameUsingGETResponse(name).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return OK
   */
  getIdAndNameUsingGETResponse(): __Observable<__StrictHttpResponse<Array<JapaneseCitySelect>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/city/select`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<JapaneseCitySelect>>;
      })
    );
  }
  /**
   * @return OK
   */
  getIdAndNameUsingGET(): __Observable<Array<JapaneseCitySelect>> {
    return this.getIdAndNameUsingGETResponse().pipe(
      __map(_r => _r.body as Array<JapaneseCitySelect>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  cityByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<JapaneseCityDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/city/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JapaneseCityDto>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  cityByIdUsingGET(id: number): __Observable<JapaneseCityDto> {
    return this.cityByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as JapaneseCityDto)
    );
  }

  /**
   * @param id id
   */
  deleteCityUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/api/city/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteCityUsingDELETE(id: number): __Observable<null> {
    return this.deleteCityUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module JapaneseCityControllerService {
}

export { JapaneseCityControllerService }
