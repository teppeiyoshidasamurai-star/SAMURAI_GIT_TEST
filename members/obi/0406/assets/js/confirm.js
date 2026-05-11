const showEmail = sessionStorage.getItem('getEmail'); //セッションストレージに保存したメールアドレスの値を取得する
document.getElementById('email').textContent = showEmail; //div要素を取得しセッションストレージから取得した値を表示する

const showKanji = sessionStorage.getItem('getKanji'); //セッションストレージに保存した氏名の値を取得する
document.getElementById('kanji').textContent = showKanji;

const showFurigana = sessionStorage.getItem('getFurigana'); //セッションストレージに保存したメールアドレスの値を取得する
document.getElementById('furigana').textContent = showFurigana;

const showZip1 = sessionStorage.getItem('getZip1'); //セッションストレージに保存した郵便番号1の値を取得する
document.getElementById('zip1').textContent = showZip1;

const showZip2 = sessionStorage.getItem('getZip2'); //セッションストレージに保存した郵便番号2の値を取得する
document.getElementById('zip2').textContent = showZip2;

const showAddress1 = sessionStorage.getItem('getAddress1'); //セッションストレージに保存した都道府県の値を取得する
document.getElementById('address1').textContent = showAddress1;

const showAddress2 = sessionStorage.getItem('getAddress2'); //セッションストレージに保存した市区町村の値を取得する
document.getElementById('address2').textContent = showAddress2;

const showAddress3 = sessionStorage.getItem('getAddress3'); //セッションストレージに保存した丁目・番地、建物名・号室の値を取得する
document.getElementById('address3').textContent = showAddress3;

const showPhone1 = sessionStorage.getItem('getPhone1'); //セッションストレージに保存した電話番号の値を取得する
document.getElementById('phone1').textContent = showPhone1;

const showPhone2 = sessionStorage.getItem('getPhone2'); //セッションストレージに保存した携帯電話番号の値を取得する
document.getElementById('phone2').textContent = showPhone2;

const showPhone3 = sessionStorage.getItem('getPhone3'); //セッションストレージに保存したFAX番号の値を取得する
document.getElementById('phone3').textContent = showPhone3;

const getReset = document.getElementById('getReset'); //「やり直す」ボタンのDOM要素を取得
getReset.addEventListener('click', () => { //「やり直す」ボタンを押したときのイベント処理を追加
    location.href = 'kataroguform.html'; //カタログ請求フォームへ遷移
});

