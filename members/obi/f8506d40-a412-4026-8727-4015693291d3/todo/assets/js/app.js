const api_url = 'https://rhythmtype.jp/api_obi/api.php/todos';

let filter = "all"; //フィルターが無効な状態
let sortType = "new"; //新しい順に並んでいる状態


//一覧取得関数（新規追加したら再読み込みしなくても最新の状態が表示される)
const displayToDo = () => {
    try {
        fetch(api_url, {
            method: "GET" //データの読み取りリクエスト
        })

            .then((response) => {
                return response.json(); //受け取ったデータをJavaScriptのオブジェクトに変換
            })

            .then((data) => {
                let filteredData = data; //データを絞り込む変数 全件が入っている
                if (filter === "active") { //もしフィルターが未完了を絞り込む状態なら
                    filteredData = data.filter(todo => todo.completed === false); //配列todoの中のキーcompleatedを持つ値がfalseのもの(未完了のもの)を絞り込む
                } else if (filter === "completed") { //さらにもしフィルターが完了を絞り込む状態なら
                    filteredData = data.filter(todo => todo.completed === true); //配列todoの中のキーcompleatedを持つ値がtrueのもの(完了のもの)を絞り込む
                }

                if (sortType === "new") {  //並び替えの種類が新しい順の時
                    filteredData.sort((a, b) => b.id - a.id); //配列を並び替える関数（aとbを比べて）順番を決める　新しい順(大きいIDが前に来る)　計算結果が： マイナス = aを前に プラス = bを前に
                } else if (sortType === "old") { //並び替えの種類が古い順の時
                    filteredData.sort((a, b) => a.id - b.id); //古い順(小さいIDが前に来る)
                } else if (sortType === "active") { //並び替えの種類が未完了優先の時
                    filteredData.sort((a, b) => a.completed - b.completed); //未完了のものを上にする
                } else if (sortType === "priority") { //並び替えの種類が優先度順の時
                    filteredData.sort((a, b) =>{ 
                        return (b.priority === true) - (a.priority === true); //true=1 false=0 として引き算して並べる 計算結果が： マイナス = aを前に プラス = bを前に
                    });
                }

                const oya = document.getElementById('todo-list'); //親要素ulのDOM要素を取得
                oya.innerHTML = ''; //親の中の要素をリセット
                console.log(data);

                //完了の数を管理する変数
                let completedCount = 0;

                //未完了の数を管理する変数
                let notcompletedCount = 0;


                for (let i = 0; i < filteredData.length; i++) { //配列でかえってくるデータを繰り返し処理で取り出し
                    const todo = filteredData[i];

                    //完了の場合、完了の数を管理する変数をカウントアップ
                    if (todo.completed == true) { //配列todoの中のキーcompleatedを持つ値がtrueなら
                        completedCount++;        //完了の数を管理する変数に1ずつ足していく
                    }
                    //未完了の場合、未完了の数を管理する変数をカウントアップ
                    else if (todo.completed == false) {   //配列todoの中のキーcompleatedを持つ値がfalseなら  trueかfalseかは論理型で二つしかないのでelse{}でつなげてもよい
                        notcompletedCount++;          //未完了の数を管理する変数に1ずつ足していく
                    };

                    const li = document.createElement('li'); //li要素を作る

                    const checkbox = document.createElement('input'); //checkbox要素を作る
                    checkbox.type = 'checkbox'; //checkboxのタイプを設定
                    checkbox.classList.add('select-todo'); //checkboxにクラス名'select-todo'をつける
                    checkbox.value = todo.id; //checkboxの中身は配列todoのidというキーを持つ値
                    li.appendChild(checkbox); //liの子要素としてcheckboxを入れる

                    //優先度表示
                    const priorityLabel = document.createElement('span'); //span要素を作る
                    priorityLabel.textContent = (todo.priority === true) ? "★" : "☆"; //配列todoのpriorityがtrueなら★、falseなら☆を表示
                    priorityLabel.style.cursor = "pointer"; //星マークに来た時にカーソルが指に代わる　クリックできるよって教えるため
                    li.appendChild(priorityLabel); //priorityLabelをliの子要素として入れる
                
                    priorityLabel.addEventListener('click', () => { //クリックで星マークを切り替え
                        togglePriority(todo);
                    });

                    

                    const div1 = document.createElement('div'); //div要素を作る
                    div1.textContent = todo.title; //divの中身は取り出したデータのtitleの部分
                    if (todo.completed == true) {    //配列todoの中のキーcompleatedを持つ値がtrueなら
                        div1.classList.add('done'); //作ったdivにクラス名'done'をつける
                    };
                    li.appendChild(div1); //div1をliの子要素として入れる

                    //完了ボタンを表示するDOMを生成
                    const div2 = document.createElement('div'); //div要素を作る
                    const btn2 = document.createElement('button'); //button要素を作る
                    btn2.textContent = '完了';  //btn2の表示内容は'完了'
                    btn2.setAttribute('class', 'toggle-button'); //btn2にclass属性を設定
                    div2.appendChild(btn2); //div2にbtn2を子要素として入れる
                    li.appendChild(div2); //liにdiv2を子要素として入れる
                    btn2.textContent = (todo.completed == true) ? "未完了に戻す" : "完了";  //btn2の表示内容は配列todoの中のキーcompleatedを持つ値がtrueが真のとき'未完了に戻す'偽のとき'完了'
                    div2.addEventListener('click', () => {  //完了ボタンを押したときのイベント処理を追加
                        toggleCompleted(todo);  //完了・未完了の状態を更新する関数を呼び出し、引数に一件のデータを渡す
                    });

                    const div3 = document.createElement('div');  //div要素を作る
                    const btn3 = document.createElement('button'); //button要素を作る
                    btn3.textContent = '編集';  //btn3の表示内容は'編集'
                    btn3.setAttribute('class', 'toggle-button'); //btn3にtoggle-buttonというクラス名をつける
                    div3.appendChild(btn3); //div3にbtn3を子要素として入れる
                    li.appendChild(div3); //liにbtn3を子要素として入れる
                    btn3.addEventListener('click', () => {  //編集ボタンを押したときのイベント処理を追加
                        updateTitle(todo);  //タイトルを更新する関数を呼び出し、引数に一件のデータを渡す
                    });


                    const div4 = document.createElement('div');  //div要素を作る
                    const btn4 = document.createElement('button'); //button要素を作る
                    btn4.textContent = '削除';  //btn3の表示内容は'削除'
                    btn4.setAttribute('class', 'toggle-button'); //btn4にtoggle-buttonというクラス名をつける
                    div4.appendChild(btn4); //div4にbtn4を子要素として入れる
                    li.appendChild(div4); //liにdiv4を子要素として入れる
                    //削除ボタンを押したときのイベント処理を追加
                    btn4.addEventListener('click', () => { //一つ一つ取得して設定するのではなくボタンを作った時点でイベントをつける
                        deleteToDo(todo); //削除する関数を呼び出し、引数にデータ一件分を渡す
                    });

                    oya.appendChild(li); //oyaにliを子要素として入れる

                };



                const getCount = document.getElementById('count'); //h2のDOM要素を取得
                getCount.textContent = 'ToDo一覧' + '(全' + data.length + '件、' + 'うち完了' + completedCount + '件、' + '未完了' + notcompletedCount + '件)'; //文字列を出力



            });


    } catch (error) {
        console.log(error);
    }
};

