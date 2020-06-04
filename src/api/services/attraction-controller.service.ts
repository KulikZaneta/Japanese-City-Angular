/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageAttractionDto } from '../models/page-attraction-dto';
import { AttractionDto } from '../models/attraction-dto';

/**
 * Attraction Controller
 */
@Injectable({
  providedIn: 'root',
})
class AttractionControllerService extends __BaseService {
  static readonly getAttractionPageUsingGETPath = '/v1/api/attractions';
  static readonly saveAttractionUsingPOSTPath = '/v1/api/attractions';
  static readonly updateAttractionUsingPUTPath = '/v1/api/attractions';
  static readonly getAttractionByIdUsingGETPath = '/v1/api/attractions/{id}';
  static readonly deleteAttractionUsingDELETEPath = '/v1/api/attractions/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AttractionControllerService.GetAttractionPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  getAttractionPageUsingGETResponse(params: AttractionControllerService.GetAttractionPageUsingGETParams): __Observable<__StrictHttpResponse<PageAttractionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/attractions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageAttractionDto>;
      })
    );
  }
  /**
   * @param params The `AttractionControllerService.GetAttractionPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  getAttractionPageUsingGET(params: AttractionControllerService.GetAttractionPageUsingGETParams): __Observable<PageAttractionDto> {
    return this.getAttractionPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageAttractionDto)
    );
  }

  /**
   * @param attractionDto attractionDto
   * @return OK
   */
  saveAttractionUsingPOSTResponse(attractionDto: AttractionDto): __Observable<__StrictHttpResponse<AttractionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attractionDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/api/attractions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttractionDto>;
      })
    );
  }
  /**
   * @param attractionDto attractionDto
   * @return OK
   */
  saveAttractionUsingPOST(attractionDto: AttractionDto): __Observable<AttractionDto> {
    return this.saveAttractionUsingPOSTResponse(attractionDto).pipe(
      __map(_r => _r.body as AttractionDto)
    );
  }

  /**
   * @param attractionDto attractionDto
   * @return OK
   */
  updateAttractionUsingPUTResponse(attractionDto: AttractionDto): __Observable<__StrictHttpResponse<AttractionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attractionDto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v1/api/attractions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttractionDto>;
      })
    );
  }
  /**
   * @param attractionDto attractionDto
   * @return OK
   */
  updateAttractionUsingPUT(attractionDto: AttractionDto): __Observable<AttractionDto> {
    return this.updateAttractionUsingPUTResponse(attractionDto).pipe(
      __map(_r => _r.body as AttractionDto)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getAttractionByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AttractionDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/api/attractions/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttractionDto>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getAttractionByIdUsingGET(id: number): __Observable<AttractionDto> {
    return this.getAttractionByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as AttractionDto)
    );
  }

  /**
   * @param id id
   */
  deleteAttractionUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/api/attractions/${id}`,
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
  deleteAttractionUsingDELETE(id: number): __Observable<null> {
    return this.deleteAttractionUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AttractionControllerService {

  /**
   * Parameters for getAttractionPageUsingGET
   */
  export interface GetAttractionPageUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
  }
}

export { AttractionControllerService }
