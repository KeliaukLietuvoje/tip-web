import { HistoryTypes, RolesTypes, Season, ServerErrors, StatusTypes } from './constants';

export const emptyStateLabels = {
  form: 'Jūs neturite sukūrę turizmo objektų. Sukurkite ',
  user: 'Jūs neturite Naudotojų. Sukurkite ',
  request: 'Jūs neturite pateikę prašymų. Pateikite ',
  excerpt: 'Jūs neturite pateikę išrašų prašymų Pateikite ',
};

export const descriptions = {
  photoAuthor:
    'Nenurodžius autorystės, nuotraukos autoriumi automatiškai bus nurodytas subjektas įkėlęs nuotrauką į TIP',
  durationTime:
    'Lankymo trukmė – kiek, tikėtina, kad turistas praleis laiko besilankydamas šiame objekte?',
  tip: 'Turistinių išteklių posistemė',
  cantLogin:
    'Kreipkitės į savo organizacijos atstovą, kad jis pridėtų Jus prie organizacijos. Jeigu kuriate naują organizaciją - kreipkitės į ',
  apiKey:
    'Kuomet API raktas yra sugeneruojamas, jį nukopijuokite ir saugokite saugiai. Saugumo sumetimais jis nebus rodomas pakartotinai. Svarbu atsiminti, kad sugeneravus naują API raktą, senasis nustoja galioti',
  getDataAboutPlaces:
    'Norėdami matyti tikslų radaviečių žemėlapį, pateikite prašymą gauti duomenis.',
  getMoreDataAboutPlaces:
    'Norėdami matyti daugiau radaviečių žemėlapyje, pateikite prašymą gauti duomenis.',
  mainDescription:
    'Elektroninių paslaugų sistema teikianti ir gaunanti duomenis bei informaciją apie vandens telkinius.',
  forgotPasswordDescription:
    'Jeigu pamiršote slaptažodį, įrašykite savo el. pašto adresą ir mes padėsime jį atkurti',
  instructionSentDescription: 'Jūsų nurodytu el. paštu išsiuntėme prisijungimo instrukciją',
  resetPasswordDescription: 'Naujas slaptažodis neturi sutapti su senuoju slaptažodžiu',
  tableNotFound: 'Atsiprašome nieko neradome pagal pasirinktus filtrus',
  footerTitle: '© VšĮ „Keliauk Lietuvoje“',
  footerDescription:
    'Duomenys apie įmonę kaupiami ir saugomi Juridinių asmenų registre. Įmonės kodas: 304971997 | Adresas: Gedimino pr. 38, LT-01104 Vilnius Telefonas: +370 698 035 09 | El. paštas: info@lithuania.travel',
};
export const emptyStateUrlLabels = {
  form: 'naują  turizmo objektą',
  user: 'naują naudotoją',
  request: 'naują prašymą',
};

export const mapsHost = import.meta.env.VITE_MAPS_HOST || 'https://maps.biip.lt';

export const subTitles = {
  dataUpdate: 'Duomenų koregavimas',
  legalPerson: 'Juridinis asmuo',
};

export const formFiltersLabels = {
  createdFrom: 'Sukūrimo data nuo',
  status: 'Būsena',
  createdTo: 'Sukūrimo data iki',
  name: 'Pavadinimas',
  code: 'Kodas',
};

export const userFilterLabels = {
  firstName: 'Vardas',
  lastName: 'Pavardė',
};

export const usersLabels = {
  fullName: { label: 'Vardas, pavardė', show: true },
  email: { label: 'Elektroninis paštas', show: true },
  phone: { label: 'Telefono numeris', show: true },
};

export const pageTitles = {
  form: (id: string) => `Anketa nr. ${id}`,
  profile: 'Profilis',
  newForm: 'Nauja anketa',
  inviteTenantUser: 'Pakviesti darbuotoją',
  updateTenantUser: 'Atnaujinti darbuotoją',
  forms: 'Turizmo objektai',
  users: 'Naudotojai',
  updateProfile: 'Atnaujinti profilį',
  tenantUsers: 'Įstaigos darbuotojai',
  apiKey: 'API rakto generavimas',
};

