import INavigationItem from "@/src/shared/types/navigation";

export interface IFooterItem extends INavigationItem {
  target?: string;
  rel?: string;
}
