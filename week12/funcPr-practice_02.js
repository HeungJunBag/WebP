const names = ['alice', 'bob', 'charlie'];

// 1. 모든 글자를 대문자로 변환
const uppercasedNames = names.map(name => name.toUpperCase());
console.log("대문자로 변환:", uppercasedNames);

// 2. 첫 글자만 대문자로 변환
const capitalStartNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log("첫 글자만 대문자:", capitalStartNames);