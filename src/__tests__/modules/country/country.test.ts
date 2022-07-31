import { getCountriesCodeAvailable, isValidCountryCode, isValidIdentificatorByAllTax, isValidIdentificatorByTax, getTaxesByCountryCode } from '../../../modules/country/country';
import { ParamsToValidateIdentificator } from '../../../../lib/modules/country/country.dto';

test('getCountries OK', () => {
    const countries = getCountriesCodeAvailable();
    expect(countries).toBeInstanceOf(Array);
});

test('isValidCountryCode OK', () => {
    const countryCode = 'CL';
    const isValid = isValidCountryCode(countryCode);
    expect(isValid).toBe(true);
});

test('isValidIdentificatorByAllTax OK', () => {
    const isValid = isValidIdentificatorByAllTax('cl', '202007643');
    expect(isValid).toBe(true);
})

test('isValidIdentificatorByTax OK', () => {
    const params:ParamsToValidateIdentificator = {
        countryCode: 'cl',
        identificator: '20200764-3',
        taxIdentificator: 'rut'
    };
    const isValid = isValidIdentificatorByTax(params);
    expect(isValid).toBe(true);
})

test('getTaxesByCountryCode OK', () => {
    const taxes = getTaxesByCountryCode('cl');
    expect(taxes).toStrictEqual(['run', 'rut']);
});