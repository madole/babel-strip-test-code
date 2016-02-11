let foo;

function funkyFunc(str) {
    console.log(str);
}

function testFunc() {
    console.log('over here');
}

export const __test__ = { testFunc };

export default funkyFunc;
