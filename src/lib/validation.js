export function validateEmail(inputtxt) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(inputtxt);
  }
  
  export function emptyTextValidation(inputtxt) {
    if (inputtxt === '' || inputtxt === undefined || inputtxt === null || inputtxt === 'null' || inputtxt.trim() === '') {
      return false;
    }
    return true;
  }
 
  export function validateImage(URL) {
    const re =/\.(jpeg|jpg|gif|png)$/;
    return re.test(URL);
  }