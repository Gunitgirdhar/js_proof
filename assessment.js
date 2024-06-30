/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a list to hold your Student Data
const NFTHolder = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above
function mintNFT (_firstName, _lastName, _UID, _branch) {
    const NFT = {
        "_firstName": _firstName,
        "_lastName": _lastName,
        "_UID": _UID,
        "_branch": _branch
    }
    // here we are pushing objects in the NFT list
    NFTHolder.push(NFT);
    console.log("Minted: "+ _firstName);
}

// create a "loop" that will go through an list of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTHolder.length; ++i){
        console.log();
        console.log("First Name: \t\t" + NFTHolder[i]._firstName);
        console.log("Last Name: \t\t" + NFTHolder[i]._lastName);
        console.log("UID: \t\t" + NFTHolder[i]._UID);
        console.log("Branch: \t\t" + NFTHolder[i]._branch);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number NFTs held: "+NFTHolder.length);
}

// call your functions below this line and insert the data manually
mintNFT("Gunit", "Girdhar", "21BCS7260", "CSE");
mintNFT("Anuj", "Bhardwaj", "21BCS7156", "Hotel Management");
mintNFT("Vansh", "Bansal", "21BCS7276", "Architect");
listNFTs();
getTotalSupply();
