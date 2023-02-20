import dotenv from 'dotenv';

import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect } from 'react'

// Load environment variables
process.env.NODE_ENV === 'production'?
  dotenv.config({ path: '.env.production' }):
  dotenv.config({ path: '.env.development' })

const baseAPI = axios.create({
    baseURL: process.env.POKE_API
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {

    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsfetching] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        baseAPI.get(url, options)
            .then(response => {
                setData(response.data)
            })
            .catch( err => {
                setError(err)
            })
            .finally( () => {
                setIsfetching(false)
            })
    }, [])

    return { data, error, isFetching }
}