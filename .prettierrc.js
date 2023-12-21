// .prettierrc.js 파일은 nodejs의 모듈시스템을 따른다.
module.exports = {
  semi: false, // 코드 끝에 세미콜론 자동추가 X
  trailingComma: 'es5', // 유효한 위치에만 후행 콤마 추가 
  singleQuote: true,  // 문자열 작성시 홑따옴표를 사용
  jsxSingleQuote: false, // jsx내부에서 문자열에 이중따옴표"" 사용 
  printWidth: 80, // 한줄 최대 길이 80자 
  tabWidth: 2, // 탭 너비를 2개의 공백으로
  endOfLine: 'auto' // 줄바꿈 문자에 대해 파일시스템 기본 설정으로 사용
}