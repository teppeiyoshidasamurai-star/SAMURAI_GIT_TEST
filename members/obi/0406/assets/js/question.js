const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const getEmail = document.forms.form1.email.value;
    const getKanji = document.forms.form1.kanji.value;
    const getFurigana = document.forms.form1.furigana.value;
    const getPhone1 = document.forms.form1.phone1.value;
    const getPhone2 = document.forms.form1.phone2.value; //フォームの携帯電話番号欄の値を取得
    const getPhone3 = document.forms.form1.phone3.value;
    const getContent = document.forms.form1.content.value;
    const getKind = document.forms.form1.kinds.value;
    const getContact = document.forms.form1.kind.value;
    const checkbox = document.getElementById('checkbox');

    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerHTML = '';

    let hasError = false; //エラーがあるかどうかチェックする変数

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //メールアドレスの正解パターン
    if (getEmail === '') {
        hasError = true; //エラーあり
        const errorEmail = document.createElement('p');
        errorEmail.textContent = '*メールアドレスを入力してください';
        errorMessage.appendChild(errorEmail);
    } else if (!emailPattern.test(getEmail)) { //メールアドレスが正解パターンでなければ
        hasError = true; //エラーあり
        const emailNg = document.createElement('p'); //エラーメッセージを書くpタグを生成
        emailNg.textContent = '*メールアドレスの入力形式が正しくありません'; //エラーメッセージの内容
        errorMessage.appendChild(emailNg); //子要素として表示
    };


    if (getKanji === '') {
        hasError = true; //エラーあり
        const errorName = document.createElement('p');
        errorName.textContent = '*氏名を入力してください';
        errorMessage.appendChild(errorName);
    };

    if (getFurigana === '') {
        hasError = true; //エラーあり
        const errorFurigana = document.createElement('p');
        errorFurigana.textContent = '*フリガナを入力してください';
        errorMessage.appendChild(errorFurigana);
    };

    const phone1Pattern = /^(0\d{1,4}-?\d{1,4}-?\d{4})$/; //電話番号の正解パターン
    if (getPhone1 !== '' && !phone1Pattern.test(getPhone1)) { //電話番号欄が空でないかつ電話番号が正解パターンでなければ
        hasError = true; //エラーあり
        const phone1Ng = document.createElement('p');  //エラーメッセージを書くpタグを生成
        phone1Ng.textContent = '*電話番号の入力形式が正しくありません'; //エラーメッセージの内容
        errorMessage.appendChild(phone1Ng);  //子要素として表示
    }

    if (getPhone1 === '' && getPhone2 === '') { //電話番号欄が空かつ携帯電話欄も空なら
        hasError = true; //エラーあり
        const errorPhone2 = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorPhone2.textContent = '*電話番号もしくは携帯電話番号を入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorPhone2);   //子要素として表示
    } else if (getPhone2 !== '' && !phone1Pattern.test(getPhone2)) { //携帯電話番号欄が空でないかつ携帯電話番号が
        hasError = true; //エラーあり
        const phone2Ng = document.createElement('p'); //エラーメッセージを書くpタグを生成
        phone2Ng.textContent = '*携帯電話番号の入力形式が正しくありません'; //エラーメッセージの内容
        errorMessage.appendChild(phone2Ng); //子要素として表示
    };

    if (getPhone3 !== '' && !phone1Pattern.test(getPhone3)) {
        hasError = true;
        const phone3Ng = document.createElement('p');
        phone3Ng.textContent = '*FAX番号の入力形式が正しくありません';
        errorMessage.appendChild(phone3Ng);
    };

    if (getContent === '') {
        hasError = true;
        const errorcontent = document.createElement('p');
        errorcontent.textContent = '*お問い合わせ内容を入力してください';
        errorMessage.appendChild(errorcontent);
    };

    if (!checkbox.checked) {
        hasError = true; //エラーあり
        const errorCheckBox = document.createElement('p');
        errorCheckBox.textContent = '*「同意する」にチェックを入れてください';
        errorMessage.appendChild(errorCheckBox);
    };


    if (hasError) {
        return; //エラーがあったら止める
    };

    sessionStorage.setItem('getEmail', getEmail); //セッションストレージにメールアドレス欄の値を保存
    sessionStorage.setItem('getKanji', getKanji); //氏名欄の値を保存
    sessionStorage.setItem('getFurigana', getFurigana); //フリガナ欄の値を保存
    sessionStorage.setItem('getPhone1', getPhone1); //電話番号欄の値を保存
    sessionStorage.setItem('getPhone2', getPhone2); //携帯電話番号欄の値を保存
    sessionStorage.setItem('getPhone3', getPhone3); //FAX番号欄の値を保存
    sessionStorage.setItem('getKind', getKind); //お問い合わせ分類の値を取得
    sessionStorage.setItem('getContent', getContent); //お問い合わせフィールドの内容を保存
    sessionStorage.setItem('getContact', getContact); //ご連絡方法の値を取得
    location.href = 'question_confirm.html'; //入力確認画面へ遷移

});