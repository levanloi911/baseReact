import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export default class ApiGateWayAxios {
  public _endpoint: string
  public _timeOut: number = 5000
  public cookies: any
  public params: unknown;

  constructor(settings: IRemoteConfig) {
      this._endpoint = 'https://6100dd49bca46600171cfa19.mockapi.io/laptop24h'
  }

  callApiHandle = (resource: IResource, method: Method, body?: any, bodyType?: string) => {
      const { path, type } = resource;
      const endpoint = this._endpoint;
      const url = `${endpoint}${path}`;

      const config: AxiosRequestConfig = {
          url,
          method,
          data: body,
          params: this.params,
          withCredentials: true,
          timeout: this._timeOut,
          headers: this.headerConfig(type)
      }

      return axios(config)
          .then(res => this.handleSuccess(res.data))
          .catch(err => this.handleError(err.response.data))
  }

  getRequest(resource: IResource) {
      return this.callApiHandle(resource, API_METHOD.GET_METHOD)
  }

  postRequest(resource: IResource, body?: any) {
      return this.callApiHandle(resource, API_METHOD.POST_METHOD, body)
  }

  putRequest(resource: IResource, body?: any) {
      return this.callApiHandle(resource, API_METHOD.PUT_METHOD, body)
  }

  patchRequest(resource: IResource, body?: any) {
      return this.callApiHandle(resource, API_METHOD.PATCH_METHOD, body)
  }

  deleteRequest(resource: IResource, body?: any) {
      return this.callApiHandle(resource, API_METHOD.DELETE_METHOD, body)
  }

  handleSuccess(response: AxiosResponse) {
      return response
  }

  handleError(error: any) {
      throw new Error(error.message || error)
  }

  headerConfig(type: string) {
      if (type === "file") {
          return { "Content-Type": "multipart/form-data" }
      }
  }
}

export enum API_METHOD {
    GET_METHOD = "get",
    POST_METHOD = "post",
    PUT_METHOD = "put",
    PATCH_METHOD = "patch",
    DELETE_METHOD = "delete",
  }
  export interface IResource {
    type: string | RESOURCE_TYPE;
    path: string;
  }
  export enum RESOURCE_TYPE {
    ADMIN_TYPE = "admin",
    PUBLIC_TYPE = "public",
    FILE="file",
    FORM_DATA="form data",
  }
  export interface IRemoteConfig {
    endpoint?: string;
    accessToken?: string;
    googleApiKey?: string;
    domain: string,
    clientDomain: string,
    [key: string]: any;
}