//Session Storageに保存したユーザー名を取得
const userName = sessionStorage.getItem('getName');
//id名nameのhtml要素を取得して、divタグ内に上の行で取得したユーザー名を入れる
document.getElementById('name').textContent = userName;

//Session Storageに保存したユーザーのフリガナを取得
const userFurigana = sessionStorage.getItem('getFurigana');
//id名furiganaのhtml要素を取得して、divタグ内に上の行で取得したユーザーのフリガナを入れる
document.getElementById('furigana').textContent = userFurigana;

//Session Storageに保存したユーザーのメールアドレスを取得
const userEmail = sessionStorage.getItem('getEmail');
//id名emailのhtml要素を取得して、divタグ内に上の行で取得したユーザーのメールアドレスを入れる
document.getElementById('email').textContent = userEmail;

//Session Storageに保存したユーザーの電話番号を取得
const userPhone = sessionStorage.getItem('getPhone');
//id名phoneのhtml要素を取得して、divタグ内に上の行で取得したユーザーの電話番号を入れる
document.getElementById('phone').textContent = userPhone;

//Session Storageに保存したユーザーの郵便番号を取得
const userPost = sessionStorage.getItem('getPost');
//id名postのhtml要素を取得して、divタグ内に上の行で取得したユーザーの郵便番号を入れる
document.getElementById('post').textContent = userPost;

//Session Storageに保存したユーザーの住所を取得
const userAddress = sessionStorage.getItem('address');
//id名addressのhtml要素を取得して、divタグ内に上の行で取得したユーザーの住所を入れる
document.getElementById('address').textContent = userAddress;

//Session Storageに保存した備考欄の内容を取得
const userNote = sessionStorage.getItem('note');
//id名noteのhtml要素を取得して、divタグ内に上の行で取得した備考欄の内容を入れる
document.getElementById('note').textContent = userNote;