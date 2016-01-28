let foo;

function funkyFunc(str) {
    console.log(str);
}

function testFunc() {
    console.log('over here');
}

export const __test__ = {
    test1: () => {console.log('over here');},
    test2: testFunc
};

export default funkyFunc;
