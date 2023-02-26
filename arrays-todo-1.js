//* PUSH FRONT
    
    // push front ([5,7,2,3],8) => [8,5,7,2,3]
        var arr1 = [5,7,2,3];
        arr1.unshift(8)
            //? unshift() method to easily add new elements or values at the beginning of an array in JavaScript. This method is a counterpart of the push() method, which adds the elements at the end of an array. However, both method returns the new length of the array.
        console.log("PUSH FRONT:", arr1);
            // PUSH FRONT: [ 8, 5, 7, 2, 3 ]

//* POP FRONT
    
    // popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
        var arr2 = [0,5,10,15];
        var removedVar = arr2.shift();
            //? The shift() method removes the first item of an array.
            //? The shift() method changes the original array.
            //? The shift() method returns the shifted element.
        console.log("POP FRONT:", arr2);
        console.log("POP FRONT Removed Variable:", removedVar);
            // POP FRONT: [ 5, 10, 15 ]
            // POP FRONT Removed Variable: 0

//* INSERT AT
    
    // insertAt([100,200,5], 2, 311) => [100,200,311,5]
        var arr3 = [100,200,5];
        arr3.splice(2, 0, 311);
            //? The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. var.splice(1, 0, 'Feb') => Inserts at index 1 => output: Array ["Jan", "Feb", "March", "April", "June"]
        console.log("INSERT AT:", arr3);
        // console.log("POP FRONT Removed Variable:", removedVar);
            // POP FRONT: [ 5, 10, 15 ]
            // POP FRONT Removed Variable: 0
