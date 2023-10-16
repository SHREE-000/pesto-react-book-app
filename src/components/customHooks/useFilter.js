import React from 'react'

const useFilter = (searchElem, bookList) => {
    const regex = new RegExp(searchElem, 'i');
    const filteredValue = bookList.filter(item =>
        regex.test(item.title));    
  return filteredValue;
}

export default useFilter;