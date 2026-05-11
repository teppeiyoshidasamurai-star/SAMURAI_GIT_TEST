const showEmail = sessionStorage.getItem('getEmail'); //セッションストレージに保存したメールアドレスの値を取得する
document.getElementById('email').textContent = showEmail; //div要素を取得しセッションストレージから取得した値を表示する

const showKanji = sessionStorage.getItem('getKanji'); //セッションストレージに保存した氏名の値を取得する
document.getElementById('kanji').textContent = showKanji;

const showFurigana = sessionStorage.getItem('getFurigana'); //セッションストレージに保存したメールアドレスの値を取得する
document.getElementById('furigana').textContent = showFurigana;

const showPhone1 = sessionStorage.getItem('getPhone1'); //セッションストレージに保存した電話番号の値を取得する
document.getElementById('phone1').textContent = showPhone1;

const showPhone2 = sessionStorage.getItem('getPhone2'); //セッションストレージに保存した携帯電話番号の値を取得する
document.getElementById('phone2').textContent = showPhone2;

const showPhone3 = sessionStorage.getItem('getPhone3'); //セッションストレージに保存したFAX番号の値を取得する
document.getElementById('phone3').textContent = showPhone3;

const showKind = sessionStorage.getItem('getKind'); //お問い合わせ分類を取得
document.getElementById('kind').textContent = showKind;

const showContent = sessionStorage.getItem('getContent'); //お問い合わせ内容を取得
document.getElementById('content').textContent = showContent;

const showContact = sessionStorage.getItem('getContact'); //ご連絡方法を取得
document.getElementById('contact').textContent = showContact;

const getReset = document.getElementById('getReset'); //「やり直す」ボタンのDOM要素を取得
getReset.addEventListener('click', () => { //「やり直す」ボタンを押したときのイベント処理を追加
    location.href = 'question.html'; //お問い合わせフォームに遷移
});

