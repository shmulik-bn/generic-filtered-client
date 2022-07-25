import { OBJECT_TYPE } from "./constans/default-consts";

        
export function getProperties(obj, path = []) {
  try {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === OBJECT_TYPE && value !== null) {
        path.push(key);
        result.push(...getProperties(value, path));
        path.pop();
      } else {
        result.push([...path, key]);
      }
    }
    return result;
  } catch (error) {
    console.log('error:', error);
  }
  }
  
  export function getValue(obj, path) {
    let current = obj;
    for (const property of path) {
      if (!current) return undefined;
      current = current[property];
    }
  
    return current;
  }
  
  export function filter(array, property, query) {
    return array.filter(item => filterProperty(item, property, query));
  }
  
  export function filterProperty(obj, property, query) {
    try {
      const value = obj[property];
    if (typeof value === OBJECT_TYPE && value !== null) {
      return Object.keys(value).some(key => filterProperty(value, key, query));
    } else {
      return value?.toString().toLowerCase().includes(query);
    }
    } catch (error) {
      console.log('error:', error);
    }
  }