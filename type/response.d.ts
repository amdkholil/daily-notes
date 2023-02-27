declare interface IResponse<T> {
  data: T;
  status: number;
  statusText: string;
}
