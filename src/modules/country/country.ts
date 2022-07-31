import { stdnum } from 'stdnum';
import { ParamsToValidateIdentificator } from './country.dto';

export function getTaxesByCountryCode(countryCode: string): string[] {
  if (!countryCode) throw new Error('Your countryCode is missing');

  const country = Object.keys(stdnum[countryCode.toUpperCase()]) || [];
  return country;
}

export function isValidIdentificatorByTax(params: ParamsToValidateIdentificator): boolean {
  if (!params) throw new Error('You missing properties values.');
  const { countryCode, identificator, taxIdentificator } = params;
  const { isValid, error } = stdnum[countryCode.toUpperCase()][taxIdentificator.toLowerCase()].validate(identificator);
  if (error) throw new Error(error.message);

  return isValid;
}

export function isValidIdentificatorByAllTax(countryCode: string, identificator: string): boolean {
  if (!countryCode || !identificator) {
    throw new Error('You missing some properties values.');
  }

  countryCode = countryCode.toUpperCase();
  const taxes = getTaxesByCountryCode(countryCode);
  let validated = false;

  if (taxes.length > 0) {
    for (const tax of taxes) {
      if (validated) break;
      const { isValid } = stdnum[countryCode][tax].validate(identificator);
      validated = isValid;
    }
  }

  return validated;
}

export function getCountriesCodeAvailable(): string[] {
  const countries = Object.keys(stdnum) || [];
  return countries;
}

export function isValidCountryCode(countryCode: string): boolean {
  const countries = getCountriesCodeAvailable();

  if (!countries.includes(countryCode)) {
    throw new Error("Sorry your country code it's not available to use.");
  }

  return true;
}
