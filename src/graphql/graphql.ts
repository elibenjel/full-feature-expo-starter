import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: number; output: number; }
  BigInt: { input: number; output: number; }
  Cursor: { input: string; output: string; }
  Date: { input: Date; output: Date; }
  Datetime: { input: Date; output: Date; }
  JSON: { input: unknown; output: unknown; }
  Opaque: { input: unknown; output: unknown; }
  Time: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

export type Address = Node & {
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customerLocation?: Maybe<CustomerLocation>;
  formattedAddress: Scalars['String']['output'];
  geolocation?: Maybe<Geolocation>;
  geolocationId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  restaurant?: Maybe<Restaurant>;
  street?: Maybe<Scalars['String']['output']>;
};

export type AddressConnection = {
  edges: Array<AddressEdge>;
  pageInfo: PageInfo;
};

export type AddressDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Address>;
};

export type AddressEdge = {
  cursor: Scalars['String']['output'];
  node: Address;
};

export type AddressFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AddressFilter>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  formattedAddress?: InputMaybe<StringFilter>;
  geolocationId?: InputMaybe<UUIDFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<AddressFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AddressFilter>>;
  postalCode?: InputMaybe<StringFilter>;
  street?: InputMaybe<StringFilter>;
};

export type AddressInsertInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  geolocationId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type AddressInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Address>;
};

export type AddressOrderBy = {
  city?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  formattedAddress?: InputMaybe<OrderByDirection>;
  geolocationId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  postalCode?: InputMaybe<OrderByDirection>;
  street?: InputMaybe<OrderByDirection>;
};

export type AddressUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  geolocationId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type AddressUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Address>;
};

export enum Allergen {
  GLUTEN = 'GLUTEN',
  LACTOSE = 'LACTOSE',
  NUTS = 'NUTS',
  SHELLFISH = 'SHELLFISH'
}

/** Boolean expression comparing fields on type "Allergen" */
export type AllergenFilter = {
  eq?: InputMaybe<Allergen>;
  in?: InputMaybe<Array<Allergen>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Allergen>;
};

export enum ApiSchema {
  aioli = 'aioli'
}

/** Boolean expression comparing fields on type "ApiSchema" */
export type ApiSchemaFilter = {
  eq?: InputMaybe<ApiSchema>;
  in?: InputMaybe<Array<ApiSchema>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<ApiSchema>;
};

export type AppVersion = Node & {
  appName: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  env: DeploymentEnvironment;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  schemaName: ApiSchema;
  version: Scalars['String']['output'];
};

export type AppVersionConnection = {
  edges: Array<AppVersionEdge>;
  pageInfo: PageInfo;
};

export type AppVersionDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AppVersion>;
};

export type AppVersionEdge = {
  cursor: Scalars['String']['output'];
  node: AppVersion;
};

export type AppVersionFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AppVersionFilter>>;
  appName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  env?: InputMaybe<DeploymentEnvironmentFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<AppVersionFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AppVersionFilter>>;
  schemaName?: InputMaybe<ApiSchemaFilter>;
  version?: InputMaybe<StringFilter>;
};

export type AppVersionInsertInput = {
  appName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  env?: InputMaybe<DeploymentEnvironment>;
  schemaName?: InputMaybe<ApiSchema>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type AppVersionInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AppVersion>;
};

export type AppVersionOrderBy = {
  appName?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  env?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  schemaName?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type AppVersionUpdateInput = {
  appName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  env?: InputMaybe<DeploymentEnvironment>;
  schemaName?: InputMaybe<ApiSchema>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type AppVersionUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AppVersion>;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export enum Cuisine {
  AMERICAN = 'AMERICAN',
  CHINESE = 'CHINESE',
  INDIAN = 'INDIAN',
  ITALIAN = 'ITALIAN',
  JAPANESE = 'JAPANESE',
  MEXICAN = 'MEXICAN',
  MOROCCAN = 'MOROCCAN'
}

/** Boolean expression comparing fields on type "Cuisine" */
export type CuisineFilter = {
  eq?: InputMaybe<Cuisine>;
  in?: InputMaybe<Array<Cuisine>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Cuisine>;
};

export enum CurrencyCode {
  EUR = 'EUR',
  USD = 'USD'
}

/** Boolean expression comparing fields on type "CurrencyCode" */
export type CurrencyCodeFilter = {
  eq?: InputMaybe<CurrencyCode>;
  in?: InputMaybe<Array<CurrencyCode>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<CurrencyCode>;
};

export type Customer = Node & {
  allergies?: Maybe<Array<Maybe<Allergen>>>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  customerLocationCollection?: Maybe<CustomerLocationConnection>;
  diets?: Maybe<Array<Maybe<Diet>>>;
  dislikedCuisines?: Maybe<Array<Maybe<Cuisine>>>;
  id: Scalars['UUID']['output'];
  likedCuisines?: Maybe<Array<Maybe<Cuisine>>>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  orderCollection?: Maybe<OrderConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  userId: Scalars['UUID']['output'];
  version: Scalars['Int']['output'];
};


export type CustomercustomerLocationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CustomerLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomerLocationOrderBy>>;
};


export type CustomerorderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
};

export type CustomerConnection = {
  edges: Array<CustomerEdge>;
  pageInfo: PageInfo;
};

export type CustomerDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer>;
};

export type CustomerEdge = {
  cursor: Scalars['String']['output'];
  node: Customer;
};

export type CustomerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CustomerFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UUIDFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<CustomerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CustomerFilter>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<UUIDFilter>;
  version?: InputMaybe<IntFilter>;
};

export type CustomerInsertInput = {
  allergies?: InputMaybe<Array<InputMaybe<Allergen>>>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  diets?: InputMaybe<Array<InputMaybe<Diet>>>;
  dislikedCuisines?: InputMaybe<Array<InputMaybe<Cuisine>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  likedCuisines?: InputMaybe<Array<InputMaybe<Cuisine>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer>;
};

export type CustomerLocation = Node & {
  address?: Maybe<Address>;
  addressId: Scalars['UUID']['output'];
  customer?: Maybe<Customer>;
  customerId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type CustomerLocationConnection = {
  edges: Array<CustomerLocationEdge>;
  pageInfo: PageInfo;
};

export type CustomerLocationDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CustomerLocation>;
};

export type CustomerLocationEdge = {
  cursor: Scalars['String']['output'];
  node: CustomerLocation;
};

export type CustomerLocationFilter = {
  addressId?: InputMaybe<UUIDFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CustomerLocationFilter>>;
  customerId?: InputMaybe<UUIDFilter>;
  id?: InputMaybe<UUIDFilter>;
  label?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<CustomerLocationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CustomerLocationFilter>>;
};

export type CustomerLocationInsertInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerLocationInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CustomerLocation>;
};

export type CustomerLocationOrderBy = {
  addressId?: InputMaybe<OrderByDirection>;
  customerId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  label?: InputMaybe<OrderByDirection>;
};

export type CustomerLocationUpdateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerLocationUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CustomerLocation>;
};

export type CustomerOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type CustomerUpdateInput = {
  allergies?: InputMaybe<Array<InputMaybe<Allergen>>>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  diets?: InputMaybe<Array<InputMaybe<Diet>>>;
  dislikedCuisines?: InputMaybe<Array<InputMaybe<Cuisine>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  likedCuisines?: InputMaybe<Array<InputMaybe<Cuisine>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type Deployment = Node & {
  createdAt: Scalars['Datetime']['output'];
  env: DeploymentEnvironment;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  schemaName: ApiSchema;
  status: DeploymentStatus;
  updatedAt: Scalars['Datetime']['output'];
};

export type DeploymentConnection = {
  edges: Array<DeploymentEdge>;
  pageInfo: PageInfo;
};

export type DeploymentDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Deployment>;
};

export type DeploymentEdge = {
  cursor: Scalars['String']['output'];
  node: Deployment;
};

export enum DeploymentEnvironment {
  DEV = 'DEV',
  PREVIEW = 'PREVIEW',
  PROD = 'PROD'
}

/** Boolean expression comparing fields on type "DeploymentEnvironment" */
export type DeploymentEnvironmentFilter = {
  eq?: InputMaybe<DeploymentEnvironment>;
  in?: InputMaybe<Array<DeploymentEnvironment>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<DeploymentEnvironment>;
};

export type DeploymentFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<DeploymentFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  env?: InputMaybe<DeploymentEnvironmentFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<DeploymentFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<DeploymentFilter>>;
  schemaName?: InputMaybe<ApiSchemaFilter>;
  status?: InputMaybe<DeploymentStatusFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DeploymentInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  env?: InputMaybe<DeploymentEnvironment>;
  schemaName?: InputMaybe<ApiSchema>;
  status?: InputMaybe<DeploymentStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type DeploymentInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Deployment>;
};

export type DeploymentOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  env?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  schemaName?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export enum DeploymentStatus {
  DEPLOYED = 'DEPLOYED',
  PENDING = 'PENDING'
}

/** Boolean expression comparing fields on type "DeploymentStatus" */
export type DeploymentStatusFilter = {
  eq?: InputMaybe<DeploymentStatus>;
  in?: InputMaybe<Array<DeploymentStatus>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<DeploymentStatus>;
};

