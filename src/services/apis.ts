import axios from "axios";

export const fetchCountries = async () => {
  const response = await fetch("https://api.countrystatecity.in/v1/countries", {
    headers: {
      "X-CSCAPI-KEY": "VFJDUnVZRnUxMVZDeUVYVUtDdE1yYVg5ZE1XVnFjdDVEemI2QlY3eg=="
    }
  });
  const countries = await response.json();
  return countries;
};

export const fetchStates = async (countryCode: string) => {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
    headers: {
      "X-CSCAPI-KEY": "VFJDUnVZRnUxMVZDeUVYVUtDdE1yYVg5ZE1XVnFjdDVEemI2QlY3eg=="
    }
  });
  const states = await response.json();
  return states;
};

export const fetchDistricts = async (countryCode: string, stateCode: string) => {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
    headers: {
      "X-CSCAPI-KEY": "VFJDUnVZRnUxMVZDeUVYVUtDdE1yYVg5ZE1XVnFjdDVEemI2QlY3eg=="
    }
  });
  const districts = await response.json();
  return districts;
};

export const publicGateway = axios.create({
  baseURL: 'https://utils.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});