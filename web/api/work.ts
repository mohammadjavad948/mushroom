import {api} from './base';
import {headers} from './auth';
import {Work} from '../types';
import {AxiosResponse} from 'axios';

export function getWork(id: number) {
  return api.get<Work, AxiosResponse<Work>>('/work/' + id, {
    headers: headers(),
  });
}

export function createWork(data) {
  return api.post<Work, AxiosResponse<Work>>('/work', data, {
    headers: headers(),
  });
}

export function updateWork(id: number, data: any) {
  return api.patch<Work, AxiosResponse<Work>>('/work/' + id, data, {
    headers: headers(),
  });
}

export function removeWork(id: number) {
  return api.delete<Work, AxiosResponse<Work>>('/work/' + id, {
    headers: headers(),
  });
}
