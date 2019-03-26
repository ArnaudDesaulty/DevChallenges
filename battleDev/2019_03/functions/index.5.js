
function ContestResponse(){
    let n = +input[0];

    let row = input[1].split('');
    let current = row.indexOf('X');

    let choices = row.slice().map((_,i) => i);
    choices.splice(current, 1);
    let best = [];
    let curIndex = current;

    function dist2o(choices, pos, backward){
        let cpy = choices.slice();
        if(backward){
            cpy.reverse();
        }

        cpy = cpy.slice(pos).map(e => row[e]);

        return cpy.indexOf('o') === -1 ? Infinity :  cpy.indexOf('o');

    }

    while(choices.length > 1){
        let left =  choices[curIndex-1];
        let right = choices[curIndex];

        if(dist2o(choices, curIndex, true) < dist2o(choices, curIndex, false)){
            best.push(left);
            choices.splice(curIndex-1, 1);
            curIndex--;
        } else {
            best.push(right);
            choices.splice(curIndex, 1);
        }
        curIndex = Math.max(curIndex, 0);
        curIndex = Math.min(curIndex, choices.length -1 );
    }

    best.push(choices[0]);


    console.log(best.map(e => row[e]).join(''));







}
