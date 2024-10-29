import axios, { AxiosInstance } from "axios";
import { HttpAdpater } from "./Http.adapters";

interface Options {
  baseUrl: string;
  paramas: Record<string, string>;
}

export class AxiosAdapter implements HttpAdpater {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.paramas,
    });
  }

  async get<T>(url: string, options?: Record<any, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);

      return data;
    } catch (error) {
      throw new Error(`Error fetching get url: ${url}`);
    }
  }

  async getVideos<T>(url: string, options?: Record<any, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching get url: ${url}`);    }
  }
}
