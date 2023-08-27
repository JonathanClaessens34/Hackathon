function calcResult(mH, mND, hDFM, hWH) {
    heightTriangle = mH - mND - hWH;
    widthTriangle = hDFM;
    degrees = 180/Math.PI
    result = degrees * Math.atan(heightTriangle / widthTriangle);
    return result;
}

console.log(calcResult(14.02, 1.4020000000000001, 28.76, 2.38));