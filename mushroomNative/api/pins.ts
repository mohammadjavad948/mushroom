import {api} from './base';
import {headers} from './auth';
import {Pin} from '../types';
import {AxiosResponse} from 'axios';
import {useMutation} from 'react-query';

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

export const usePinMutate = () => {
  return useMutation((data: {count: number; workId: number}) => {
    return data.count === 0 ? pin(data.workId) : unpin(data.workId);
  });
};
