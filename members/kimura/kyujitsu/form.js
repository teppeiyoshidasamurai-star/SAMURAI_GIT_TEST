const btn = document.getElementById('btn');  //ボタンを取得

//クリックした時のイベント処理
btn.addEventListener('click', (e) => { 
    //リロードを防ぐ
    e.preventDefault();

    const getName = document.forms.form1.namae.value;
    console.log('お名前:' + getName);

    const getFurigana = document.forms.form1.furigana.value;
    console.log('フリガナ:' + getFurigana);

    const getEmail = document.forms.form1.email.value; //フォームの内容を取得
    console.log('メールアドレス:' + getEmail); // 文字列+取得した情報

    const getPhone = document.forms.form1.phone.value;
    console.log('電話番号:' + getPhone);

    const getPost = document.forms.form1.postal.value;
    console.log('郵便番号:' + getPost);

    const address = document.forms.form1.address.value;
    console.log('ご住所:' + address);

    const note = document.forms.form1.note.value;
    console.log('備考:' + note);

    console.log(document.getElementById('agree0'));
    //checkboxはagreeという名前の配列。今回は「同意」1個しか入ってないからインデックス０。
    if(document.getElementById('agree0').checked) {
        console.log('同意');
    }
    //エラーフラグを宣言
    let hasError = false;

    //id名errorMessageのhtml要素を取得
    const errorMessageArea = document.getElementById('errorMessage');

    //id名errorMessageのdivタグ内の内容をいったんリセット
    errorMessageArea.textContent='';

    // お名前フィールドの未入力チェック
    if(getName == "") {
        const p =document.createElement('p');
        p.textContent = 'お名前を入力してください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }
    //フリガナフィールドの未入力チェック
    if(getFurigana == "") {
        const p =document.createElement('p');
        p.textContent = 'フリガナを入力してください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }
    //メールアドレスフィールドの未入力チェック
    if(getEmail == "") {
        const p =document.createElement('p');
        p.textContent = 'メールアドレスを入力してください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }
    //電話番号フィールドの未入力チェック
    if(getPhone == "") {
        const p =document.createElement('p');
        p.textContent = '電話番号を入力してください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }
    //郵便番号フィールドの未入力チェック
    if(getPost == "") {
        const p =document.createElement('p');
        p.textContent = '郵便番号を入力してください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }
    //住所の未入力チェック
    if(address == "") {
        const p =document.createElement('p');
        p.textContent = 'ご住所を入力してください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }
    //同意ボタンにチェックしているか
    if(form1.agree.checked == false) {
        const p =document.createElement('p');
        p.textContent = '同意ボタンにチェックをしてください'; 
        errorMessageArea.appendChild(p);
        hasError = true;
    }

    //id名patternErrorのhtml要素を取得
    const patternErrorArea = document.getElementById('patternError');

    //id名patternErrorのdivタグ内の内容をいったんリセット
    patternErrorArea.textContent='';

    //エラーメッセージを格納する配列
    let errors = [];

    //メールアドレスのバリデーション（使える記号は.と＠のみとする）
    const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+$/;

    if(!emailPattern.test(getEmail)) {
        errors.push('<p>メールアドレスの入力形式が正しくありません。</p>')
        hasError = true;
    }
    //電話番号のバリデーション
    //　\dは数字、{2,4}は2~4桁、ハイフンあってもなくてもいいときは-?
    const phonePattern = /^\d{2,4}-\d{2,4}-\d{3,4}$/; 

    if(!phonePattern.test(getPhone)) {
        errors.push('<p>電話番号の入力形式が正しくありません</p>')
        hasError = true;
    }
    //備考の文字数制限
    if(note.length > 100) {
        errors.push('<p>100文字を超えています。</p>')
        hasError = true;
    }

    // エラーがあれば画面に表示
    if (errors.length > 0) {
        // 配列を改行区切りの文字列に変換して画面に表示。innerHTMLは中にタグを作れる。
        patternErrorArea.innerHTML = errors.join('');
    } 
    if (hasError === false){
        patternErrorArea.innerHTML = ''; // エラーメッセージをクリア
        alert('バリデーションOKです');
        //Session Storageに入力内容を保存
        sessionStorage.setItem('getName',getName);
        sessionStorage.setItem('getFurigana',getFurigana);
        sessionStorage.setItem('getEmail',getEmail);
        sessionStorage.setItem('getPhone',getPhone);
        sessionStorage.setItem('getPost',getPost);
        sessionStorage.setItem('address',address);
        sessionStorage.setItem('note',note);

        //別のWebページに遷移
        location.href='confirm.html';
    }
    else {
        alert('バリデーションエラーです');
    }

});