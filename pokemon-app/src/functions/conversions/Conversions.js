
    export function heightAndWeightConverter(value) {
        //turns value into string and not a number
        value = value + ""

        const tempArray = value.split('');
        tempArray.splice(tempArray.length - 1, 0, '.')

        return tempArray.join("")
    }

    export function test() {
        console.log('hi')
    }