export type DeploymentUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  env?: InputMaybe<DeploymentEnvironment>;
  schemaName?: InputMaybe<ApiSchema>;
  status?: InputMaybe<DeploymentStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type DeploymentUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Deployment>;
};

export enum Diet {
  HALAL = 'HALAL',
  KOSHER = 'KOSHER',
  VEGAN = 'VEGAN',
  VEGETARIAN = 'VEGETARIAN'
}

/** Boolean expression comparing fields on type "Diet" */
export type DietFilter = {
  eq?: InputMaybe<Diet>;
  in?: InputMaybe<Array<Diet>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Diet>;
};

export type EatInConfiguration = Node & {
  enabled: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tableNumber: Scalars['Int']['output'];
  tableSize: Scalars['Int']['output'];
  workSlotConfiguration?: Maybe<WorkSlotConfiguration>;
};

export type EatInConfigurationConnection = {
  edges: Array<EatInConfigurationEdge>;
  pageInfo: PageInfo;
};

export type EatInConfigurationDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EatInConfiguration>;
};

export type EatInConfigurationEdge = {
  cursor: Scalars['String']['output'];
  node: EatInConfiguration;
};

export type EatInConfigurationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EatInConfigurationFilter>>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<EatInConfigurationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EatInConfigurationFilter>>;
  tableNumber?: InputMaybe<IntFilter>;
  tableSize?: InputMaybe<IntFilter>;
};

export type EatInConfigurationInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  tableNumber?: InputMaybe<Scalars['Int']['input']>;
  tableSize?: InputMaybe<Scalars['Int']['input']>;
};

export type EatInConfigurationInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EatInConfiguration>;
};

export type EatInConfigurationOrderBy = {
  enabled?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  tableNumber?: InputMaybe<OrderByDirection>;
  tableSize?: InputMaybe<OrderByDirection>;
};

export type EatInConfigurationUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  tableNumber?: InputMaybe<Scalars['Int']['input']>;
  tableSize?: InputMaybe<Scalars['Int']['input']>;
};

export type EatInConfigurationUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EatInConfiguration>;
};

export type EatInOrder = Node & {
  arrivalTime?: Maybe<Scalars['Datetime']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  customerBudgetId?: Maybe<Scalars['UUID']['output']>;
  customerGeolocationId?: Maybe<Scalars['UUID']['output']>;
  customerId?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  priceCategories?: Maybe<Array<Maybe<PriceCategory>>>;
  restaurantId?: Maybe<Scalars['UUID']['output']>;
  restaurantPayId?: Maybe<Scalars['UUID']['output']>;
  serviceFeesId?: Maybe<Scalars['UUID']['output']>;
  status?: Maybe<OrderStatus>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workSlotId?: Maybe<Scalars['UUID']['output']>;
};

export type EatInOrderConnection = {
  edges: Array<EatInOrderEdge>;
  pageInfo: PageInfo;
};

export type EatInOrderDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EatInOrder>;
};

export type EatInOrderEdge = {
  cursor: Scalars['String']['output'];
  node: EatInOrder;
};

export type EatInOrderFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EatInOrderFilter>>;
  arrivalTime?: InputMaybe<DatetimeFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  customerBudgetId?: InputMaybe<UUIDFilter>;
  customerGeolocationId?: InputMaybe<UUIDFilter>;
  customerId?: InputMaybe<UUIDFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<EatInOrderFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EatInOrderFilter>>;
  restaurantId?: InputMaybe<UUIDFilter>;
  restaurantPayId?: InputMaybe<UUIDFilter>;
  serviceFeesId?: InputMaybe<UUIDFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
  workSlotId?: InputMaybe<UUIDFilter>;
};

export type EatInOrderInsertInput = {
  arrivalTime?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  customerBudgetId?: InputMaybe<Scalars['UUID']['input']>;
  customerGeolocationId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  priceCategories?: InputMaybe<Array<InputMaybe<PriceCategory>>>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantPayId?: InputMaybe<Scalars['UUID']['input']>;
  serviceFeesId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type EatInOrderInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EatInOrder>;
};

export type EatInOrderOrderBy = {
  arrivalTime?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  customerBudgetId?: InputMaybe<OrderByDirection>;
  customerGeolocationId?: InputMaybe<OrderByDirection>;
  customerId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
  restaurantPayId?: InputMaybe<OrderByDirection>;
  serviceFeesId?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
  workSlotId?: InputMaybe<OrderByDirection>;
};

export type EatInOrderUpdateInput = {
  arrivalTime?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  customerBudgetId?: InputMaybe<Scalars['UUID']['input']>;
  customerGeolocationId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  priceCategories?: InputMaybe<Array<InputMaybe<PriceCategory>>>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantPayId?: InputMaybe<Scalars['UUID']['input']>;
  serviceFeesId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type EatInOrderUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<EatInOrder>;
};

export enum FilterIs {
  NOT_NULL = 'NOT_NULL',
  NULL = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Geolocation = Node & {
  address?: Maybe<Address>;
  id: Scalars['UUID']['output'];
  latitude: Scalars['BigFloat']['output'];
  longitude: Scalars['BigFloat']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order?: Maybe<Order>;
};

export type GeolocationConnection = {
  edges: Array<GeolocationEdge>;
  pageInfo: PageInfo;
};

export type GeolocationDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Geolocation>;
};

export type GeolocationEdge = {
  cursor: Scalars['String']['output'];
  node: Geolocation;
};

export type GeolocationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GeolocationFilter>>;
  id?: InputMaybe<UUIDFilter>;
  latitude?: InputMaybe<BigFloatFilter>;
  longitude?: InputMaybe<BigFloatFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<GeolocationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GeolocationFilter>>;
};

export type GeolocationInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  latitude?: InputMaybe<Scalars['BigFloat']['input']>;
  longitude?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type GeolocationInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Geolocation>;
};

export type GeolocationOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  latitude?: InputMaybe<OrderByDirection>;
  longitude?: InputMaybe<OrderByDirection>;
};

export type GeolocationUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  latitude?: InputMaybe<Scalars['BigFloat']['input']>;
  longitude?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type GeolocationUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Geolocation>;
};

/** Boolean expression comparing fields on type "ID" */
export type IDFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

export type Image = Node & {
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  restaurant?: Maybe<Restaurant>;
  restaurantId: Scalars['UUID']['output'];
  uri: Scalars['String']['output'];
};

export type ImageConnection = {
  edges: Array<ImageEdge>;
  pageInfo: PageInfo;
};

export type ImageDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Image>;
};

export type ImageEdge = {
  cursor: Scalars['String']['output'];
  node: Image;
};

export type ImageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ImageFilter>>;
  caption?: InputMaybe<StringFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<ImageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ImageFilter>>;
  restaurantId?: InputMaybe<UUIDFilter>;
  uri?: InputMaybe<StringFilter>;
};

export type ImageInsertInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type ImageInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Image>;
};

export type ImageOrderBy = {
  caption?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
  uri?: InputMaybe<OrderByDirection>;
};

export type ImageUpdateInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Image>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum MealCategory {
  DESSERT = 'DESSERT',
  DRINK = 'DRINK',
  MAIN_COURSE = 'MAIN_COURSE',
  STARTER = 'STARTER'
}