export const menuLabels = {
  forms: 'Turizmo išteklių objektai',
  profileInfo: 'Profilio informacija',
  tenantUsers: 'Įstaigos darbuotojai',
  apiKey: 'API raktas',
  myProfile: 'MANO PASKYRA',
};
export const buttonsTitles = {
  returnToLogin: 'Grįžti į prisijungimo langą',
  agree: 'Perskaičiau ir sutinku',
  clearAll: 'Išvalyti viską',
  download: 'Atsisiųsti',
  update: 'Atnaujinti',
  add: 'Pridėti',
  or: 'arba',
  forgotPassword: 'Pamiršau slaptažodį',
  login: 'Prisijungti',
  eLogin: 'Prisijungti per el. valdžios vartus',
  fillOutRequest: 'Pildyti prašymą',
  newExcerpt: 'Naujas prašymas',
  inviteTenantUser: 'Pakviesti darbuotoją',
  columns: 'Stulpeliai',
  addNew: '+ Pridėti naują',
  newForm: 'Naujas turizmo objektas',
  logout: 'Atsijungti',
  newUser: 'Naujas naudotojas',
  save: 'Išsaugoti',
  submit: 'Pateikti',
  back: 'Grįžti atgal',
  generate: 'Generuoti',
  filter: 'Filtruoti',
  resetPassword: 'Atstatyti slaptažodį',
  createPassword: 'Nustatyti slaptažodį',
  eGates: 'Prisijungti per El. valdžios vartus',
  edit: 'Atnaujinti',
  view: 'Peržiūrėti',
  removeTenantUser: 'Pašalinti darbuotoją',
  removeForm: 'Pašalinti turizmo objektą',
  deleteGroup: 'Ištrinti grupę',
  sarasas: 'Sąrašas',
  zemelapis: 'Žemėlapis',
  padalintas: 'Padalintas vaizdas',
  newTenant: 'Nauja įmonė',
  cancel: 'Atšaukti',
  delete: 'Ištrinti',
};

export const formLabels = {
  accessNotGranted: 'Nesuteikta prieiga',
  visitDuration: 'Lankymo trukmė (valandos)',
  apiKey: 'Rakto generavimo informacija',
  categories: 'Kategorijos',
  LTInfo: 'Lietuviška informacija',
  EnInfo: 'Angliška informacija',
  selectProfile: 'Pasirinkite paskyrą',
  login: 'Prisijungti',
  history: 'Istorija',
  tenantUserInfo: 'Darbuotojo kontaktinė informacija',
  name: 'Pavadinimas',
  description: 'Aprašymas',
  profileUpdated: 'Profilis atnaujintas',
  map: 'Žemėlapis',
  photos: 'Nuotraukos',
  profileInfo: 'Profilio informacija',
  additionalInfo: 'Papildoma informacija',
  contactInfo: 'Prašymo teikėjo kontaktinė informacija',
  documents: 'Dokumentai',
};
export const inputLabels = {
  apiKey: 'API raktas',
  agreeWithTermsOfService: 'Sutinku su taisyklėmis',
  copy: 'Kopijuoti',
  name: 'Pavadinimas',
  generatedKey: 'Sugeneruotas raktas',
  author: 'Autorius',
  attendanceTime: 'Lankymo trukmė',
  makeMainPhoto: 'Padaryti pagrindine nuotrauka',
  mainPhoto: 'Pagrindinė nuotrauka',
  uploadPhotosWithNames: 'Pridėti nuotrauką / -as',
  visitInfo: 'Ar objektas pritaikytas lankymui?',
  from: 'Nuo',
  to: 'Iki',
  allDay: 'Visa diena',
  isPublic: 'Ar viešinti ? ',
  priceStatus: 'Kainos statusas',
  additionalInfo: 'Kita papildoma informacija',
  attendanceInfo: 'Ar objektas bei jo aplinka yra visiškai sutvarkyta ir pritaikyta lankymui?',
  isAdaptedForForeigners: 'Ar objektas yra pritaikytas užsienio turistams?',
  season: 'Sezoniškumas',
  categories: 'Kategorijos',
  parentCategory: 'Tėvinė kategorija',
  description: 'Aprašymas',
  url: 'Interneto puslapio adresas',
  audio: 'Audiogido nuoroda',
  subCategories: 'Subkategorijos',
  hydrostaticId: 'Hidrostatinio unikalus identifikatorius',
  attribute: 'Atributas',
  noData: 'Nėra duomenų',
  chooseOption: 'Pasirinkite',
  comment: 'Komentaras',
  or: 'arba',
  objects: 'Objektai',
  uploadPhotos: 'Įkelti nuotraukas',
  pressToWant: 'Paspauskite norėdami',
  uploadOrDragFilesHere: 'įkelti arba įtempkite failus čia',
  fileTypesAndMaxSize: 'PDF, PNG, JPEG, JPG (maks. 20MB)',
  profiles: 'Paskyros',
  firstName: 'Vardas',
  lastName: 'Pavardė',
  phone: 'Telefonas',
  email: 'El. pašto adresas',
  legalPersonName: 'Juridinio asmens pavadinimas',
  personalCode: 'Asmens kodas',
  groupUsers: 'Grupės naudotojai',
  role: 'Rolė',
  quantity: 'vnt.',
  noOptions: 'Nėra pasirinkimų',
  password: 'Slaptažodis',
};

