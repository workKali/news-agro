export interface NewsCountryModel {
  daysNoDisplayAgain: number;
  countries: Country[];
}

export interface Country {
  countryId: number;
  advertisements: Advertisement[];
}

export interface Advertisement {
  activeUntil?: Date;
  reference: string;
  isActive: boolean;
  es: ValueAdvertisement;
  en: ValueAdvertisement;
  link: string;
}

export interface ValueAdvertisement {
  title: Title;
  subtitle: string;
}

export interface Title {
  newT: string;
  seeLater: string;
  defaultT: string;
}
