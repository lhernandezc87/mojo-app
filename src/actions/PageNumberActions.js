export function updatePageNumber(page=1) {
  return {
    type: 'UPDATE_PAGENUMBER',
    payload: page
  }
}