export const roleLabels = {
  [RolesTypes.ADMIN]: 'Administratorius',
  [RolesTypes.USER]: 'Naudotojas',
};

export const validationTexts = {
  formFillError: 'Neteisingai užpildyta forma',
  profileUpdated: 'Profilis atnaujintas',
  badUrlFormat: 'Blogai įvesta nuoroda',
  requireMap: 'Privalote pasirinkti vietą žemėlapyje',
  requirePhotos: 'Privalote įkelti nuotrauką',
  requireSpeciesType: 'Privalote pasirinkti bent vieną rūšių tipą',
  requireText: 'Privalomas laukelis',
  requireSelect: 'Privalote pasirinkti',
  badEmailFormat: 'Blogas el. pašto adresas',
  badPhoneFormat: 'Blogai įvestas telefono numeris',
  tooFrequentRequest: 'Nepavyko, per dažna užklausa prašome pabandyti veliau ',
  [ServerErrors.ENTITY_NOT_FOUND]: 'Blogas elektroninis paštas arba slaptažodis',
  [ServerErrors.USER_NOT_FOUND]: 'Naudotojo su tokiu el. paštu nėra',
  passwordsDoNotMatch: 'Slaptažodžiai nesutampa',
  error: 'Įvyko nenumatyta klaida, prašome pabandyti vėliau',
  validFirstName: 'Įveskite taisyklingą vardą',
  validLastName: 'Įveskite taisyklingą pavardę',
  badFileTypes: 'Blogi failų tipai',
  fileSizesExceeded: 'Viršyti failų dydžiai',
  personalCode: 'Neteisingas asmens kodo formatas',
  positiveNumber: 'Reikšmė turi būti didesnė už nulį',
  requireFiles: 'Privalote įkelti dokumentus',
  atLeastOneColumn: 'Turi būti pasirinktas bent vienas stulpelis',
};

export const deleteTitles = {
  tenantUser: 'Pašalinti darbuotoją',
  form: 'Pašalinti turizmo objektą',
};

export const deleteDescriptionFirstPart = {
  delete: 'Ar esate tikri, kad norite pašalinti',
};

export const deleteDescriptionSecondPart = {
  tenantUser: 'darbuotoją?',
  form: 'turizmo objektą?',
};

export const seasonLabels = {
  [Season.ALL]: 'Visus metus',
  [Season.AUTUMN]: 'Ruduo',
  [Season.SPRING]: 'Pavasaris',
  [Season.SUMMER]: 'Vasara',
  [Season.WINTER]: 'Žiema',
};

export const formHistoryLabels = {
  [HistoryTypes.CREATED]: 'Pateikta',
  [HistoryTypes.UPDATED]: 'Pateikta pakartotinai',
  [HistoryTypes.REJECTED]: 'Atmesta',
  [HistoryTypes.RETURNED]: 'Grąžinta taisyti',
  [HistoryTypes.APPROVED]: 'Priimta',
  [HistoryTypes.DELETED]: 'Ištrinta',
};

export const formStatusLabels = {
  [StatusTypes.CREATED]: 'Pateikta',
  [StatusTypes.SUBMITTED]: 'Pateikta pakartotinai ',
  [StatusTypes.RETURNED]: 'Grąžinta taisymui',
  [StatusTypes.REJECTED]: 'Atmesta',
  [StatusTypes.APPROVED]: 'Patvirtinta',
};
