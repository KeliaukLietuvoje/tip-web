import { HistoryTypes, RolesTypes, Season, StatusTypes, TableItemWidth } from './constants';

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: RolesTypes;
  phone?: string;
  isAgreedToTermsOfService?: boolean;
  personalCode?: string;
  profiles?: Profile[];
}

export interface FormHistory {
  type: HistoryTypes;
  comment: string;
  createdBy: User;
  createdAt: Date;
}

export interface Category {
  id?: number;
  name: string;
  parent?: Category;
  children?: Category[];
}

export interface Info {
  id?: number;
  name: string;
}

export type ProfileId = 'freelancer' | 'expert' | string;

export interface Profile {
  id: ProfileId;
  name: string;
  freelancer: boolean;
  email?: string;
  role: RolesTypes;
}

export interface AuthState {
  loggedIn: boolean;
}

export type Column = {
  label: string;
  mobileOrder?: number;
  desktopOrder?: number;
  show: boolean;
  visible?: boolean;
  width?: TableItemWidth;
};

export type Columns = {
  [key: string]: Column;
};

export interface Sources {
  id?: string;
  name: string;
  createdBy?: User;
  createdAt: string;
}

export type FileProps = {
  url: string;
  name: string;
  size: number;
};

export type ResponseFileProps = {
  url: string;
  filename: string;
  size: number;
};

export interface ListResultProps<T> {
  rows?: T[];
  totalPages?: number;
  error?: string;
}

export type HandleChangeType = (name: string, value: any) => void;
export type ChildrenType = string | JSX.Element | JSX.Element[] | any;

export interface DeleteInfoProps {
  deleteButtonText: string;
  deleteDescriptionFirstPart: string;
  deleteDescriptionSecondPart: string;
  deleteTitle: string;
  deleteName: string;
  deleteFunction?: () => void;
}

export interface UserFilters {
  firstName?: string;
  lastName?: string;
}

export interface FormFiltersProps {
  tenant?: string | number;
  createdAt?: { $gte?: Date; $lt?: Date };
  status?: { $in: StatusTypes[] };
  code?: string;
  nameLT?: string;
}

export interface FormFilters {
  createdFrom?: string;
  code?: string;
  status?: { id: StatusTypes; label: string }[];
  nameLT?: string;
  createdTo?: string;
  tenant?: Tenant;
  createdBy?: User;
}

export interface Tenant {
  id?: string;
  code: string;
  name: string;
  address?: string;
  email: string;
  phone: string;
  error?: string;
  apiKey?: string;
  [key: string]: any;
}

export interface Form {
  id: number;
  visitDuration: VisitDuration;
  tenant?: Tenant;
  visitInfo: Info;
  isActive?: boolean;
  canEdit: boolean;
  attendanceTime: Info;
  attendanceInfo: Info;
  seasons: Season[];
  description: string;
  name: string;
  descriptionLT: string;
  nameLT: string;
  urlLT: string;
  audioLT: string;
  url: string;
  audio: string;
  additionalInfos: Info[];
  status: string;
  geom: FeatureCollection;
  isPaid: boolean;
  isPublic: boolean;
  isAdaptedForForeigners: boolean;
  categories: Category[];
  subCategories: Category[];
  createdBy?: User;
  createdAt?: Date;
  photos?: any[];
}

export interface VisitDuration {
  from: string;
  to: string;
  isAllDay: boolean;
}

export type FeatureCollection = {
  type: 'FeatureCollection';
  features: Feature[];
};

export type Feature = {
  type: 'Feature';
  geometry: Geometry;
  properties?: GenericObject;
};
export type Geometry = {
  type: string;
  coordinates: CoordinatesTypes;
};
export type CoordinatesPoint = number[];
export type CoordinatesMultiPoint = CoordinatesPoint[];
export type CoordinatesLineString = CoordinatesPoint[];
export type CoordinatesMultiLineString = CoordinatesLineString[];
export type CoordinatesPolygon = CoordinatesLineString[];
export type CoordinatesMultiPolygon = CoordinatesPolygon[];

export type CoordinatesTypes =
  | CoordinatesPoint
  | CoordinatesLineString
  | CoordinatesPolygon
  | CoordinatesMultiPoint
  | CoordinatesMultiLineString
  | CoordinatesMultiPolygon;

export type GenericObject = {
  [key: string]: any;
};

export interface Group {
  id?: string;
  parent?: Group;
  children?: Group[];
  name: string;
}
