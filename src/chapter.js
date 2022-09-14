{
    // function fn() {
    //     return {
    //         name: 'zhangq',
    //         navList: [{
    //             name: 'qii'
    //         }]
    //     }
    // }
    // let b = fn()
    // let {name: person, navList:[{name: newPerson}]} = b
    // console.log(person, newPerson);

    // const t3 = '\u{20bb7}'
    // for(let i = 0; i < t3.length; i ++) {
    //     console.log('for' + t3[i]);
    // }

    // for(let word of t3) {
    //     console.log('for-of' + word);
    // }

    //fill
    const list = [1, 2, 3, 4, 5]
    let list1 = [...list].fill(3)
    let list2 = [...list].fill(3, 0, 4)
    console.log(list1, list2);

    
}