import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'

export function getClients(query) {
  return request({
    url: '/api/app/client',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}

export function createClient(data) {
  return request({
    url: '/api/app/client',
    method: 'post',
    data
  })
}

export function updateClient(data) {
  return request({
    url: `/api/app/client/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteClient(id) {
  return request({
    url: `/api/app/client/${id}`,
    method: 'delete'
  })
}

export function getClient(id) {
  return request({
    url: `/api/app/client/${id}`,
    method: 'get'
  })
}