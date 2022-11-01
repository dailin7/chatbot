import { ICourse } from "./ICourse";

export interface ISearchResponse {
  data: {
    totalItems: number;
    currentItemCount: number;
    page: number;
    totalPages: number;
    refineQueryTemplate: string;
    nextPageLink: string | null;
    prevPageLink: string | null;
    activeSort: string | null;
    sort: any;
    filters: any;
    activeFilters: any;
    courses: ICourse[];
  };
}
