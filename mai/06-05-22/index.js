// recursive function
// recursive Function sind function, die sich selber wieder aufrufen
// wichtig: die function braucht ein abbruchkriterium, das einen erneuten Aufruf unterbindet

const countdown = (num) => {
    if (num < 0) {
        return;
    }
    console.log(num);
    countdown(num - 1);

};
(countdown(20));

const mainNavTree = [
    {
        title: "Home",
    },
    {
        title: "Folder",
        children: [
            {
                title: "Item1",
            },
            {
                title: "Item2",
            },
            {
                title: "Subfolder1",
                children: [
                    {
                        title: "Subitem1",
                    },
                    {
                        title: "Subitem2",
                    },
                ],
            },
        ],
    },
    {
        title: "Something else",
    },
];
console.log(mainNavTree);


const recursiveFlat = (arr, level = 0) => {
    for (const item of arr) {
        console.log(" ".repeat(level), "=> ", item.title);
        if (item.children) {
            recursiveFlat(item.children, level +1)
        }
    }
};
recursiveFlat(mainNavTree);