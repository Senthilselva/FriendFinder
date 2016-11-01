// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var FriendArray = [
	{
		name: 'Kumar',
		picture: 'https://static.pexels.com/photos/27714/pexels-photo-27714.jpg',
		scores :[
		5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
		]
	}, {

	name: "Ahmed",
	photo: "https://static.pexels.com/photos/132419/pexels-photo-132419.jpeg",
	scores: [
	5,
	1,
	4,
	4,
	5,
	1,
	2,
	5,
	4,
	1
	]
	},
	{
	name: "Jacob Deming",
	photo: "https://static.pexels.com/photos/103573/pexels-photo-103573.jpeg",
	scores: [
	4,
	2,
	5,
	1,
	3,
	2,
	2,
	1,
	3,
	2
	]
	},
	{
	name: "Jeremiah Scanlon",
	photo: "http://weknowyourdreams.com/images/flowers/flowers-01.jpg",
	scores: [
	5,
	2,
	2,
	2,
	4,
	1,
	3,
	2,
	5,
	5
	]
	},
	{
	name: "Louis T. Delia",
	photo: "http://weknowyourdreams.com/images/flowers/flowers-03.jpg",
	scores: [
	3,
	3,
	4,
	2,
	2,
	1,
	3,
	2,
	2,
	3
	]
	},
	{
	name: "Lou Ritter",
	photo: "http://weknowyourdreams.com/images/flowers/flowers-07.jpg",
	scores: [
	5,
	4,
	3,
	4,
	1,
	5,
	2,
	3,
	1,
	4
	]
	}

];

//console.log(FriendArray);
// Note how we export the array. This makes it accessible to other files using require.
module.exports = FriendArray;
