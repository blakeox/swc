class Demo {
    constructor(name){
        this.name = name;
    }
    greet() {
        console.log('length', this.name?.length);
    }
}
const d = new Demo();
d.greet();
