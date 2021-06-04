const franc=require('franc');
const langs=require('langs');
const colors=require('colors');
const langcode=franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট');
const language=langs.where('3',langcode);
console.log(language.name.rainbow);