/** Boolean expression comparing fields on type "MealCategory" */
export type MealCategoryFilter = {
  eq?: InputMaybe<MealCategory>;
  in?: InputMaybe<Array<MealCategory>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<MealCategory>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  checkEmailExists?: Maybe<Scalars['Boolean']['output']>;
  clearData?: Maybe<Scalars['Opaque']['output']>;
  createAddress?: Maybe<Scalars['UUID']['output']>;
  createCustomerLocation?: Maybe<Scalars['UUID']['output']>;
  createEatInConfiguration?: Maybe<Scalars['UUID']['output']>;
  createGeolocation?: Maybe<Scalars['UUID']['output']>;
  createTakeawayConfiguration?: Maybe<Scalars['UUID']['output']>;
  createUser?: Maybe<Scalars['UUID']['output']>;
  createWorkSlot?: Maybe<Scalars['UUID']['output']>;
  createWorkSlotConfiguration?: Maybe<Scalars['UUID']['output']>;
  /** Deletes zero or more records from the `Address` collection */
  deleteFromAddressCollection: AddressDeleteResponse;
  /** Deletes zero or more records from the `AppVersion` collection */
  deleteFromAppVersionCollection: AppVersionDeleteResponse;
  /** Deletes zero or more records from the `Customer` collection */
  deleteFromCustomerCollection: CustomerDeleteResponse;
  /** Deletes zero or more records from the `CustomerLocation` collection */
  deleteFromCustomerLocationCollection: CustomerLocationDeleteResponse;
  /** Deletes zero or more records from the `Deployment` collection */
  deleteFromDeploymentCollection: DeploymentDeleteResponse;
  /** Deletes zero or more records from the `EatInConfiguration` collection */
  deleteFromEatInConfigurationCollection: EatInConfigurationDeleteResponse;
  /** Deletes zero or more records from the `EatInOrder` collection */
  deleteFromEatInOrderCollection: EatInOrderDeleteResponse;
  /** Deletes zero or more records from the `Geolocation` collection */
  deleteFromGeolocationCollection: GeolocationDeleteResponse;
  /** Deletes zero or more records from the `Image` collection */
  deleteFromImageCollection: ImageDeleteResponse;
  /** Deletes zero or more records from the `Order` collection */
  deleteFromOrderCollection: OrderDeleteResponse;
  /** Deletes zero or more records from the `OrderMealItem` collection */
  deleteFromOrderMealItemCollection: OrderMealItemDeleteResponse;
  /** Deletes zero or more records from the `Price` collection */
  deleteFromPriceCollection: PriceDeleteResponse;
  /** Deletes zero or more records from the `PriceRange` collection */
  deleteFromPriceRangeCollection: PriceRangeDeleteResponse;
  /** Deletes zero or more records from the `Receipt` collection */
  deleteFromReceiptCollection: ReceiptDeleteResponse;
  /** Deletes zero or more records from the `Restaurant` collection */
  deleteFromRestaurantCollection: RestaurantDeleteResponse;
  /** Deletes zero or more records from the `RestaurantMealDetails` collection */
  deleteFromRestaurantMealDetailsCollection: RestaurantMealDetailsDeleteResponse;
  /** Deletes zero or more records from the `TakeawayConfiguration` collection */
  deleteFromTakeawayConfigurationCollection: TakeawayConfigurationDeleteResponse;
  /** Deletes zero or more records from the `TakeawayOrder` collection */
  deleteFromTakeawayOrderCollection: TakeawayOrderDeleteResponse;
  /** Deletes zero or more records from the `TakeawayOrderContext` collection */
  deleteFromTakeawayOrderContextCollection: TakeawayOrderContextDeleteResponse;
  /** Deletes zero or more records from the `WorkSlot` collection */
  deleteFromWorkSlotCollection: WorkSlotDeleteResponse;
  /** Deletes zero or more records from the `WorkSlotConfiguration` collection */
  deleteFromWorkSlotConfigurationCollection: WorkSlotConfigurationDeleteResponse;
  /** Deletes zero or more records from the `WorkSlotEarnings` collection */
  deleteFromWorkSlotEarningsCollection: WorkSlotEarningsDeleteResponse;
  /** Deletes zero or more records from the `WorkSlotPendingMatch` collection */
  deleteFromWorkSlotPendingMatchCollection: WorkSlotPendingMatchDeleteResponse;
  /** Adds one or more `Address` records to the collection */
  insertIntoAddressCollection?: Maybe<AddressInsertResponse>;
  /** Adds one or more `AppVersion` records to the collection */
  insertIntoAppVersionCollection?: Maybe<AppVersionInsertResponse>;
  /** Adds one or more `Customer` records to the collection */
  insertIntoCustomerCollection?: Maybe<CustomerInsertResponse>;
  /** Adds one or more `CustomerLocation` records to the collection */
  insertIntoCustomerLocationCollection?: Maybe<CustomerLocationInsertResponse>;
  /** Adds one or more `Deployment` records to the collection */
  insertIntoDeploymentCollection?: Maybe<DeploymentInsertResponse>;
  /** Adds one or more `EatInConfiguration` records to the collection */
  insertIntoEatInConfigurationCollection?: Maybe<EatInConfigurationInsertResponse>;
  /** Adds one or more `EatInOrder` records to the collection */
  insertIntoEatInOrderCollection?: Maybe<EatInOrderInsertResponse>;
  /** Adds one or more `Geolocation` records to the collection */
  insertIntoGeolocationCollection?: Maybe<GeolocationInsertResponse>;
  /** Adds one or more `Image` records to the collection */
  insertIntoImageCollection?: Maybe<ImageInsertResponse>;
  /** Adds one or more `Order` records to the collection */
  insertIntoOrderCollection?: Maybe<OrderInsertResponse>;
  /** Adds one or more `OrderMealItem` records to the collection */
  insertIntoOrderMealItemCollection?: Maybe<OrderMealItemInsertResponse>;
  /** Adds one or more `Price` records to the collection */
  insertIntoPriceCollection?: Maybe<PriceInsertResponse>;
  /** Adds one or more `PriceRange` records to the collection */
  insertIntoPriceRangeCollection?: Maybe<PriceRangeInsertResponse>;
  /** Adds one or more `Receipt` records to the collection */
  insertIntoReceiptCollection?: Maybe<ReceiptInsertResponse>;
  /** Adds one or more `Restaurant` records to the collection */
  insertIntoRestaurantCollection?: Maybe<RestaurantInsertResponse>;
  /** Adds one or more `RestaurantMealDetails` records to the collection */
  insertIntoRestaurantMealDetailsCollection?: Maybe<RestaurantMealDetailsInsertResponse>;
  /** Adds one or more `TakeawayConfiguration` records to the collection */
  insertIntoTakeawayConfigurationCollection?: Maybe<TakeawayConfigurationInsertResponse>;
  /** Adds one or more `TakeawayOrder` records to the collection */
  insertIntoTakeawayOrderCollection?: Maybe<TakeawayOrderInsertResponse>;
  /** Adds one or more `TakeawayOrderContext` records to the collection */
  insertIntoTakeawayOrderContextCollection?: Maybe<TakeawayOrderContextInsertResponse>;
  /** Adds one or more `WorkSlot` records to the collection */
  insertIntoWorkSlotCollection?: Maybe<WorkSlotInsertResponse>;
  /** Adds one or more `WorkSlotConfiguration` records to the collection */
  insertIntoWorkSlotConfigurationCollection?: Maybe<WorkSlotConfigurationInsertResponse>;
  /** Adds one or more `WorkSlotEarnings` records to the collection */
  insertIntoWorkSlotEarningsCollection?: Maybe<WorkSlotEarningsInsertResponse>;
  /** Adds one or more `WorkSlotPendingMatch` records to the collection */
  insertIntoWorkSlotPendingMatchCollection?: Maybe<WorkSlotPendingMatchInsertResponse>;
  resetFakeRestaurantWorkSlots?: Maybe<Scalars['JSON']['output']>;
  seedDevData?: Maybe<Scalars['Opaque']['output']>;
  seedFakeRestaurants?: Maybe<Scalars['JSON']['output']>;
  seedTestData?: Maybe<Scalars['JSON']['output']>;
  /** Updates zero or more records in the `Address` collection */
  updateAddressCollection: AddressUpdateResponse;
  /** Updates zero or more records in the `AppVersion` collection */
  updateAppVersionCollection: AppVersionUpdateResponse;
  /** Updates zero or more records in the `Customer` collection */
  updateCustomerCollection: CustomerUpdateResponse;
  /** Updates zero or more records in the `CustomerLocation` collection */
  updateCustomerLocationCollection: CustomerLocationUpdateResponse;
  /** Updates zero or more records in the `Deployment` collection */
  updateDeploymentCollection: DeploymentUpdateResponse;
  /** Updates zero or more records in the `EatInConfiguration` collection */
  updateEatInConfigurationCollection: EatInConfigurationUpdateResponse;
  /** Updates zero or more records in the `EatInOrder` collection */
  updateEatInOrderCollection: EatInOrderUpdateResponse;
  /** Updates zero or more records in the `Geolocation` collection */
  updateGeolocationCollection: GeolocationUpdateResponse;
  /** Updates zero or more records in the `Image` collection */
  updateImageCollection: ImageUpdateResponse;
  /** Updates zero or more records in the `Order` collection */
  updateOrderCollection: OrderUpdateResponse;
  /** Updates zero or more records in the `OrderMealItem` collection */
  updateOrderMealItemCollection: OrderMealItemUpdateResponse;
  /** Updates zero or more records in the `Price` collection */
  updatePriceCollection: PriceUpdateResponse;
  /** Updates zero or more records in the `PriceRange` collection */
  updatePriceRangeCollection: PriceRangeUpdateResponse;
  /** Updates zero or more records in the `Receipt` collection */
  updateReceiptCollection: ReceiptUpdateResponse;
  /** Updates zero or more records in the `Restaurant` collection */
  updateRestaurantCollection: RestaurantUpdateResponse;
  /** Updates zero or more records in the `RestaurantMealDetails` collection */
  updateRestaurantMealDetailsCollection: RestaurantMealDetailsUpdateResponse;
  /** Updates zero or more records in the `TakeawayConfiguration` collection */
  updateTakeawayConfigurationCollection: TakeawayConfigurationUpdateResponse;
  /** Updates zero or more records in the `TakeawayOrder` collection */
  updateTakeawayOrderCollection: TakeawayOrderUpdateResponse;
  /** Updates zero or more records in the `TakeawayOrderContext` collection */
  updateTakeawayOrderContextCollection: TakeawayOrderContextUpdateResponse;
  /** Updates zero or more records in the `WorkSlot` collection */
  updateWorkSlotCollection: WorkSlotUpdateResponse;
  /** Updates zero or more records in the `WorkSlotConfiguration` collection */
  updateWorkSlotConfigurationCollection: WorkSlotConfigurationUpdateResponse;
  /** Updates zero or more records in the `WorkSlotEarnings` collection */
  updateWorkSlotEarningsCollection: WorkSlotEarningsUpdateResponse;
  /** Updates zero or more records in the `WorkSlotPendingMatch` collection */
  updateWorkSlotPendingMatchCollection: WorkSlotPendingMatchUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationcheckEmailExistsArgs = {
  emailToCheck: Scalars['String']['input'];
};


/** The root type for creating and mutating data */
export type MutationcreateAddressArgs = {
  pCity?: InputMaybe<Scalars['String']['input']>;
  pCountry?: InputMaybe<Scalars['String']['input']>;
  pFormattedAddress: Scalars['String']['input'];
  pLatitude: Scalars['BigFloat']['input'];
  pLongitude: Scalars['BigFloat']['input'];
  pPostalCode?: InputMaybe<Scalars['String']['input']>;
  pStreet?: InputMaybe<Scalars['String']['input']>;
};


/** The root type for creating and mutating data */
export type MutationcreateCustomerLocationArgs = {
  pCity?: InputMaybe<Scalars['String']['input']>;
  pCountry?: InputMaybe<Scalars['String']['input']>;
  pCustomerId: Scalars['UUID']['input'];
  pFormattedAddress: Scalars['String']['input'];
  pLabel: Scalars['String']['input'];
  pLatitude: Scalars['BigFloat']['input'];
  pLongitude: Scalars['BigFloat']['input'];
  pPostalCode?: InputMaybe<Scalars['String']['input']>;
  pStreet?: InputMaybe<Scalars['String']['input']>;
};


/** The root type for creating and mutating data */
export type MutationcreateEatInConfigurationArgs = {
  pEnabled: Scalars['Boolean']['input'];
  pTableNumber: Scalars['Int']['input'];
  pTableSize: Scalars['Int']['input'];
};


/** The root type for creating and mutating data */
export type MutationcreateGeolocationArgs = {
  pLatitude: Scalars['BigFloat']['input'];
  pLongitude: Scalars['BigFloat']['input'];
};


/** The root type for creating and mutating data */
export type MutationcreateTakeawayConfigurationArgs = {
  pEnabled: Scalars['Boolean']['input'];
};


/** The root type for creating and mutating data */
export type MutationcreateUserArgs = {
  pEmail: Scalars['String']['input'];
  pName: Scalars['String']['input'];
};


/** The root type for creating and mutating data */
export type MutationcreateWorkSlotArgs = {
  pEatInEnabled: Scalars['Boolean']['input'];
  pRestaurantId: Scalars['UUID']['input'];
  pShouldEndAt: Scalars['Datetime']['input'];
  pShouldStartAt: Scalars['Datetime']['input'];
  pTableNumber: Scalars['Int']['input'];
  pTableSize: Scalars['Int']['input'];
  pTakeawayEnabled: Scalars['Boolean']['input'];
};


/** The root type for creating and mutating data */
export type MutationcreateWorkSlotConfigurationArgs = {
  pEatInEnabled: Scalars['Boolean']['input'];
  pTableNumber: Scalars['Int']['input'];
  pTableSize: Scalars['Int']['input'];
  pTakeawayEnabled: Scalars['Boolean']['input'];
};


/** The root type for creating and mutating data */
export type MutationdeleteFromAddressCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AddressFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromAppVersionCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AppVersionFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromCustomerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomerFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromCustomerLocationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomerLocationFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromDeploymentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DeploymentFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromEatInConfigurationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EatInConfigurationFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromEatInOrderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EatInOrderFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromGeolocationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GeolocationFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromImageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ImageFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromOrderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrderFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromOrderMealItemCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrderMealItemFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromPriceCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PriceFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromPriceRangeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PriceRangeFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromReceiptCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReceiptFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromRestaurantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromRestaurantMealDetailsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantMealDetailsFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromTakeawayConfigurationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TakeawayConfigurationFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromTakeawayOrderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TakeawayOrderFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromTakeawayOrderContextCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TakeawayOrderContextFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromWorkSlotCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromWorkSlotConfigurationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotConfigurationFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromWorkSlotEarningsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotEarningsFilter>;
};


