"use strict";
// list4.11 変数の名前は使用できる範囲(スコープ)が広くなるほど具体的に
var usedSomething = 0;
var notUsedSomething = 0;
{
    var something = [1, 2, 3];
    for (var i = 0; i < something.length; i++) {
        var s = something[i];
        if (s < 2) {
            usedSomething += s;
        }
        else {
            notUsedSomething += s;
        }
    }
}
console.log(usedSomething);
console.log(notUsedSomething);
//list4.15 文字列の宣言の例
var userName = "Moe Yamada";
var welcome = '"Welcome back!"';
var message1 = userName + " says " + welcome;
console.info(userName);
console.info(welcome);
console.info(message1);
//list4.16 エスケープシーケンスを使用する場合
var welcome2 = '\"Welcome back!\"';
var message2 = userName + "says\r\n" + welcome;
console.info(welcome2);
console.info(message2);
