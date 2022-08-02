# Common Utils

Hello!, i'm doing creating functionalities for use a day a day on work

## Section Country

We have a many functionalities for use like that:

### Get Countries Available for Use

```Typescript
import { getCountriesCodeAvailable } from 'utils-skywolf';

const contriesAvailable = getCountriesCodeAvailable();

// example response: ['CL', 'AR', etc]
```

### Validate Country Code

```Typescript
import { isValidCountryCode } from 'utils-skywolf';

// 'countryCode' is valid in UpperCase and LowerCase 
const countryCode = 'cl';
const isValidCountry = isValidCountryCode(countryCode);
console.log(isValidCountry); // response: true
```

### Validate Identificator By All Tax

```Typescript
import { isValidIdentificatorByAllTax } from 'utils-skywolf';

// 'identificator' also can be '21749812-0' or '217498120' in this case
const identificator = '21749812-0';
const countryCode = 'cl';
const isValidIdentificator = isValidIdentificatorByAllTax(countryCode, identificator);

console.log(isValidIdentificator); // response true
```

### Validate Identificator By Tax

```Typescript
import { isValidIdentificatorByTax } from 'utils-skywolf';

const params = {
    countryCode: 'cl',
    identificator: '21749812-0',
    taxIdentificator: 'rut'
};

const isValidIdentificator = isValidIdentificatorByTax(params);
console.log(isValidIdentificator); // returns: true
```
