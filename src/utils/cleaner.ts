/* 
  Clean string from '        str     ing        ' to 'string'
*/
export const cleanQueryString = (string: string) => {
  return string.trim().replace(/\s+/g, ' ')
}