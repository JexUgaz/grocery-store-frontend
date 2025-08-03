import { ApiResponse } from "@/types/api/ApiResponse";
import { IApiConnection, IApiRequestParams } from "./IApiConnection";
import { AppException, UnknownException } from "@/config/exceptions";
import { Config } from "@/config/Config";
import logger from "@/config/helpers/logger";

export abstract class GroceryStoreApi implements IApiConnection {
  private readonly backendApiBase: string = Config.backendApiUrl;
  abstract apiBase: string;

  async request<T>({
    body,
    endpoint,
    method = "GET",
    headers = {},
    queryParams,
  }: IApiRequestParams): Promise<T | null> {
    try {
      const queryString = queryParams
        ? "?" + new URLSearchParams(queryParams).toString()
        : "";

      const url = `${this.backendApiBase}${this.apiBase}${endpoint}${queryString}`;

      const allHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        ...headers,
      };

      const res = await fetch(url, {
        credentials: "include",
        method: method,
        headers: allHeaders,
        body: body ? JSON.stringify(body) : undefined,
      });

      const response = (await res.json()) as ApiResponse<T>;

      if (response.status === "ERROR") {
        const error = response.error!;
        throw new AppException(
          error.type,
          error.details,
          error.code,
          response.message
        );
      }

      return response.data!;
    } catch (e: unknown) {
      let error: AppException;

      if (e instanceof AppException) {
        error = e;
      } else if (e instanceof Error) {
        error = new UnknownException(e.message);
      } else {
        error = new UnknownException("Unknown error");
      }

      logger.error(error);
      return null;
    }
  }

  async apiRequest<T>({
    body,
    endpoint,
    method = "GET",
    headers = {},
    queryParams,
  }: IApiRequestParams): Promise<ApiResponse<T | null>> {
    try {
      const queryString = queryParams
        ? "?" + new URLSearchParams(queryParams).toString()
        : "";

      const url = `${this.backendApiBase}${this.apiBase}${endpoint}${queryString}`;

      const allHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        ...headers,
      };

      const res = await fetch(url, {
        credentials: "include",
        method: method,
        headers: allHeaders,
        body: body ? JSON.stringify(body) : undefined,
      });

      return (await res.json()) as ApiResponse<T>;
    } catch (e: unknown) {
      let error: AppException;

      if (e instanceof AppException) {
        error = e;
      } else if (e instanceof Error) {
        error = new UnknownException(e.message);
      } else {
        error = new UnknownException("Unknown error");
      }

      logger.error(error);
      return {
        message: error.message,
        status: "ERROR",
        error: {
          code: error.errorCode,
          details: error.details,
          type: error.type,
        },
      };
    }
  }
}
