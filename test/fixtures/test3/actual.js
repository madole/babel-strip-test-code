let foo;

function funkyFunc(str) {
    console.log(str);
}

function test() {
    console.log('over here');
}

export default funkyFunc;

export const __test__ = {
    test1: () => {console.log('over here');}
};
