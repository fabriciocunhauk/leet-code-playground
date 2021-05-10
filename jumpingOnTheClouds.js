function jumpingOnClouds(c) {
    let numOfJumps = 0;

    for (let i = 0; i < c.length; i++) {
        // get each number
        // if next number is === 0 and nextToNext number are === 0 make index === nextToNext
        // if next number is === 0 jump
        //return numOfJumps

        let currentCloud = c[i]
        let nextCloud = c[i + 1]
        let afterNextCloud = c[i + 2]

        if (nextCloud === currentCloud && afterNextCloud === currentCloud) {
            c.shift();
        }
        if (nextCloud === 0) {
            numOfJumps++;
        }
    }
    return numOfJumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
