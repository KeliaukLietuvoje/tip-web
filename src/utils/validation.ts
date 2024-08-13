import * as Yup from 'yup';
import { availableMimeTypes } from './constants';
import { validationTexts } from './texts';

const urlRegex =
  /^(https?:\/\/)?(www\.)?([a-z\d]([-a-z\d]{0,61}[a-z\d])?\.)+[a-z]{2,6}(:\d{1,5})?(\/.*)?$/i;

export const validateCreateTenantUser = Yup.object().shape({
  firstName: Yup.string().required(validationTexts.requireText).nullable(),
  lastName: Yup.string().required(validationTexts.requireText).nullable(),
  personalCode: Yup.string()
    .required(validationTexts.requireText)
    .length(11, validationTexts.personalCode)
    .nullable(),
  phone: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(/^(86|\+3706)\d{7}$/, validationTexts.badPhoneFormat)
    .nullable(),
  email: Yup.string()
    .email(validationTexts.badEmailFormat)
    .required(validationTexts.requireText)
    .nullable(),
});

export const validateFormRowInfo = (values: { name: string; items: { [key: string]: any } }) => {
  const errors: any = {};

  if (!values.name) errors.name = validationTexts.requireText;
  const items = values.items;

  Object.keys(items).forEach((key) => {
    if (items?.[key]) {
      Object.keys(items?.[key]).forEach((innerKey) => {
        if (!items?.[key]?.[innerKey]) {
          if (!errors.items) {
            errors.items = {};
          }

          if (!errors.items[key]) {
            errors.items[key] = {};
          }

          errors.items[key][innerKey] = validationTexts.requireText;
        }
      });
    }
  });

  return errors;
};

export const validateForm = Yup.object().shape({
  categories: Yup.array().min(1, validationTexts.requireSelect),
  seasons: Yup.array().min(1, validationTexts.requireSelect),
  urlLT: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(urlRegex, validationTexts.badUrlFormat),
  nameLT: Yup.string().required(validationTexts.requireText).nullable(),
  descriptionLT: Yup.string().required(validationTexts.requireText).nullable(),
  geom: Yup.object().required(validationTexts.requireMap).nullable(),
  visitInfo: Yup.object().required(validationTexts.requireSelect).nullable(),
});

export const validateUpdateTenantUser = Yup.object().shape({
  firstName: Yup.string().required(validationTexts.requireText).nullable(),
  lastName: Yup.string().required(validationTexts.requireText).nullable(),
  phone: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(/^(86|\+3706)\d{7}$/, validationTexts.badPhoneFormat)
    .nullable(),
  email: Yup.string().email(validationTexts.badEmailFormat).required(validationTexts.requireText),
});

export const validateProfileForm = Yup.object().shape({
  firstName: Yup.string()
    .required(validationTexts.requireText)
    .test('validFirstName', validationTexts.validFirstName, (values) => {
      if (/\d/.test(values || '')) return false;

      return true;
    }),
  lastName: Yup.string()
    .required(validationTexts.requireText)
    .test('validLastName', validationTexts.validLastName, (values) => {
      if (/\d/.test(values || '')) return false;

      return true;
    }),
  phone: Yup.string()
    .required(validationTexts.requireText)
    .trim()
    .matches(/(86|\+3706)\d{7}/, validationTexts.badPhoneFormat),
  email: Yup.string().email(validationTexts.badEmailFormat).required(validationTexts.requireText),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required(validationTexts.requireText).email(validationTexts.badEmailFormat),
  password: Yup.string().required(validationTexts.requireText),
});

export const validateFileTypes = (files: File[]) => {
  for (let i = 0; i < files.length; i++) {
    const availableType = availableMimeTypes.find((type) => type === files[i].type);
    if (!availableType) return false;
  }
  return true;
};
