class NameListValidator {
  static isEmptyList(arr) {
    return arr.length === 1 && arr[0] === '';
  }
  static hasLessThanMin(arr, min) {
    return arr.length < min;
  }
  static hasEmptyItem(arr) {
    return arr.includes('');
  }
  static isEachItemNameOverMaxLength(arr, maxLength) {
    for (let item of arr) {
      if (item.length > maxLength) {
        return true;
      }
    }
  }
  static isDuplicated(arr) {
    return arr.length !== new Set(arr).size;
  }
}

const ERROR_MESSAGE = {
  EMPTY_INPUT: '자동차 이름을 입력해주세요.',
  LESS_INPUT: '자동차 이름은 최소 2개 이상 입력해주세요.',
  EMPTY_NAME: '자동차 이름에 공백은 사용할 수 없습니다.',
  OVER_LENGTH: '자동차 이름은 5자 이하로 콤마로 구분하여 입력해주세요.',
  DUPLICATED_NAMES: '중복된 이름은 사용할 수 없습니다.',
};

const CONSTANT = {
  MIN_LIST_LENGTH: 2,
  MAX_NAME_LENGTH: 5,
};

export const getInvalidMessage = (carNames) => {
  if (NameListValidator.isEmptyList(carNames)) {
    return ERROR_MESSAGE.EMPTY_INPUT;
  }
  if (NameListValidator.hasLessThanMin(carNames, CONSTANT.MIN_LIST_LENGTH)) {
    return ERROR_MESSAGE.LESS_INPUT;
  }
  if (NameListValidator.hasEmptyItem(carNames)) {
    return ERROR_MESSAGE.EMPTY_NAME;
  }
  if (
    NameListValidator.isEachItemNameOverMaxLength(
      carNames,
      CONSTANT.MAX_NAME_LENGTH
    )
  ) {
    return ERROR_MESSAGE.OVER_LENGTH;
  }
  if (NameListValidator.isDuplicated(carNames)) {
    return ERROR_MESSAGE.DUPLICATED_NAMES;
  }
};
