export enum HistoryTypes {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  REJECTED = 'REJECTED',
  RETURNED = 'RETURNED',
  APPROVED = 'APPROVED',
  DELETED = 'DELETED',
}

export enum StatusTypes {
  CREATED = 'CREATED',
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  RETURNED = 'RETURNED',
  REJECTED = 'REJECTED',
}

export enum RolesTypes {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum ButtonColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  TRANSPARENT = 'transparent',
}

export enum ServerErrors {
  USER_NOT_FOUND = `Email not found.`,
  WRONG_PASSWORD = 'Wrong password.',
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  USER_EXIST = 'User already exists.',
  WRONG_OLD_PASSWORD = 'Wrong old password.',
  PARAMETERS_VALIDATION_ERROR = 'Parameters validation error!',
  NOT_FOUND = 'Not found.',
}
export enum Resources {
  LOGIN = 'auth/login',
  CAN_EDIT = 'canEdit',
  FORMS_GROUPS = 'forms/groups',
  MAPS_AUTH = 'maps/auth',
  GEOM = 'geom',
  REFRESH_TOKEN = 'auth/refresh',
  VERIFY_USER = 'auth/change/verify',
  REMIND_PASSWORD = 'auth/remind',
  E_GATES_LOGIN = 'auth/evartai/login',
  E_GATES_SIGN = 'auth/evartai/sign',
  GENERATE_API_KEY = 'tenants/generateApiKey',
  USERS = 'users',
  FORMS = 'forms',
  MY_FORMS = 'forms/my',
  HISTORY = 'history',
  CREATED_BY = 'createdBy',
  UPLOAD = 'upload',
  CATEGORIES = 'categories',
  ATTENDANCE_TIMES = 'attendanceTimes',
  ADDITIONAL_INFOS = 'additionalInfos',
  ATTENDANCE_INFOS = 'attendanceInfos',
  VISIT_INFOS = 'visitInfos',
  AGREE_TO_TERMS_OF_SERVICE = 'users/agreeToTermsOfService',
  TENANTS = 'tenants',
}

export enum Populations {
  ROLE = 'role',
  PARENT = 'parent',
  VISIT_INFO = 'visitInfo',
  SUB_CATEGORIES = 'subCategories',
  CAN_EDIT = 'canEdit',
  GEOM = 'geom',
  ATTENDANCE_INFO = 'attendanceInfo',
  CHILDREN = 'children',
  ATTENDANCE_TIME = 'attendanceTime',
  TENANT = 'tenant',
}

export enum SortFields {
  CREATED_AT = '-createdAt',
  LAST_NAME = 'lastName',
  NAME = 'name',
}

export enum TagColors {
  BLUE = 'blue',
  BROWN = 'brown',
  GREEN = 'green',
  PINK = 'pink',
  VIOLET = 'violet',
  ORANGE = 'orange',
  SKYBLUE = 'skyblue',
  GREY = 'grey',
}

export const colorsByStatus = {
  [StatusTypes.CREATED]: TagColors.SKYBLUE,
  [StatusTypes.SUBMITTED]: TagColors.VIOLET,
  [StatusTypes.APPROVED]: TagColors.GREEN,
  [StatusTypes.RETURNED]: TagColors.BLUE,
  [StatusTypes.REJECTED]: TagColors.PINK,
};

export enum TableItemWidth {
  MEDIUM = '76px',
  SMALL = '40px',
  LARGE = '30px',
}

export enum ServerErrorCodes {
  NOT_FOUND = '404',
  NO_PERMISSION = '401',
}

export enum Season {
  WINTER = 'WINTER',
  SUMMER = 'SUMMER',
  SPRING = 'SPRING',
  AUTUMN = 'AUTUMN',
  ALL = 'ALL',
}

export const availableMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
