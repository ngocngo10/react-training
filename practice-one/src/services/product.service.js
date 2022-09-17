import { get, remove, create, update } from '../helpers/service.helper';

/**
 * Call to API from the service helper to get all smartphones
 * @returns {array} smartphone list
 */
const getSmartphoneList = async () => {
  const baseUrl = import.meta.env.VITE_ENDPOINT_PRODUCTS;
  const smartphoneList = await get(`smartphones`);
  localStorage.setItem('smartphone-list', JSON.stringify(smartphoneList));
  return smartphoneList;
};

const productService = { getSmartphoneList };

export default productService;
