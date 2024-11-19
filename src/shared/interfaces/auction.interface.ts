interface ICheckAuction {
  urls: string[];
  criteria: number[];
}

interface ITableAuction {
  name: string;
  cardValue: string;
  taskFileValue: string;
  contractProjectFileValue: string;
  isOk: boolean;
}

interface IResultOneAuction {
  url: string;
  isPublished: boolean;
  reason: string[];
  table: ITableAuction[];
  id: number;
}

interface IResultGroupAuction {
  id: number;
  results: IResultOneAuction[];
  resultsCount: number;
  succeedResultsCount: number;
}

export type { ICheckAuction, IResultGroupAuction,ITableAuction,IResultOneAuction };
