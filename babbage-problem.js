function babbage (babbageNum, endDigits) {
    // Good luck!
    const regex = new RegExp( `${endDigits}$` );
    let startInt = Math.ceil( Math.sqrt( endDigits ) );
    let numStr;

    do {
        startInt++;
        numStr = Math.pow( startInt, 2 ).toString();
    } while ( !regex.test( numStr ) && startInt <= babbageNum );

    return startInt < babbageNum ? startInt : babbageNum;
}

const test = babbage( 99736, 269696 );
console.log( test );
