const lewy = {
    name: "Lewandowski",
    position: "Striker",
    club: "FC Bayern",
    salary: 10000000,
    goals: 185,
};

const test = {
    club: "Testclub",
    test: 1,
    foo: "bar",
};

const names = [];

const displayName = (footballPlayer) => {
    const { name: fullName, position } = footballPlayer;
    // Schreibweise OHNE Object destructuring
    //   const fullName = footballPlayer.name;
    //   const position = footballPlayer.position;
    console.log(fullName);
    console.log(position);
    names.push(fullName);
};

const displayRest = (footballPlayer) => {
    const { salary, ...rest } = footballPlayer;
    // Schreibweise OHNE Object destructuring
    //   let rest = {};
    //   for (const [key, value] of Object.entries(footballPlayer)) {
    //     if (key !== "salary") {
    //       rest[key] = value;
    //     }
    //   }

    console.log(rest);
};

const displayClub = ({ club }) => {
    console.log(club);
};

displayName(lewy);
displayRest(lewy);
displayClub(lewy);
displayClub(test);