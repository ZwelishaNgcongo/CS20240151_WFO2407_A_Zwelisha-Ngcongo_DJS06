// A list of provinces:
/*  Array containing province names */
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
/*  Array containing names */
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];
/* 1.forEach basics: */
provinces.forEach((province) =>
  console.log("forEach Province Name", province)
); /* Iterating over each province in provinces and logs it. */
names.forEach((name) =>
  console.log("forEach Name", name)
); /* Iterating over each name in names and logs it. */
names.forEach(
  (name, index) =>
    console.log(
      "Name (Province)",
      `${name} (${provinces[index]})`
    ) /* For each name in names, it logs the name and its corresponding province from provinces based on the same index. */
);

/* 2. Uppercase Transformation */
/* map transforms each province to uppercase. */
const upProvinces = provinces.map((province) => province.toUpperCase());
/* displaying the transformed array. */
console.log("2.Uppercase Transformation", upProvinces);

/* 3. Name Lengths */
/* map creates an array containing that length of each respective name. */
const nameLengths = names.map((name) => name.length);
/* Logs the array of name lengths. */
console.log("3.Name Lengths", nameLengths);

/* 4. Sorting */
/* provinces are sorting alphabetically. */
const sortedProvinces = [...provinces].sort();
/* Log the sorted provinces. */
console.log("4.Sorting", sortedProvinces);

/* 5. Filtering Cape */
/* filter returns an array of provinces that do not contain the word  "Cape". */
const nonCape = provinces.filter((province) => !province.includes("Cape"));
/* Log count of nonCape provinces. */
console.log("5.Filtering Cape", nonCape.length);

/* 6. Finding 'S' */
/* mapping checks if each name contains the letter "s" */
const containingS = names.map((name) => name.toLowerCase().includes("s"));
/* Log an array of booleans indicating if each name contains "s". */
console.log("6. Finding s", containingS);

/*  7. Creating Object Mapping */
/* reduce allows us to creates an object where each name maps to its corresponding province using the index. */
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
/* Log the nameProvinceMap object. */
console.log("7.Creating Object Mapping", nameProvinceMap);

// A list of products with prices:
/* an array of products, each represented as an object with product and price fields. note some prices are non-numeric or empty. */
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/* 1. Log Products */
/* map allow us to extracts the product name from each item. */
console.log(
  products.map((item) => item.product).join("\n")
); /* join("\n") allows us to creates a string with each product on a new line. */

/* 2. Filter by Name Length */
/* filter targets products whose product name length has 5 or fewer characters. */
console.log(
  products
    .filter((item) => item.product.length <= 5)
    .map((item) => item.product)
);

/*  3. Price Manipulation */
console.log(
  products
    .filter(
      (item) => item.price !== "" && item.price !== " "
    ) /* filter selects items with non-empty and non-blank price. */
    .map((item) =>
      Number(item.price)
    ) /* map converts each price to a number. */
    .reduce(
      (sum, price) => sum + price,
      0
    ) /* reduce sums the prices starting with 0. */
);

/* 4. Concatenate Product Names */
console.log(
  products.reduce(
    /* reduce concatenates each product name into a single comma-separated string. */
    (str, item, index /* index applied to avoid a leading comma. */) =>
      index === 0 ? item.product : `${str}, ${item.product}`,
    ""
  )
);

/*  5. Find Extremes in Prices */
console.log(
  (() => {
    const validProducts = products.filter(
      /* filter selects valid products with numeric prices. */
      (item) =>
        item.price !== "" && item.price !== " " && !isNaN(Number(item.price))
    );
    const highest = validProducts.reduce(
      (
        max,
        item /* reduce finds the product with the highest price and the lowest price. */
      ) => (Number(item.price) > Number(max.price) ? item : max)
    );
    const lowest = validProducts.reduce((min, item) =>
      Number(item.price) < Number(min.price) ? item : min
    );
    return `Highest: ${highest.product}. Lowest: ${lowest.product}`; /* Log a message with the names of the products having the highest and lowest prices. */
  })()
);

/* 6. Object Transformation */
console.log(
  products.reduce((acc, item) => {
    /* reduce creates an array of objects where each has name and cost keys, corresponding to the product and price of each item. */
    acc.push({
      name: item.product,
      cost: item.price,
    });
    return acc; /* Log the transformed array of objects. */
  }, [])
);
