import { MenuItem } from 'primeng/api';

export interface Title {
  primaryMessage: string;
  secondaryMessage: string;
  breadcrumbs: MenuItem[];
  isVisibleButton: boolean;
  textButton?: string;
}