// Iteration 1: Names and Input
let hacker1 = "Antonio";
console.log(`The driver’s name is ${hacker1}`);
let hacker2 = "Milagros";
console.log(`The navegator’s name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1length = hacker1.length;
let hacker2length = hacker2.length;
if (hacker1.length > hacker2.length) {
   console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
   );
} else if (hacker1.length < hacker2.length) {
   console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
   );
} else {
   console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
   );
}

// Iteration 3: Loops

let upperName = "";
for (let i = 0; i < hacker1.length; i++) {
   upperName = hacker1.toUpperCase();
}
upperName = upperName.split("").join(" ");
console.log(upperName);

let reverseName = "";
for (let i = hacker2.length -1; i >= 0; i--) {
   reverseName = reverseName + hacker2[i];
}
console.log(reverseName);


if (hacker2.localeCompare(hacker1) === 1) {
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus1


let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nulla eu tincidunt laoreet. Mauris tincidunt egestas metus non volutpat. Sed bibendum, lectus sit amet suscipit viverra, odio nulla eleifend mauris, quis ultricies sapien diam mattis turpis. Sed imperdiet turpis sem, quis scelerisque leo tempor ac. Pellentesque convallis feugiat lacus eu rutrum. Vivamus eleifend, felis in rhoncus semper, tortor nulla malesuada odio, eu aliquam orci ex a dolor. Curabitur ornare fringilla nulla, eu condimentum turpis. Nullam congue ipsum vitae justo molestie, a vestibulum lacus sollicitudin. Donec turpis sapien, tempus ac efficitur sed, sagittis in est. Praesent accumsan ultrices urna, non sagittis tortor. Suspendisse sed molestie tellus, sit amet congue turpis. Ut est lectus, placerat eu egestas a, pulvinar id mauris. Cras iaculis feugiat velit a elementum. Morbi non nisl euismod, sodales libero laoreet, malesuada tellus. Nam a est massa. Aenean posuere consequat ipsum sit amet volutpat. Morbi commodo elit et massa iaculis dapibus. Proin eleifend mauris sit amet nibh aliquet, sed fringilla felis vulputate. Nulla eget dolor purus. Etiam vel arcu nisi. Nam lobortis, mi et molestie pharetra, turpis libero scelerisque odio, sit amet lacinia ante ante eget mauris. Maecenas euismod pretium mauris, id pellentesque nunc vestibulum ac. Morbi a scelerisque dolor, a ultrices purus. Pellentesque convallis pulvinar leo volutpat suscipit. Suspendisse congue at magna ac laoreet. Ut vitae mi arcu. Nulla aliquam faucibus sem, vitae fermentum purus gravida vel. Aenean vestibulum arcu vel suscipit interdum. Donec euismod, ligula a porttitor pulvinar, dui nulla tristique ex, id pharetra mauris leo vitae orci. Aliquam augue nisl, dignissim et elit sit amet, tincidunt cursus nulla. Integer elementum fringilla leo, vulputate cursus est luctus sit amet. Morbi quis ligula eget odio finibus porta. Sed ullamcorper commodo aliquam. Pellentesque quam libero, pulvinar quis accumsan ac, sagittis vitae nisl. Sed ut dolor mattis, euismod mi vel, fermentum arcu. Quisque velit risus, porta sit amet porttitor a, condimentum dictum purus. Vestibulum interdum varius enim eget semper. Duis tincidunt quam in tortor tincidunt, vel sollicitudin magna pretium. Maecenas eu eros justo. Integer auctor arcu magna, ac porttitor leo gravida non."

let count = 0
let countWords = text.split(" ")
for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        count ++;
    }
}
console.log(count)

let countEt = text.split(" et ").length -1;
console.log(countEt)
