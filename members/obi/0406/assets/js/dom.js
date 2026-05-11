
/*const btn = document.getElementById('submitBtn'); 

btn.addEventListener('click', () => { 
    const getEmail = document.forms.form1.email.value;
    console.log('メールアドレス:' + getEmail);
   
    const getKanji = document.forms.form1.kanji.value;
    console.log('氏名:' + getKanji);

    const getFurigana = document.forms.form1.furigana.value;
    console.log('フリガナ:' + getFurigana);

    const getZip1 = document.forms.form1.zip1.value;
    const getZip2 = document.forms.form1.zip2.value;
    console.log('郵便番号:' + getZip1 + '-' + getZip2);

    const getAddress1 = document.forms.form1.address1.value;
    console.log('都道府県:' + getAddress1);

    const getAddress2 = document.forms.form1.address2.value;
    console.log('市区町村:' + getAddress2);

    const getAddress3 = document.forms.form1.address3.value;
    console.log('丁目・番地/建物名・号室:' + getAddress3);

    const getPhone1 = document.forms.form1.phone1.value;
    console.log('電話番号:' + getPhone1);

    const getPhone2 = document.forms.form1.phone2.value;
    console.log('携帯電話番号:' + getPhone2);

    const getPhone3 = document.forms.form1.phone3.value;
    console.log('FAX番号:' + getPhone3);

}); */


const submitBtn = document.getElementById('submitBtn'); //ボタンの要素を取得

submitBtn.addEventListener('click', () => { //ボタンにイベント処理をつける
    const getEmail = document.forms.form1.email.value; //フォームのメールアドレス欄の値を取得
    const getKanji = document.forms.form1.kanji.value; //フォームの氏名欄の値を取得
    const getFurigana = document.forms.form1.furigana.value; //フォームのフリガナ欄の値を取得
    const getZip1 = document.forms.form1.zip1.value; //フォームの郵便番号1の値を取得
    const getZip2 = document.forms.form1.zip2.value; //フォームの郵便番号2の値を取得
    const getAddress1 = document.forms.form1.address1.value; //フォームの都道府県選択の値を取得
    const getAddress2 = document.forms.form1.address2.value; //フォームの市区町村欄の値を取得
    const getAddress3 = document.forms.form1.address3.value; //フォームの丁目・番地、建物名・号室の値を取得
    const getPhone1 = document.forms.form1.phone1.value; //フォームの電話番号欄の値を取得
    const getPhone2 = document.forms.form1.phone2.value; //フォームの携帯電話番号欄の値を取得
    const getPhone3 = document.forms.form1.phone3.value; //フォームのFAX番号欄の値を取得
    const checkbox = document.getElementById('checkbox'); //チェックボックスの要素を取得

    const errorMessage = document.getElementById('errorMessage'); //エラーメッセージを表示するときの親要素を取得
    errorMessage.innerHTML = ''; // エラーメッセージをリセット

    let hasError = false; //エラーがあるかどうかチェックする変数


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //メールアドレスの正解パターン
    if (getEmail === '') { //メールアドレス欄が空なら
        hasError = true; //エラーあり
        const errorEmail = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorEmail.textContent = '*メールアドレスを入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorEmail); //子要素として表示
    } else if (!emailPattern.test(getEmail)) { //メールアドレスが正解パターンでなければ
        hasError = true; //エラーあり
        const emailNg = document.createElement('p'); //エラーメッセージを書くpタグを生成
        emailNg.textContent = '*メールアドレスの入力形式が正しくありません'; //エラーメッセージの内容
        errorMessage.appendChild(emailNg); //子要素として表示
    };

    if (getKanji === '') { //氏名欄が空なら
        hasError = true; //エラーあり
        const errorName = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorName.textContent = '*氏名を入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorName);   //子要素として表示
    };


    if (getFurigana === '') { //フリガナ欄が空なら
        hasError = true; //エラーあり
        const errorFurigana = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorFurigana.textContent = '*フリガナを入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorFurigana);  //子要素として表示
    };


    if (getZip1 === '' || getZip2 === '') { //郵便番号1が空もしくは郵便番号2が空なら
        hasError = true; //エラーあり
        const errorZip = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorZip.textContent = '*郵便番号を入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorZip);  //子要素として表示
    };


    if (getAddress1 === '') { //都道府県選択が「選択してください」なら
        hasError = true; //エラーあり
        const errorAdress1 = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorAdress1.textContent = '*都道府県を選択してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorAdress1);  //子要素として表示
    };


    if (getAddress2 === '') { //市区町村欄が空なら
        hasError = true; //エラーあり
        const errorAddress2 = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorAddress2.textContent = '*市区町村を入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorAddress2);  //子要素として表示
    };


    if (getAddress3 === '') { //丁目・番地、建物名・号室が空なら
        hasError = true; //エラーあり
        const errorAddress3 = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorAddress3.textContent = '*丁目・番地/建物名・号室を入力してください'; //エラーメッセージの内容
        errorMessage.appendChild(errorAddress3);  //子要素として表示
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


    if (getPhone3 !== '' && !phone1Pattern.test(getPhone3)) { //FAX番号欄が空でないFAX番号が正解パターンでない
        hasError = true; //エラーあり
        const phone3Ng = document.createElement('p'); //エラーメッセージを書くpタグを生成
        phone3Ng.textContent = '*FAX番号の入力形式が正しくありません';  //エラーメッセージの内容
        errorMessage.appendChild(phone3Ng); //子要素として表示
    };


    //if(!checkbox.checked){
    if (checkbox.checked == false) { //チェックボックスがチェックされていないなら
        hasError = true; //エラーあり
        const errorCheckBox = document.createElement('p'); //エラーメッセージを書くpタグを生成
        errorCheckBox.textContent = '*「同意する」にチェックを入れてください'; //エラーメッセージの内容
        errorMessage.appendChild(errorCheckBox); //子要素として表示
    };

    if (hasError) {
        return; //エラーがあったら止める
    };


    sessionStorage.setItem('getEmail', getEmail); //セッションストレージにメールアドレス欄の値を保存
    sessionStorage.setItem('getKanji', getKanji); //氏名欄の値を保存
    sessionStorage.setItem('getFurigana', getFurigana); //フリガナ欄の値を保存
    sessionStorage.setItem('getZip1', getZip1); //郵便番号1の値を保存
    sessionStorage.setItem('getZip2', getZip2); //郵便番号2の値を保存
    sessionStorage.setItem('getAddress1', getAddress1); //都道府県の値を保存
    sessionStorage.setItem('getAddress2', getAddress2); //市区町村欄の値を保存
    sessionStorage.setItem('getAddress3', getAddress3); //丁目・番地、建物名・号室欄の値を保存
    sessionStorage.setItem('getPhone1', getPhone1); //電話番号欄の値を保存
    sessionStorage.setItem('getPhone2', getPhone2); //携帯電話番号欄の値を保存
    sessionStorage.setItem('getPhone3', getPhone3); //FAX番号欄の値を保存

    location.href = 'confirm.html'; //入力確認画面へ遷移

})


