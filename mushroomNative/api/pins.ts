import {api} from './base';
import {headers} from './auth';
import {Pin} from '../types';
import {AxiosResponse} from 'axios';

export function allPins(groupId: number) {
  return api.get<Pin[], AxiosResponse<Pin[]>>(`/pins/${groupId}`, {
    headers: headers(),
  });
}

export function pin(workId: number) {
  return api.post(
    `/pins/${workId}`,
    {},
    {
      headers: headers(),
    },
  );
}

export function unpin(workId: number) {
  return api.delete(`/pins/${workId}`, {
    headers: headers(),
  });
}
