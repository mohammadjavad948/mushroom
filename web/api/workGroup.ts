import {api} from './base';
import {headers} from './auth';
import {WorkGroup} from '../types';
import {AxiosResponse} from 'axios';

export function allWorkGroups() {
  return api.get<WorkGroup[], AxiosResponse<WorkGroup[]>>('/work-group', {
    headers: headers(),
  });
}

export function getWorkGroup(id: number) {
  return api.get<WorkGroup, AxiosResponse<WorkGroup>>('/work-group/' + id, {
    headers: headers(),
  });
}

export function createWorkGroup(data) {
  return api.post<WorkGroup, AxiosResponse<WorkGroup>>('/work-group', data, {
    headers: headers(),
  });
}

export function updateWorkGroup(id: number, data: any) {
  return api.patch<WorkGroup, AxiosResponse<WorkGroup>>(
    '/work-group/' + id,
    data,
    {
      headers: headers(),
    },
  );
}

export function removeWorkGroup(id: number) {
  return api.delete<WorkGroup, AxiosResponse<WorkGroup>>('/work-group/' + id, {
    headers: headers(),
  });
}