//★☆を切り替える関数
const togglePriority = (todo) => {
    const url = api_url + "/" + todo.id; //どのデータを操作するか伝える

        fetch(url, {
            method: "PATCH", //一部変更のPATCHをリクエスト
            headers: { "Content-Type": "application/json" }, //JSON形式で送信という指示
            body: JSON.stringify({ //データをJSON形式に変換(オブジェクト→JSON)
                priority: !todo.priority //trueとfalseをひっくり返す = ★あり（true） → クリック → ★なし（false）/★なし（false） → クリック → ★あり（true）

                })
                    })

        .then((response) =>{
            return response.json();  //受け取ったデータをJavaScriptのオブジェクトに変換
                })

        .then(() => {
            displayToDo(); //一覧取得の関数を呼び出し
                });
};

const getNotCompleted = document.getElementById('getNotCompleted'); //「未完了で絞り込む」ボタンのDOM要素を取得
getNotCompleted.addEventListener('click', () => { //「未完了で絞り込む」ボタンを押したときのイベント処理を追加
    filter = "active"; //未完了だけ表示フィルターを有効にする
    displayToDo(); //一覧取得の関数を呼び出し
});

const getCompleted = document.getElementById('getCompleted'); //「完了」で絞り込むボタンのDOM要素を取得
getCompleted.addEventListener('click', () => { //「完了」で絞り込むボタンを押したときのイベント処理を追加
    filter = "completed"; //完了だけ表示フィルターを有効にする
    displayToDo(); //一覧取得の関数を呼び出し
});

