const add = (a,b) => a + b

test("adding 2 numbers", () => {
    const result = add(4,5)

    if(result !== 9) {
        throw new Error('Result is not corrrect')
    }

})