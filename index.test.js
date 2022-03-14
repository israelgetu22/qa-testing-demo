const { formatTitle, shortenBio, convertLength } = require("./public/utils");

let testData = {
  id: 1,
  firstName: "Patten",
  lastName: "Goforth",
  bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  datetime: "2022-03-14 8:00:00",
  title: "nulla ac",
  length: 65,
  floor: 5,
  roomNumber: 3,
};

//Showning a basic jest test

test("2 should equal 2", () => {
  expect(2).toBe(2);
});

// To show that we can access our fake data

test("First name should be Patten", () => {
  expect(testData.firstName).toBe("Patten");
});

// Creating a described block to test our functions

describe("formatTitle tests", () => {
  //lets test the data types
  test("formatTitle should return a string", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(typeof formattedTitle).toBe("string");
  });

  //lets try testing the actual value from formatTitle
  test("formatTitle should shorten the bio string", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(formattedTitle).toBe("Nulla Ac");
  });
});
//test toBe vs toEqual

test("toBe vs toEqual, what's the differenve", () => {
  const myObj = { myNum: 4 };
  const myObj2 = { myNum: 4 };
  expect(myObj).toEqual(myObj2); //toBe is not working
});