/** The root type for creating and mutating data */
export type MutationdeleteFromWorkSlotPendingMatchCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotPendingMatchFilter>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoAddressCollectionArgs = {
  objects: Array<AddressInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoAppVersionCollectionArgs = {
  objects: Array<AppVersionInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoCustomerCollectionArgs = {
  objects: Array<CustomerInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoCustomerLocationCollectionArgs = {
  objects: Array<CustomerLocationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoDeploymentCollectionArgs = {
  objects: Array<DeploymentInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoEatInConfigurationCollectionArgs = {
  objects: Array<EatInConfigurationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoEatInOrderCollectionArgs = {
  objects: Array<EatInOrderInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoGeolocationCollectionArgs = {
  objects: Array<GeolocationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoImageCollectionArgs = {
  objects: Array<ImageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoOrderCollectionArgs = {
  objects: Array<OrderInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoOrderMealItemCollectionArgs = {
  objects: Array<OrderMealItemInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoPriceCollectionArgs = {
  objects: Array<PriceInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoPriceRangeCollectionArgs = {
  objects: Array<PriceRangeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoReceiptCollectionArgs = {
  objects: Array<ReceiptInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoRestaurantCollectionArgs = {
  objects: Array<RestaurantInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoRestaurantMealDetailsCollectionArgs = {
  objects: Array<RestaurantMealDetailsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoTakeawayConfigurationCollectionArgs = {
  objects: Array<TakeawayConfigurationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoTakeawayOrderCollectionArgs = {
  objects: Array<TakeawayOrderInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoTakeawayOrderContextCollectionArgs = {
  objects: Array<TakeawayOrderContextInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoWorkSlotCollectionArgs = {
  objects: Array<WorkSlotInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoWorkSlotConfigurationCollectionArgs = {
  objects: Array<WorkSlotConfigurationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoWorkSlotEarningsCollectionArgs = {
  objects: Array<WorkSlotEarningsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationinsertIntoWorkSlotPendingMatchCollectionArgs = {
  objects: Array<WorkSlotPendingMatchInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationupdateAddressCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AddressFilter>;
  set: AddressUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateAppVersionCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AppVersionFilter>;
  set: AppVersionUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateCustomerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomerFilter>;
  set: CustomerUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateCustomerLocationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomerLocationFilter>;
  set: CustomerLocationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateDeploymentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DeploymentFilter>;
  set: DeploymentUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateEatInConfigurationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EatInConfigurationFilter>;
  set: EatInConfigurationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateEatInOrderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EatInOrderFilter>;
  set: EatInOrderUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateGeolocationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GeolocationFilter>;
  set: GeolocationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateImageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ImageFilter>;
  set: ImageUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateOrderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrderFilter>;
  set: OrderUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateOrderMealItemCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrderMealItemFilter>;
  set: OrderMealItemUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdatePriceCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PriceFilter>;
  set: PriceUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdatePriceRangeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PriceRangeFilter>;
  set: PriceRangeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateReceiptCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReceiptFilter>;
  set: ReceiptUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateRestaurantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantFilter>;
  set: RestaurantUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateRestaurantMealDetailsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantMealDetailsFilter>;
  set: RestaurantMealDetailsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateTakeawayConfigurationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TakeawayConfigurationFilter>;
  set: TakeawayConfigurationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateTakeawayOrderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TakeawayOrderFilter>;
  set: TakeawayOrderUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateTakeawayOrderContextCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TakeawayOrderContextFilter>;
  set: TakeawayOrderContextUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateWorkSlotCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotFilter>;
  set: WorkSlotUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateWorkSlotConfigurationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotConfigurationFilter>;
  set: WorkSlotConfigurationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateWorkSlotEarningsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotEarningsFilter>;
  set: WorkSlotEarningsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationupdateWorkSlotPendingMatchCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WorkSlotPendingMatchFilter>;
  set: WorkSlotPendingMatchUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

export enum Offering {
  EAT_IN = 'EAT_IN',
  TAKEAWAY = 'TAKEAWAY'
}

/** Boolean expression comparing fields on type "Offering" */
export type OfferingFilter = {
  eq?: InputMaybe<Offering>;
  in?: InputMaybe<Array<Offering>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Offering>;
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

export type Order = Node & {
  arrivalTime?: Maybe<Scalars['Datetime']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  customer?: Maybe<Customer>;
  customerBudget?: Maybe<Price>;
  customerBudgetId: Scalars['UUID']['output'];
  customerGeolocation?: Maybe<Geolocation>;
  customerGeolocationId: Scalars['UUID']['output'];
  customerId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  offering: Offering;
  orderMealItemCollection?: Maybe<OrderMealItemConnection>;
  pickupTime?: Maybe<Scalars['Datetime']['output']>;
  priceCategories?: Maybe<Array<Maybe<PriceCategory>>>;
  receipt?: Maybe<Receipt>;
  restaurant?: Maybe<Restaurant>;
  restaurantId?: Maybe<Scalars['UUID']['output']>;
  restaurantPay?: Maybe<Price>;
  restaurantPayId?: Maybe<Scalars['UUID']['output']>;
  serviceFees?: Maybe<Price>;
  serviceFeesId?: Maybe<Scalars['UUID']['output']>;
  status: OrderStatus;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version: Scalars['Int']['output'];
  workSlot?: Maybe<WorkSlot>;
  workSlotId?: Maybe<Scalars['UUID']['output']>;
  workSlotPendingMatchCollection?: Maybe<WorkSlotPendingMatchConnection>;
};


export type OrderorderMealItemCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrderMealItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderMealItemOrderBy>>;
};


export type OrderworkSlotPendingMatchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotPendingMatchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotPendingMatchOrderBy>>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type OrderConnection = {
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
};

export type OrderDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order>;
};

export type OrderEdge = {
  cursor: Scalars['String']['output'];
  node: Order;
};

export type OrderFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrderFilter>>;
  arrivalTime?: InputMaybe<DatetimeFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  customerBudgetId?: InputMaybe<UUIDFilter>;
  customerGeolocationId?: InputMaybe<UUIDFilter>;
  customerId?: InputMaybe<UUIDFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrderFilter>;
  offering?: InputMaybe<OfferingFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrderFilter>>;
  pickupTime?: InputMaybe<DatetimeFilter>;
  restaurantId?: InputMaybe<UUIDFilter>;
  restaurantPayId?: InputMaybe<UUIDFilter>;
  serviceFeesId?: InputMaybe<UUIDFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
  workSlotId?: InputMaybe<UUIDFilter>;
};

export type OrderInsertInput = {
  arrivalTime?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  customerBudgetId?: InputMaybe<Scalars['UUID']['input']>;
  customerGeolocationId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  offering?: InputMaybe<Offering>;
  pickupTime?: InputMaybe<Scalars['Datetime']['input']>;
  priceCategories?: InputMaybe<Array<InputMaybe<PriceCategory>>>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantPayId?: InputMaybe<Scalars['UUID']['input']>;
  serviceFeesId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrderInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order>;
};

export type OrderMealItem = Node & {
  count: Scalars['Int']['output'];
  mealCategory: MealCategory;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order?: Maybe<Order>;
  orderId: Scalars['UUID']['output'];
};

export type OrderMealItemConnection = {
  edges: Array<OrderMealItemEdge>;
  pageInfo: PageInfo;
};

export type OrderMealItemDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrderMealItem>;
};

export type OrderMealItemEdge = {
  cursor: Scalars['String']['output'];
  node: OrderMealItem;
};

export type OrderMealItemFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrderMealItemFilter>>;
  count?: InputMaybe<IntFilter>;
  mealCategory?: InputMaybe<MealCategoryFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrderMealItemFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrderMealItemFilter>>;
  orderId?: InputMaybe<UUIDFilter>;
};

export type OrderMealItemInsertInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  mealCategory?: InputMaybe<MealCategory>;
  orderId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrderMealItemInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrderMealItem>;
};

export type OrderMealItemOrderBy = {
  count?: InputMaybe<OrderByDirection>;
  mealCategory?: InputMaybe<OrderByDirection>;
  orderId?: InputMaybe<OrderByDirection>;
};

export type OrderMealItemUpdateInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  mealCategory?: InputMaybe<MealCategory>;
  orderId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrderMealItemUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrderMealItem>;
};

export type OrderOrderBy = {
  arrivalTime?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  customerBudgetId?: InputMaybe<OrderByDirection>;
  customerGeolocationId?: InputMaybe<OrderByDirection>;
  customerId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  offering?: InputMaybe<OrderByDirection>;
  pickupTime?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
  restaurantPayId?: InputMaybe<OrderByDirection>;
  serviceFeesId?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
  workSlotId?: InputMaybe<OrderByDirection>;
};

export enum OrderStatus {
  ABORTED = 'ABORTED',
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  FULFILLED = 'FULFILLED',
  MATCHED = 'MATCHED',
  MATCHING = 'MATCHING',
  MATCHING_FAILED = 'MATCHING_FAILED',
  PAID = 'PAID',
  PENDING = 'PENDING',
  PREPARING = 'PREPARING',
  READY = 'READY',
  REJECTED = 'REJECTED',
  SUBMITTED = 'SUBMITTED'
}

/** Boolean expression comparing fields on type "OrderStatus" */
export type OrderStatusFilter = {
  eq?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<OrderStatus>;
};

export type OrderUpdateInput = {
  arrivalTime?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  customerBudgetId?: InputMaybe<Scalars['UUID']['input']>;
  customerGeolocationId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  offering?: InputMaybe<Offering>;
  pickupTime?: InputMaybe<Scalars['Datetime']['input']>;
  priceCategories?: InputMaybe<Array<InputMaybe<PriceCategory>>>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantPayId?: InputMaybe<Scalars['UUID']['input']>;
  serviceFeesId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrderUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order>;
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Price = Node & {
  currency: CurrencyCode;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order?: Maybe<Order>;
  receipt?: Maybe<Receipt>;
  value: Scalars['BigFloat']['output'];
};

export enum PriceCategory {
  AVERAGE = 'AVERAGE',
  CHEAP = 'CHEAP',
  EXPENSIVE = 'EXPENSIVE'
}

/** Boolean expression comparing fields on type "PriceCategory" */
export type PriceCategoryFilter = {
  eq?: InputMaybe<PriceCategory>;
  in?: InputMaybe<Array<PriceCategory>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<PriceCategory>;
};

export type PriceConnection = {
  edges: Array<PriceEdge>;
  pageInfo: PageInfo;
};

export type PriceDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Price>;
};

export type PriceEdge = {
  cursor: Scalars['String']['output'];
  node: Price;
};

export type PriceFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PriceFilter>>;
  currency?: InputMaybe<CurrencyCodeFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<PriceFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PriceFilter>>;
  value?: InputMaybe<BigFloatFilter>;
};

export type PriceInsertInput = {
  currency?: InputMaybe<CurrencyCode>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  value?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type PriceInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Price>;
};

export type PriceOrderBy = {
  currency?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  value?: InputMaybe<OrderByDirection>;
};

export type PriceRange = Node & {
  currency: CurrencyCode;
  id: Scalars['UUID']['output'];
  max: Scalars['BigFloat']['output'];
  min: Scalars['BigFloat']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  restaurantMealDetailsCollection?: Maybe<RestaurantMealDetailsConnection>;
};


export type PriceRangerestaurantMealDetailsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RestaurantMealDetailsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RestaurantMealDetailsOrderBy>>;
};

export type PriceRangeConnection = {
  edges: Array<PriceRangeEdge>;
  pageInfo: PageInfo;
};

export type PriceRangeDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PriceRange>;
};

export type PriceRangeEdge = {
  cursor: Scalars['String']['output'];
  node: PriceRange;
};

export type PriceRangeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PriceRangeFilter>>;
  currency?: InputMaybe<CurrencyCodeFilter>;
  id?: InputMaybe<UUIDFilter>;
  max?: InputMaybe<BigFloatFilter>;
  min?: InputMaybe<BigFloatFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<PriceRangeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PriceRangeFilter>>;
};

export type PriceRangeInsertInput = {
  currency?: InputMaybe<CurrencyCode>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  max?: InputMaybe<Scalars['BigFloat']['input']>;
  min?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type PriceRangeInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PriceRange>;
};

export type PriceRangeOrderBy = {
  currency?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  max?: InputMaybe<OrderByDirection>;
  min?: InputMaybe<OrderByDirection>;
};

export type PriceRangeUpdateInput = {
  currency?: InputMaybe<CurrencyCode>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  max?: InputMaybe<Scalars['BigFloat']['input']>;
  min?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type PriceRangeUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<PriceRange>;
};

export type PriceUpdateInput = {
  currency?: InputMaybe<CurrencyCode>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  value?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type PriceUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Price>;
};

/** The root type for querying data */
export type Query = {
  /** A pagable collection of type `Address` */
  addressCollection?: Maybe<AddressConnection>;
  /** A pagable collection of type `AppVersion` */
  appVersionCollection?: Maybe<AppVersionConnection>;
  /** A pagable collection of type `Customer` */
  customerCollection?: Maybe<CustomerConnection>;
  /** A pagable collection of type `CustomerLocation` */
  customerLocationCollection?: Maybe<CustomerLocationConnection>;
  /** A pagable collection of type `Deployment` */
  deploymentCollection?: Maybe<DeploymentConnection>;
  /** A pagable collection of type `EatInConfiguration` */
  eatInConfigurationCollection?: Maybe<EatInConfigurationConnection>;
  /** A pagable collection of type `EatInOrder` */
  eatInOrderCollection?: Maybe<EatInOrderConnection>;
  /** A pagable collection of type `Geolocation` */
  geolocationCollection?: Maybe<GeolocationConnection>;
  /** A pagable collection of type `Image` */
  imageCollection?: Maybe<ImageConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Order` */
  orderCollection?: Maybe<OrderConnection>;
  /** A pagable collection of type `OrderMealItem` */
  orderMealItemCollection?: Maybe<OrderMealItemConnection>;
  /** A pagable collection of type `Price` */
  priceCollection?: Maybe<PriceConnection>;
  /** A pagable collection of type `PriceRange` */
  priceRangeCollection?: Maybe<PriceRangeConnection>;
  /** A pagable collection of type `Receipt` */
  receiptCollection?: Maybe<ReceiptConnection>;
  /** A pagable collection of type `Restaurant` */
  restaurantCollection?: Maybe<RestaurantConnection>;
  /** A pagable collection of type `RestaurantMealDetails` */
  restaurantMealDetailsCollection?: Maybe<RestaurantMealDetailsConnection>;
  /** A pagable collection of type `TakeawayConfiguration` */
  takeawayConfigurationCollection?: Maybe<TakeawayConfigurationConnection>;
  /** A pagable collection of type `TakeawayOrder` */
  takeawayOrderCollection?: Maybe<TakeawayOrderConnection>;
  /** A pagable collection of type `TakeawayOrderContext` */
  takeawayOrderContextCollection?: Maybe<TakeawayOrderContextConnection>;
  /** A pagable collection of type `WorkSlot` */
  workSlotCollection?: Maybe<WorkSlotConnection>;
  /** A pagable collection of type `WorkSlotConfiguration` */
  workSlotConfigurationCollection?: Maybe<WorkSlotConfigurationConnection>;
  /** A pagable collection of type `WorkSlotEarnings` */
  workSlotEarningsCollection?: Maybe<WorkSlotEarningsConnection>;
  /** A pagable collection of type `WorkSlotPendingMatch` */
  workSlotPendingMatchCollection?: Maybe<WorkSlotPendingMatchConnection>;
};


/** The root type for querying data */
export type QueryaddressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressOrderBy>>;
};


/** The root type for querying data */
export type QueryappVersionCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppVersionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppVersionOrderBy>>;
};


/** The root type for querying data */
export type QuerycustomerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CustomerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomerOrderBy>>;
};


/** The root type for querying data */
export type QuerycustomerLocationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CustomerLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomerLocationOrderBy>>;
};


/** The root type for querying data */
export type QuerydeploymentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeploymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeploymentOrderBy>>;
};


/** The root type for querying data */
export type QueryeatInConfigurationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EatInConfigurationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EatInConfigurationOrderBy>>;
};


/** The root type for querying data */
export type QueryeatInOrderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EatInOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EatInOrderOrderBy>>;
};


/** The root type for querying data */
export type QuerygeolocationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GeolocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeolocationOrderBy>>;
};


/** The root type for querying data */
export type QueryimageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImageOrderBy>>;
};


/** The root type for querying data */
export type QuerynodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryorderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
};


/** The root type for querying data */
export type QueryorderMealItemCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrderMealItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderMealItemOrderBy>>;
};


/** The root type for querying data */
export type QuerypriceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PriceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriceOrderBy>>;
};


/** The root type for querying data */
export type QuerypriceRangeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PriceRangeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriceRangeOrderBy>>;
};


/** The root type for querying data */
export type QueryreceiptCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReceiptOrderBy>>;
};


/** The root type for querying data */
export type QueryrestaurantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RestaurantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RestaurantOrderBy>>;
};


/** The root type for querying data */
export type QueryrestaurantMealDetailsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RestaurantMealDetailsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RestaurantMealDetailsOrderBy>>;
};


/** The root type for querying data */
export type QuerytakeawayConfigurationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TakeawayConfigurationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TakeawayConfigurationOrderBy>>;
};


/** The root type for querying data */
export type QuerytakeawayOrderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TakeawayOrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TakeawayOrderOrderBy>>;
};


/** The root type for querying data */
export type QuerytakeawayOrderContextCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TakeawayOrderContextFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TakeawayOrderContextOrderBy>>;
};


/** The root type for querying data */
export type QueryworkSlotCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotOrderBy>>;
};


/** The root type for querying data */
export type QueryworkSlotConfigurationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotConfigurationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotConfigurationOrderBy>>;
};


/** The root type for querying data */
export type QueryworkSlotEarningsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotEarningsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotEarningsOrderBy>>;
};


/** The root type for querying data */
export type QueryworkSlotPendingMatchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotPendingMatchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotPendingMatchOrderBy>>;
};

export type Receipt = Node & {
  amount?: Maybe<Price>;
  amountId: Scalars['UUID']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order?: Maybe<Order>;
  orderId: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version: Scalars['Int']['output'];
};

export type ReceiptConnection = {
  edges: Array<ReceiptEdge>;
  pageInfo: PageInfo;
};

export type ReceiptDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Receipt>;
};

export type ReceiptEdge = {
  cursor: Scalars['String']['output'];
  node: Receipt;
};

export type ReceiptFilter = {
  amountId?: InputMaybe<UUIDFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ReceiptFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<ReceiptFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ReceiptFilter>>;
  orderId?: InputMaybe<UUIDFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
};

export type ReceiptInsertInput = {
  amountId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  orderId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ReceiptInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Receipt>;
};

export type ReceiptOrderBy = {
  amountId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  orderId?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type ReceiptUpdateInput = {
  amountId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  orderId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type ReceiptUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Receipt>;
};

export type Restaurant = Node & {
  address?: Maybe<Address>;
  addressId: Scalars['UUID']['output'];
  allergens?: Maybe<Array<Maybe<Allergen>>>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  cuisines?: Maybe<Array<Maybe<Cuisine>>>;
  dietaryOptions?: Maybe<Array<Maybe<Diet>>>;
  id: Scalars['UUID']['output'];
  imageCollection?: Maybe<ImageConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  orderCollection?: Maybe<OrderConnection>;
  priceCategory: PriceCategory;
  restaurantMealDetailsCollection?: Maybe<RestaurantMealDetailsConnection>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  userId: Scalars['UUID']['output'];
  version: Scalars['Int']['output'];
  workSlotCollection?: Maybe<WorkSlotConnection>;
};


export type RestaurantimageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImageOrderBy>>;
};


export type RestaurantorderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
};


export type RestaurantrestaurantMealDetailsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RestaurantMealDetailsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RestaurantMealDetailsOrderBy>>;
};


export type RestaurantworkSlotCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotOrderBy>>;
};

export type RestaurantConnection = {
  edges: Array<RestaurantEdge>;
  pageInfo: PageInfo;
};

export type RestaurantDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type RestaurantEdge = {
  cursor: Scalars['String']['output'];
  node: Restaurant;
};

export type RestaurantFilter = {
  addressId?: InputMaybe<UUIDFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RestaurantFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UUIDFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<RestaurantFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RestaurantFilter>>;
  priceCategory?: InputMaybe<PriceCategoryFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  userId?: InputMaybe<UUIDFilter>;
  version?: InputMaybe<IntFilter>;
};

export type RestaurantInsertInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  allergens?: InputMaybe<Array<InputMaybe<Allergen>>>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  cuisines?: InputMaybe<Array<InputMaybe<Cuisine>>>;
  dietaryOptions?: InputMaybe<Array<InputMaybe<Diet>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceCategory?: InputMaybe<PriceCategory>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type RestaurantMealDetails = Node & {
  mealCategory: MealCategory;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  preparationTimeSeconds?: Maybe<Scalars['Int']['output']>;
  priceCategory: PriceCategory;
  priceRange?: Maybe<PriceRange>;
  priceRangeId: Scalars['UUID']['output'];
  restaurant?: Maybe<Restaurant>;
  restaurantId: Scalars['UUID']['output'];
};

export type RestaurantMealDetailsConnection = {
  edges: Array<RestaurantMealDetailsEdge>;
  pageInfo: PageInfo;
};

export type RestaurantMealDetailsDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<RestaurantMealDetails>;
};

export type RestaurantMealDetailsEdge = {
  cursor: Scalars['String']['output'];
  node: RestaurantMealDetails;
};

export type RestaurantMealDetailsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RestaurantMealDetailsFilter>>;
  mealCategory?: InputMaybe<MealCategoryFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<RestaurantMealDetailsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RestaurantMealDetailsFilter>>;
  preparationTimeSeconds?: InputMaybe<IntFilter>;
  priceCategory?: InputMaybe<PriceCategoryFilter>;
  priceRangeId?: InputMaybe<UUIDFilter>;
  restaurantId?: InputMaybe<UUIDFilter>;
};

export type RestaurantMealDetailsInsertInput = {
  mealCategory?: InputMaybe<MealCategory>;
  preparationTimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  priceCategory?: InputMaybe<PriceCategory>;
  priceRangeId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
};

export type RestaurantMealDetailsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<RestaurantMealDetails>;
};

export type RestaurantMealDetailsOrderBy = {
  mealCategory?: InputMaybe<OrderByDirection>;
  preparationTimeSeconds?: InputMaybe<OrderByDirection>;
  priceCategory?: InputMaybe<OrderByDirection>;
  priceRangeId?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
};

export type RestaurantMealDetailsUpdateInput = {
  mealCategory?: InputMaybe<MealCategory>;
  preparationTimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  priceCategory?: InputMaybe<PriceCategory>;
  priceRangeId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
};

export type RestaurantMealDetailsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<RestaurantMealDetails>;
};

export type RestaurantOrderBy = {
  addressId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  priceCategory?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type RestaurantUpdateInput = {
  addressId?: InputMaybe<Scalars['UUID']['input']>;
  allergens?: InputMaybe<Array<InputMaybe<Allergen>>>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  cuisines?: InputMaybe<Array<InputMaybe<Cuisine>>>;
  dietaryOptions?: InputMaybe<Array<InputMaybe<Diet>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceCategory?: InputMaybe<PriceCategory>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type RestaurantUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TakeawayConfiguration = Node & {
  enabled: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  workSlotConfiguration?: Maybe<WorkSlotConfiguration>;
};

export type TakeawayConfigurationConnection = {
  edges: Array<TakeawayConfigurationEdge>;
  pageInfo: PageInfo;
};

export type TakeawayConfigurationDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayConfiguration>;
};

export type TakeawayConfigurationEdge = {
  cursor: Scalars['String']['output'];
  node: TakeawayConfiguration;
};

export type TakeawayConfigurationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TakeawayConfigurationFilter>>;
  enabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<TakeawayConfigurationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TakeawayConfigurationFilter>>;
};

export type TakeawayConfigurationInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type TakeawayConfigurationInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayConfiguration>;
};

export type TakeawayConfigurationOrderBy = {
  enabled?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type TakeawayConfigurationUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type TakeawayConfigurationUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayConfiguration>;
};

export type TakeawayOrder = Node & {
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  customerBudgetId?: Maybe<Scalars['UUID']['output']>;
  customerGeolocationId?: Maybe<Scalars['UUID']['output']>;
  customerId?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pickupTime?: Maybe<Scalars['Datetime']['output']>;
  priceCategories?: Maybe<Array<Maybe<PriceCategory>>>;
  restaurantId?: Maybe<Scalars['UUID']['output']>;
  restaurantPayId?: Maybe<Scalars['UUID']['output']>;
  serviceFeesId?: Maybe<Scalars['UUID']['output']>;
  status?: Maybe<OrderStatus>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workSlotId?: Maybe<Scalars['UUID']['output']>;
};

export type TakeawayOrderConnection = {
  edges: Array<TakeawayOrderEdge>;
  pageInfo: PageInfo;
};

export type TakeawayOrderContext = Node & {
  activeRestaurantCount?: Maybe<Scalars['BigInt']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<CurrencyCode>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mealCategory?: Maybe<MealCategory>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  overallMaxPreparationTimeSeconds?: Maybe<Scalars['Int']['output']>;
  overallMaxPriceValue?: Maybe<Scalars['BigFloat']['output']>;
  overallMinPriceValue?: Maybe<Scalars['BigFloat']['output']>;
  priceCategory?: Maybe<PriceCategory>;
};

export type TakeawayOrderContextConnection = {
  edges: Array<TakeawayOrderContextEdge>;
  pageInfo: PageInfo;
};

export type TakeawayOrderContextDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayOrderContext>;
};

export type TakeawayOrderContextEdge = {
  cursor: Scalars['String']['output'];
  node: TakeawayOrderContext;
};

export type TakeawayOrderContextFilter = {
  activeRestaurantCount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TakeawayOrderContextFilter>>;
  city?: InputMaybe<StringFilter>;
  currency?: InputMaybe<CurrencyCodeFilter>;
  images?: InputMaybe<StringListFilter>;
  mealCategory?: InputMaybe<MealCategoryFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<TakeawayOrderContextFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TakeawayOrderContextFilter>>;
  overallMaxPreparationTimeSeconds?: InputMaybe<IntFilter>;
  overallMaxPriceValue?: InputMaybe<BigFloatFilter>;
  overallMinPriceValue?: InputMaybe<BigFloatFilter>;
  priceCategory?: InputMaybe<PriceCategoryFilter>;
};

export type TakeawayOrderContextInsertInput = {
  activeRestaurantCount?: InputMaybe<Scalars['BigInt']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mealCategory?: InputMaybe<MealCategory>;
  overallMaxPreparationTimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  overallMaxPriceValue?: InputMaybe<Scalars['BigFloat']['input']>;
  overallMinPriceValue?: InputMaybe<Scalars['BigFloat']['input']>;
  priceCategory?: InputMaybe<PriceCategory>;
};

export type TakeawayOrderContextInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayOrderContext>;
};

export type TakeawayOrderContextOrderBy = {
  activeRestaurantCount?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  mealCategory?: InputMaybe<OrderByDirection>;
  overallMaxPreparationTimeSeconds?: InputMaybe<OrderByDirection>;
  overallMaxPriceValue?: InputMaybe<OrderByDirection>;
  overallMinPriceValue?: InputMaybe<OrderByDirection>;
  priceCategory?: InputMaybe<OrderByDirection>;
};

export type TakeawayOrderContextUpdateInput = {
  activeRestaurantCount?: InputMaybe<Scalars['BigInt']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyCode>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mealCategory?: InputMaybe<MealCategory>;
  overallMaxPreparationTimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  overallMaxPriceValue?: InputMaybe<Scalars['BigFloat']['input']>;
  overallMinPriceValue?: InputMaybe<Scalars['BigFloat']['input']>;
  priceCategory?: InputMaybe<PriceCategory>;
};

export type TakeawayOrderContextUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayOrderContext>;
};

export type TakeawayOrderDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayOrder>;
};

export type TakeawayOrderEdge = {
  cursor: Scalars['String']['output'];
  node: TakeawayOrder;
};

export type TakeawayOrderFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TakeawayOrderFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  customerBudgetId?: InputMaybe<UUIDFilter>;
  customerGeolocationId?: InputMaybe<UUIDFilter>;
  customerId?: InputMaybe<UUIDFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<TakeawayOrderFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TakeawayOrderFilter>>;
  pickupTime?: InputMaybe<DatetimeFilter>;
  restaurantId?: InputMaybe<UUIDFilter>;
  restaurantPayId?: InputMaybe<UUIDFilter>;
  serviceFeesId?: InputMaybe<UUIDFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
  workSlotId?: InputMaybe<UUIDFilter>;
};

export type TakeawayOrderInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  customerBudgetId?: InputMaybe<Scalars['UUID']['input']>;
  customerGeolocationId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pickupTime?: InputMaybe<Scalars['Datetime']['input']>;
  priceCategories?: InputMaybe<Array<InputMaybe<PriceCategory>>>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantPayId?: InputMaybe<Scalars['UUID']['input']>;
  serviceFeesId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type TakeawayOrderInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayOrder>;
};

export type TakeawayOrderOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  customerBudgetId?: InputMaybe<OrderByDirection>;
  customerGeolocationId?: InputMaybe<OrderByDirection>;
  customerId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pickupTime?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
  restaurantPayId?: InputMaybe<OrderByDirection>;
  serviceFeesId?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
  workSlotId?: InputMaybe<OrderByDirection>;
};

export type TakeawayOrderUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  customerBudgetId?: InputMaybe<Scalars['UUID']['input']>;
  customerGeolocationId?: InputMaybe<Scalars['UUID']['input']>;
  customerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  pickupTime?: InputMaybe<Scalars['Datetime']['input']>;
  priceCategories?: InputMaybe<Array<InputMaybe<PriceCategory>>>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  restaurantPayId?: InputMaybe<Scalars['UUID']['input']>;
  serviceFeesId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type TakeawayOrderUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<TakeawayOrder>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UUIDFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UUIDListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type WorkSlot = Node & {
  configuration?: Maybe<WorkSlotConfiguration>;
  configurationId: Scalars['UUID']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  endedAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  orderCollection?: Maybe<OrderConnection>;
  restaurant?: Maybe<Restaurant>;
  restaurantId: Scalars['UUID']['output'];
  shouldEndAt: Scalars['Datetime']['output'];
  shouldStartAt: Scalars['Datetime']['output'];
  startedAt?: Maybe<Scalars['Datetime']['output']>;
  status: WorkSlotStatus;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  version: Scalars['Int']['output'];
  workSlotPendingMatchCollection?: Maybe<WorkSlotPendingMatchConnection>;
};


export type WorkSlotorderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
};


export type WorkSlotworkSlotPendingMatchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotPendingMatchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotPendingMatchOrderBy>>;
};

export type WorkSlotConfiguration = Node & {
  eatInConfiguration?: Maybe<EatInConfiguration>;
  eatInConfigurationId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  takeawayConfiguration?: Maybe<TakeawayConfiguration>;
  takeawayConfigurationId: Scalars['UUID']['output'];
  workSlotCollection?: Maybe<WorkSlotConnection>;
};


export type WorkSlotConfigurationworkSlotCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WorkSlotFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkSlotOrderBy>>;
};

export type WorkSlotConfigurationConnection = {
  edges: Array<WorkSlotConfigurationEdge>;
  pageInfo: PageInfo;
};

export type WorkSlotConfigurationDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotConfiguration>;
};

export type WorkSlotConfigurationEdge = {
  cursor: Scalars['String']['output'];
  node: WorkSlotConfiguration;
};

export type WorkSlotConfigurationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WorkSlotConfigurationFilter>>;
  eatInConfigurationId?: InputMaybe<UUIDFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<WorkSlotConfigurationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WorkSlotConfigurationFilter>>;
  takeawayConfigurationId?: InputMaybe<UUIDFilter>;
};

export type WorkSlotConfigurationInsertInput = {
  eatInConfigurationId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  takeawayConfigurationId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorkSlotConfigurationInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotConfiguration>;
};

export type WorkSlotConfigurationOrderBy = {
  eatInConfigurationId?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  takeawayConfigurationId?: InputMaybe<OrderByDirection>;
};

export type WorkSlotConfigurationUpdateInput = {
  eatInConfigurationId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  takeawayConfigurationId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorkSlotConfigurationUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotConfiguration>;
};

export type WorkSlotConnection = {
  edges: Array<WorkSlotEdge>;
  pageInfo: PageInfo;
};

export type WorkSlotDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlot>;
};

export type WorkSlotEarnings = Node & {
  currency?: Maybe<CurrencyCode>;
  eatInEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  receiptCount?: Maybe<Scalars['BigInt']['output']>;
  restaurantId?: Maybe<Scalars['UUID']['output']>;
  shouldEndAt?: Maybe<Scalars['Datetime']['output']>;
  shouldStartAt?: Maybe<Scalars['Datetime']['output']>;
  takeawayEnabled?: Maybe<Scalars['Boolean']['output']>;
  totalIncome?: Maybe<Scalars['BigFloat']['output']>;
  workSlotId?: Maybe<Scalars['UUID']['output']>;
};

export type WorkSlotEarningsConnection = {
  edges: Array<WorkSlotEarningsEdge>;
  pageInfo: PageInfo;
};

export type WorkSlotEarningsDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotEarnings>;
};

export type WorkSlotEarningsEdge = {
  cursor: Scalars['String']['output'];
  node: WorkSlotEarnings;
};

export type WorkSlotEarningsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WorkSlotEarningsFilter>>;
  currency?: InputMaybe<CurrencyCodeFilter>;
  eatInEnabled?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<WorkSlotEarningsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WorkSlotEarningsFilter>>;
  receiptCount?: InputMaybe<BigIntFilter>;
  restaurantId?: InputMaybe<UUIDFilter>;
  shouldEndAt?: InputMaybe<DatetimeFilter>;
  shouldStartAt?: InputMaybe<DatetimeFilter>;
  takeawayEnabled?: InputMaybe<BooleanFilter>;
  totalIncome?: InputMaybe<BigFloatFilter>;
  workSlotId?: InputMaybe<UUIDFilter>;
};

export type WorkSlotEarningsInsertInput = {
  currency?: InputMaybe<CurrencyCode>;
  eatInEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  receiptCount?: InputMaybe<Scalars['BigInt']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  shouldEndAt?: InputMaybe<Scalars['Datetime']['input']>;
  shouldStartAt?: InputMaybe<Scalars['Datetime']['input']>;
  takeawayEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  totalIncome?: InputMaybe<Scalars['BigFloat']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorkSlotEarningsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotEarnings>;
};

export type WorkSlotEarningsOrderBy = {
  currency?: InputMaybe<OrderByDirection>;
  eatInEnabled?: InputMaybe<OrderByDirection>;
  receiptCount?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
  shouldEndAt?: InputMaybe<OrderByDirection>;
  shouldStartAt?: InputMaybe<OrderByDirection>;
  takeawayEnabled?: InputMaybe<OrderByDirection>;
  totalIncome?: InputMaybe<OrderByDirection>;
  workSlotId?: InputMaybe<OrderByDirection>;
};

export type WorkSlotEarningsUpdateInput = {
  currency?: InputMaybe<CurrencyCode>;
  eatInEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  receiptCount?: InputMaybe<Scalars['BigInt']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  shouldEndAt?: InputMaybe<Scalars['Datetime']['input']>;
  shouldStartAt?: InputMaybe<Scalars['Datetime']['input']>;
  takeawayEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  totalIncome?: InputMaybe<Scalars['BigFloat']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorkSlotEarningsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotEarnings>;
};

export type WorkSlotEdge = {
  cursor: Scalars['String']['output'];
  node: WorkSlot;
};

export type WorkSlotFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WorkSlotFilter>>;
  configurationId?: InputMaybe<UUIDFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  endedAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UUIDFilter>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<WorkSlotFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WorkSlotFilter>>;
  restaurantId?: InputMaybe<UUIDFilter>;
  shouldEndAt?: InputMaybe<DatetimeFilter>;
  shouldStartAt?: InputMaybe<DatetimeFilter>;
  startedAt?: InputMaybe<DatetimeFilter>;
  status?: InputMaybe<WorkSlotStatusFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  version?: InputMaybe<IntFilter>;
};

export type WorkSlotInsertInput = {
  configurationId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  endedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  shouldEndAt?: InputMaybe<Scalars['Datetime']['input']>;
  shouldStartAt?: InputMaybe<Scalars['Datetime']['input']>;
  startedAt?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<WorkSlotStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkSlotInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlot>;
};

export type WorkSlotOrderBy = {
  configurationId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  endedAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  restaurantId?: InputMaybe<OrderByDirection>;
  shouldEndAt?: InputMaybe<OrderByDirection>;
  shouldStartAt?: InputMaybe<OrderByDirection>;
  startedAt?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
};

export type WorkSlotPendingMatch = Node & {
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order?: Maybe<Order>;
  orderId: Scalars['UUID']['output'];
  workSlot?: Maybe<WorkSlot>;
  workSlotId: Scalars['UUID']['output'];
};

export type WorkSlotPendingMatchConnection = {
  edges: Array<WorkSlotPendingMatchEdge>;
  pageInfo: PageInfo;
};

export type WorkSlotPendingMatchDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotPendingMatch>;
};

export type WorkSlotPendingMatchEdge = {
  cursor: Scalars['String']['output'];
  node: WorkSlotPendingMatch;
};

export type WorkSlotPendingMatchFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WorkSlotPendingMatchFilter>>;
  nodeId?: InputMaybe<IDFilter>;
  /** Negates a filter */
  not?: InputMaybe<WorkSlotPendingMatchFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WorkSlotPendingMatchFilter>>;
  orderId?: InputMaybe<UUIDFilter>;
  workSlotId?: InputMaybe<UUIDFilter>;
};

export type WorkSlotPendingMatchInsertInput = {
  orderId?: InputMaybe<Scalars['UUID']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorkSlotPendingMatchInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotPendingMatch>;
};

export type WorkSlotPendingMatchOrderBy = {
  orderId?: InputMaybe<OrderByDirection>;
  workSlotId?: InputMaybe<OrderByDirection>;
};

export type WorkSlotPendingMatchUpdateInput = {
  orderId?: InputMaybe<Scalars['UUID']['input']>;
  workSlotId?: InputMaybe<Scalars['UUID']['input']>;
};

export type WorkSlotPendingMatchUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlotPendingMatch>;
};

export enum WorkSlotStatus {
  FINISHED = 'FINISHED',
  ONGOING = 'ONGOING',
  UNKNOWN = 'UNKNOWN',
  UPCOMING = 'UPCOMING'
}

/** Boolean expression comparing fields on type "WorkSlotStatus" */
export type WorkSlotStatusFilter = {
  eq?: InputMaybe<WorkSlotStatus>;
  in?: InputMaybe<Array<WorkSlotStatus>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<WorkSlotStatus>;
};

export type WorkSlotUpdateInput = {
  configurationId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  endedAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  restaurantId?: InputMaybe<Scalars['UUID']['input']>;
  shouldEndAt?: InputMaybe<Scalars['Datetime']['input']>;
  shouldStartAt?: InputMaybe<Scalars['Datetime']['input']>;
  startedAt?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<WorkSlotStatus>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkSlotUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<WorkSlot>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isRepeatable: Scalars['Boolean']['output'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};


/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveargsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  QUERY = 'QUERY',
  /** Location adjacent to a mutation operation. */
  MUTATION = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  SUBSCRIPTION = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  FIELD = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  INLINE_FRAGMENT = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VARIABLE_DEFINITION = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  SCHEMA = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  SCALAR = 'SCALAR',
  /** Location adjacent to an object type definition. */
  OBJECT = 'OBJECT',
  /** Location adjacent to a field definition. */
  FIELD_DEFINITION = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  INTERFACE = 'INTERFACE',
  /** Location adjacent to a union definition. */
  UNION = 'UNION',
  /** Location adjacent to an enum definition. */
  ENUM = 'ENUM',
  /** Location adjacent to an enum value definition. */
  ENUM_VALUE = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  INPUT_OBJECT = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION'
}

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldargsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  description?: Maybe<Scalars['String']['output']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  kind: __TypeKind;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  specifiedByURL?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
  isOneOf?: Maybe<Scalars['Boolean']['output']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypefieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeenumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeinputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  SCALAR = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  OBJECT = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  INTERFACE = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  UNION = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  ENUM = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  INPUT_OBJECT = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  LIST = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NON_NULL = 'NON_NULL'
}

export type IntrospectQueryVariables = Exact<{ [key: string]: never; }>;


export type IntrospectQuery = { __schema: { queryType: { fields?: Array<{ name: string }> | null } } };



export const IntrospectDocument = `
    query Introspect {
  __schema {
    queryType {
      fields {
        name
      }
    }
  }
}
    `;

export const useIntrospectQuery = <
      TData = IntrospectQuery,
      TError = unknown
    >(
      variables?: IntrospectQueryVariables,
      options?: Omit<UseQueryOptions<IntrospectQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<IntrospectQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<IntrospectQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Introspect'] : ['Introspect', variables],
    queryFn: fetcher<IntrospectQuery, IntrospectQueryVariables>(IntrospectDocument, variables),
    ...options
  }
    )};

useIntrospectQuery.getKey = (variables?: IntrospectQueryVariables) => variables === undefined ? ['Introspect'] : ['Introspect', variables];


useIntrospectQuery.fetcher = (variables?: IntrospectQueryVariables, options?: RequestInit['headers']) => fetcher<IntrospectQuery, IntrospectQueryVariables>(IntrospectDocument, variables, options);