const getAll = document.getElementById('getAll'); //「すべて表示」ボタンのDOM要素を取得
getAll.addEventListener('click', () => { //「すべて表示」ボタンを押したときのイベント処理を追加
    filter = "all"; //フィルターを無効にする
    displayToDo(); //一覧取得の関数を呼び出し
});

const getSort = document.getElementById('sort'); //「並べ替え」ボタンのDOM要素を取得
getSort.addEventListener('change', (e) => { //「並べ替え」の中の値が変わったときのイベント処理を追加　eはイベント情報が入っているオブジェクト
    sortType = e.target.value; //selectの中の今選ばれている値
    displayToDo(); //一覧取得の関数を呼び出し
});



displayToDo(); //一覧取得の関数を呼び出し


//選択されたToDoをまとめて取得する関数
const getSelectedIds = () => {
    const checked = document.querySelectorAll('.select-todo:checked'); //select-todoというクラス名がついたもののうちチェックされた状態のもののDOM要素を取得
    return Array.from(checked).map(cb => cb.value); //取得したものを配列に変換しidだけを抜き出して配列にして戻り値として出力
};

//まとめて完了、未完了を管理する処理関数
const updateSelectedTodos = (completed) => { //completed（完了、未完了を表す値）を引数として渡す
    const ids = getSelectedIds(); //チェックされたもののidを取得

    fetch(api_url)

        .then((response) => {
            return response.json(); //受け取ったデータをJavaScriptのオブジェクトに変換
        })

        .then((data) => {
            const targets = data.filter(todo => ids.includes(String(todo.id))); //フィルターの条件にあうものがidsの中にあるか探して、見つけたidを文字列に変換
            targets.forEach(todo => { //対象のものを一つずつ取り出す
                todo.completed = completed; //配列todoのcompletedというキーを持つ値の状態を引数に渡された値(true or false)に変更
                toggleCompleted(todo); //完了、未完了を処理する関数に配列todoを引数として渡して呼び出し
            });
        });

};

const getcompleteSelected = document.getElementById('completeSelected'); //「☑を完了」ボタンのDOM要素を取得
getcompleteSelected.addEventListener('click', () => { //「☑を完了」ボタンを押したときのイベント処理を追加
    updateSelectedTodos(true); //まとめて完了、未完了を管理する処理関数にtrueを引数として渡して呼び出し
});

const getunCompleteSelected = document.getElementById('uncompleteSelected'); //「☑を未完了」ボタンのDOM要素を取得
getunCompleteSelected.addEventListener('click', () => { //「☑を未完了」ボタンを押したときのイベント処理を追加
    updateSelectedTodos(false); //まとめて完了、未完了を管理する処理関数にfalseを引数として渡して呼び出し
});



//新規追加
const addBtn = document.getElementById('add-btn'); //追加ボタンのDOM要素を取得

addBtn.addEventListener('click', () => { //追加ボタンをクリックした時の処理

    try {
        const data = document.forms.form1.addtext.value.trim();  //入力フィールドに入力した内容を取得
        
        if (data === "") { //もし入力フィールドが空なら
            throw new Error('入力フィールドに文字を入力してください'); //エラーメッセージを出す
        }
        else if (data.length >= 100) { //もし文字数が100以上なら
            throw new Error('文字数制限は100文字以内です'); //エラーメッセージを出す
        };
        fetch(api_url, {
            method: "POST", //新規追加のPOSTメソッド
            headers: { "Content-Type": "application/json" }, //JSON形式で送信という指示
            body: JSON.stringify({ //データをJSON形式に変換(オブジェクト→JSON)
                title: data, //実際のデータをセット　キー: 値(入力されたデータ)
                priority: false //newPriority || data.priority // 最初は星なし=false
            })
        })

            .then((response) => {
                return response.json(); //受け取ったデータをJSON→オブジェクトに変換
            })

            .then((data) => {
                console.log(data);
                filter = "all";
                sortType = "new";
                displayToDo(); //一覧取得関数の呼び出し
            });
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        alert(error.message); //ポップアップでエラーメッセージを出す
    };
});

//削除ボタンを押したときの処理関数
const deleteToDo = (todo) => { //todoデータの一件を引数として受け取る
    //確認の命令を出す
    if (confirm("本当に削除しますか？") === false) return; //本当に削除しますか？でいいえを選んだら処理を止める
    const url = api_url + "/" + todo.id; //urlの文字列に引数で受け取ったデータの中のidをつなげる
    try {
        fetch(url, {
            method: "DELETE", //削除のDELETEメソッド
            headers: { "Content-Type": "application/json" } //JSON形式で送信という指示
        })
            .then((response) => {  //データを受けとり
                console.log(response);
                filter="all";
                sortType = "new";
                displayToDo(); //一覧取得関数を呼び出し
            });
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        alert(error.message); //ポップアップでエラーメッセージを出す
    };
};


//タイトルを更新する処理関数
const updateTitle = (todo) => {
    const url = api_url + "/" + todo.id; //urlの文字列に引数で受け取ったデータの中のidをつなげる
    const newTitle = prompt("編集内容を入力してください", todo.title);  //タイトルを入力できるポップアップ
    if (newTitle === null || newPriority === null) return; //nullのときはキャンセルなので強制終了 
    const data = newTitle.trim(); //データの中身は入力内容。余分なスペースはカット

    try {
        fetch(url, {
            method: "PATCH", //一部変更のPATCHメソッド
            headers: { "Content-Type": "application/json" },  //JSON形式で送信という指示
            body: JSON.stringify({ //データをJSON形式に変換
                title: data, //配列todoのtitleというキーの値は受け取ったデータ（入力内容）
                priority: !todo.priority
            })
        })

            .then((response) => {
                return response.json(); //受け取ったデータをJSON→オブジェクトに変換
            })

            .then((data) => {
                console.log(data);
                filter = "all";
                sortType = "new";
                displayToDo(); //一覧取得関数を呼び出し
            });
    } catch (error) {
        console.log(error);
        console.log(error.message);
        alert(error.message); //ポップアップでエラーメッセージを出す
    };
};

//完了・未完了の状態を更新する処理関数
const toggleCompleted = (todo) => {
    const url = api_url + "/" + todo.id; //urlの文字列に引数で受け取ったデータの中のidをつなげる
    const data = (todo.completed == false) ? true : false; //データの中身は配列todoの中のcompletedというキーを持つ値がfalseが真ならtrue、偽ならfalse = 完了してたらtrue 未完了ならfalse
    try {
        fetch(url, {
            method: "PATCH", //一部変更のPATCHメソッド
            headers: { "Content-Type": "application/json" },  //JSON形式で送信という指示
            body: JSON.stringify({  //データをjson形式に変換
                completed: data //配列todoの中のcompletedというキーの値は受け取ったデータ(trueかfalse = 完了か未完了)
            })
        })

            .then((response) => {
                return response.json(); //受け取ったデータをJSON→オブジェクトに変換
            })

            .then((data) => {
                console.log(data);
                filter = "all";
                sortType = "new";
                displayToDo(); //一覧取得関数を呼び出し
            });
    } catch (error) {
        console.log(error);
        console.log(error.message);
        alert(error.message); //ポップアップでエラーメッセージを出す
    };
};

